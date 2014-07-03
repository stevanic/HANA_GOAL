function analyseData(){
	var query = 'CALL "WC2014"."wc2014.OBJECT::GoalCount"( ) ';
	var conn = $.db.getConnection(); 
	var pstmt;
	
	try{
		pstmt = conn.prepareStatement(query);
		pstmt.execute();
		conn.commit();
	}
	finally {
		if(pstmt != null && !pstmt.isClosed())
			pstmt.close();
		if(conn != null && !conn.isClosed())
			conn.close();
	}
}
