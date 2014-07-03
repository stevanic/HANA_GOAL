$.import("wc2014", "RStoJSON");

function collectData(){
	var data_query = ' SELECT "ID",  ' + 
	 '	  IFNULL( (select count(1) from "WC2014"."wc2014.OBJECT::tweets" as t	 ' + 
	 '		where (SECONDS_BETWEEN( (SELECT MIN(TO_TIMESTAMP( YEAR(t2."created_at") || \'-\' || MONTH(t2."created_at") || \'-\' || DAYOFMONTH(t2."created_at") || \' \' || ' + 
	 '					LPAD(HOUR(t2."created_at"),2,\'0\') || \':\' || LPAD(MINUTE(t2."created_at"),2,\'0\') || \':\' || \'00\' )) FROM "WC2014"."wc2014.OBJECT::tweets" as t2 ) ' + 
	 '		 			, TO_TIMESTAMP( YEAR(t."created_at") || \'-\' || MONTH(t."created_at") || \'-\' || DAYOFMONTH(t."created_at") || \' \' || ' + 
	 '					LPAD(HOUR(t."created_at"),2,\'0\') || \':\' || LPAD(MINUTE(t."created_at"),2,\'0\') || \':\' || \'00\' )) / 60) = D."ID" ' + 
	 '			AND UPPER("text") NOT LIKE \'%GOALKEEPER%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%GOAL KEEPER%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%NO GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%NOT GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%NOT A GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%MISS%GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%GOAL%MISS%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%DISALLOW%GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%GOAL%DISALLOW%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%ANULAR%GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%NO%ACEPTAR%GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%ABLEHNEN%GOAL%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%GOAL%ABLEHNEN%\' ' + 
	 '			AND UPPER("text") NOT LIKE \'%AT GOAL%\' ' + 
	 '			AND EXISTS( SELECT 1 ' + 
	 '				FROM "WC2014"."$TA_TWEETS_LF_I" as i ' + 
	 '				WHERE i."id_str" = t."id_str" ' + 
	 '				AND (UPPER(i.TA_TOKEN) LIKE \'% GOAL %\' OR UPPER(i.TA_TOKEN) LIKE \'% GOL %\'  ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%GOAL %\' OR UPPER(i.TA_TOKEN) LIKE \'GOL %\'  ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'% GOAL %\' OR UPPER(i.TA_TOKEN) LIKE \'% GOL\'  ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%G%O%A%LLL%\'   ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%G%O%LLL%\' ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%G%O%AAA%L%\' ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%G%OOO%A%L%\' OR UPPER(i.TA_TOKEN) LIKE \'%G%OOO%L%\' ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%G%O%A%L%\'  ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%GGG%O%L%\' ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%GG%OO%LL%\' ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%DOEL%\'  ' + 
	 '					OR UPPER(i.TA_TOKEN) LIKE \'%GOLAZO%\') ' + 
	 '				AND UPPER(i.TA_TOKEN) NOT LIKE \'%GOAL%KEEP%\' ' + 
	 '				) ' + 
	 '		group by  ' + 
	 '			SECONDS_BETWEEN( (SELECT MIN(TO_TIMESTAMP( YEAR(t2."created_at") || \'-\' || MONTH(t2."created_at") || \'-\' || DAYOFMONTH(t2."created_at") || \' \' || ' + 
	 '				LPAD(HOUR(t2."created_at"),2,\'0\') || \':\' || LPAD(MINUTE(t2."created_at"),2,\'0\') || \':\' || \'00\' )) FROM "WC2014"."wc2014.OBJECT::tweets" as t2 ) , ' + 
	 '	 		TO_TIMESTAMP( YEAR(t."created_at") || \'-\' || MONTH(t."created_at") || \'-\' || DAYOFMONTH(t."created_at") || \' \' || ' + 
	 '				LPAD(HOUR(t."created_at"),2,\'0\') || \':\' || LPAD(MINUTE(t."created_at"),2,\'0\') || \':\' || \'00\' )) / 60 ' + 
	 '				, TO_TIMESTAMP( YEAR(t."created_at") || \'-\' || MONTH(t."created_at") || \'-\' || DAYOFMONTH(t."created_at") || \' \' || ' + 
	 '			LPAD(HOUR(t."created_at"),2,\'0\') || \':\' || LPAD(MINUTE(t."created_at"),2,\'0\') || \':\' || \'00\' ) ' + 
	 '			), 0) as "NOOFGOALTWEETS",  ' + 
	 '	IFNULL( ( select count(1) as "TweetsPerMinute" ' + 
	 '				from "WC2014"."wc2014.OBJECT::tweets" as t	 ' + 
	 '				where (SECONDS_BETWEEN( (SELECT MIN(TO_TIMESTAMP( YEAR(t2."created_at") || \'-\' || MONTH(t2."created_at") || \'-\' || DAYOFMONTH(t2."created_at") || \' \' || ' + 
	 '					LPAD(HOUR(t2."created_at"),2,\'0\') || \':\' || LPAD(MINUTE(t2."created_at"),2,\'0\') || \':\' || \'00\' )) FROM "WC2014"."wc2014.OBJECT::tweets" as t2 ) ' + 
	 '		 			, TO_TIMESTAMP( YEAR(t."created_at") || \'-\' || MONTH(t."created_at") || \'-\' || DAYOFMONTH(t."created_at") || \' \' || ' + 
	 '					LPAD(HOUR(t."created_at"),2,\'0\') || \':\' || LPAD(MINUTE(t."created_at"),2,\'0\') || \':\' || \'00\' )) / 60) = D."ID" ' + 
	 '				group by YEAR(t."created_at"), MONTH(t."created_at"), DAYOFMONTH(t."created_at") ' + 
	 '							, HOUR(t."created_at"), MINUTE(t."created_at") ' + 
	 '			 ),0) as "TOTAL"' + 
	 'FROM "WC2014"."PAL_NOOFGOAL_DATA_TBL" AS D ' + 
	 'ORDER BY D."ID" ';
	var conn = $.db.getConnection(); 
	var pstmt;
	var rs;
	
	try{
		
		pstmt = conn.prepareStatement(data_query);
		rs = pstmt.executeQuery();
		
		if(rs != null){
			var jsonOut = $.wc2014.RStoJSON.recordSetToJSON(rs, 'tweetsPerMinute', null);
			pstmt.close();
			conn.close();
			return JSON.stringify(jsonOut);
		}
		else {
			return '';
		}
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

var returnData = collectData();
$.response.status = $.net.http.OK;
$.response.contentType = "application/json";
$.response.setBody(returnData);