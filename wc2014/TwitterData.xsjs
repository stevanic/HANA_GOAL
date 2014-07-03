$.import("wc2014", "RStoJSON");

function collectData(alphaVal){
	var alpha_val_query = ' SELECT MAX(DOUBLEARGS) FROM "WC2014"."PAL_NOOFGOAL_CONTROL_TBL" WHERE NAME = \'ALPHA\' ';
	var alpha_val_upd_query = 'UPDATE "WC2014"."PAL_NOOFGOAL_CONTROL_TBL" SET DOUBLEARGS = ? WHERE NAME = \'ALPHA\'';
	var data_query = 'SELECT "TIME", "OUTPUT", ' +
			' "RAWDATA" ' + 
			' ' + 
	'FROM "WC2014"."PAL_NOOFGOAL_RESULT_TBL" AS R1 INNER JOIN "WC2014"."PAL_NOOFGOAL_DATA_TBL" AS D ' +
	'ON D."ID" = R1."TIME" ORDER BY R1."TIME" '; 
	var conn = $.db.getConnection(); 
	var pstmt, alphaPstmt;
	var rs, alphaRs;
	var alphaValInDB;
	
	try{
		
		alphaPstmt = conn.prepareStatement(alpha_val_query);
		alphaRs = alphaPstmt.executeQuery();
		if(alphaRs.next()){
			alphaValInDB = alphaRs.getDouble(1);
		}
		
		if(alphaVal != null && alphaValInDB != null){
			if(alphaVal != alphaValInDB) {
				var alphaUpdPstmt = conn.prepareStatement(alpha_val_upd_query);
				alphaUpdPstmt.setDouble(1, parseFloat(alphaVal));
				alphaUpdPstmt.execute();
				conn.commit();
				
				var analyse_query = 'CALL "WC2014"."wc2014.OBJECT::GoalCount"( ) ';
				var analysePstmt = conn.prepareStatement(analyse_query);
				analysePstmt.execute();
				conn.commit();
			}
		}
		else if(alphaVal == null) {
			alphaVal = alphaValInDB;
		}
		
		pstmt = conn.prepareStatement(data_query);
		rs = pstmt.executeQuery();
	
		var jsonOut = $.wc2014.RStoJSON.recordSetToJSON(rs, 'tweets', alphaVal);
		pstmt.close();
		conn.close();
		
		return JSON.stringify(jsonOut);
	}
	finally {
		if(pstmt != null && !pstmt.isClosed())
			pstmt.close();
		if(rs != null && !rs.isClosed())
			rs.close();
		if(conn != null && !conn.isClosed())
			conn.close();
	}
}

var alphaVal;
if($.request.parameters.get("alpha") != null)
	alphaVal = $.request.parameters.get("alpha");
var returnData = collectData(alphaVal);

$.response.status = $.net.http.OK;
$.response.contentType = "application/json";
$.response.setBody(returnData);