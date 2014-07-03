function decStrNum (n) {
    n = n.toString();
    var result=n;
    var i=n.length-1;
    while (i>-1) {
      if (n[i]==="0") {
        result=result.substring(0,i)+"9"+result.substring(i+1);
        i --;
      }
      else {
        result=result.substring(0,i)+(parseInt(n[i],10)-1).toString()+result.substring(i+1);
        return result;
      }
    }
    return result;
}

//pass in the 'created_at' string returned from twitter //
//stamp arrives formatted as Tue Apr 07 22:52:51 +0000 2009 //
function parseTwitterDate($stamp)
{		
//convert to local string and remove seconds and year //		
	var date = new Date(Date.parse($stamp)).toLocaleString().substr(0, 16);
//get the two digit hour //
	var hour = date.substr(-5, 2);
//convert to AM or PM //
	var ampm = hour<12 ? ' AM' : ' PM';
	if (hour>12) { hour-= 12; }
	if (hour===0) { hour = 12; }
//return the formatted string //
	return date.substr(0, 11)+' • ' + hour + date.substr(13) + ampm;
}

function parseTwitterDateTime(text) {
    return new Date(Date.parse(text.replace(/( +)/, ' UTC$1')));
}

function sleep(seconds){
	var curTime = new Date().getTime();
	var laterTime = new Date().getTime();
	var diff = laterTime - curTime;
	var ms = seconds * 1000;
	while(diff < ms){
		laterTime = new Date().getTime();
		diff = laterTime - curTime;
	}
}

function collectTweet() {
	var since_id_sql = "SELECT MAX(\"id_str\") FROM \"WC2014\".\"wc2014.OBJECT::tweets\"";
	var insert_tweet_sql = "INSERT INTO \"WC2014\".\"wc2014.OBJECT::tweets\" VALUES (?, ?, ?, ?)"; 
	var conn = $.db.getConnection(); 
	var pstmt;
	var rs;
	try
	{
				//Start collecting tweets
				
				//Get highest tweet ID that has been obtained.
				var sinceId = '';
				var sincePstmt = conn.prepareStatement(since_id_sql);
				var sinceRs; 
				try	{
					sinceRs = sincePstmt.executeQuery();
					if(sinceRs.next())
						sinceId = sinceRs.getString(1);
				}
				finally{
					if(!sinceRs.isClosed())
						sinceRs.close();
					if(!sincePstmt.isClosed())
						sincePstmt.close();
				}
				var searchTerm = 'BELvsUSA';
				//Obtain tweets
				var dest = $.net.http.readDestination("wc2014", "twitter_connection");  
				var client = new $.net.http.Client();
				var init_url_suffix = "?q=%23" + searchTerm;
				var url_suffix = init_url_suffix;
				var maxId;
				var cur_tweet_id;
				if(sinceId != null && sinceId != '') {
					init_url_suffix = init_url_suffix + "&since_id=" + sinceId;
					url_suffix = init_url_suffix;
				}
				
				while(1){
					if(maxId != null && sinceId != null) {
						if(maxId.toString() <= sinceId.toString())
							return;
						url_suffix = init_url_suffix + "&max_id=" + maxId;
					}
						
					var req = new $.web.WebRequest($.net.http.GET, url_suffix);
					client.request(req, dest);
					var response = client.getResponse();
					var body = response.body.asString();
					var tweets = JSON.parse(body);
					
					if(tweets == null || tweets.statuses == null || tweets.statuses.length == 0)
						return;
					
					var tweet_count = tweets.statuses.length;
					var tweet_index = 0;
					for (tweet_index = 0; tweet_index < tweet_count; tweet_index++){
						var tweetPstmt;
						try {
							cur_tweet_id = tweets.statuses[tweet_index].id_str;
							if(maxId != null && cur_tweet_id.toString() <= maxId.toString())
								return;
							if(sinceId != null && cur_tweet_id.toString() <= sinceId.toString())
								return;
							tweetPstmt = conn.prepareStatement(insert_tweet_sql); 
							tweetPstmt.setString(1, cur_tweet_id);
							tweetPstmt.setNString(2, tweets.statuses[tweet_index].text);
							tweetPstmt.setTimestamp(3, parseTwitterDateTime(tweets.statuses[tweet_index].created_at));
							tweetPstmt.setString(4, tweets.statuses[tweet_index].user.screen_name);
							tweetPstmt.execute(); 
							conn.commit();
						}
						catch(ex){
							//var msg = ex.message;
						}
						finally {
							if(tweetPstmt != null && !tweetPstmt.isClosed()) 
								tweetPstmt.close();
						}
						
						if(tweet_index == tweet_count - 1)
						{
							maxId = tweets.statuses[tweet_index].id_str;
							maxId = decStrNum(maxId);
						}
					}
					
					if(tweet_count > 0 && maxId != null && cur_tweet_id.toString() <= maxId.toString()) 
						return;
					if(tweet_count > 0 && sinceId != null && cur_tweet_id.toString() <= sinceId.toString())
						return;
					
					if(sinceId == null)
						return;
					
					//Sleep for two seconds
					sleep(2);
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

collectTweet();

