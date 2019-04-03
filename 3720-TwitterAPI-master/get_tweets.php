<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "402896071-gE1kJ0PJ7KbJomtkVQ1AtWI6Zr1KMzwwgx2S3rhH",
	    'oauth_access_token_secret' => "5aUS4kttYCspv6ek9sOAlrrOejMueAQ8iGMog2lSD0hJf",
	    'consumer_key' => "787kF7o2Rb3QtXwpQ0hfoM9k7",
	    'consumer_secret' => "2CHYFSR0wgU46WXaRWqTM3DNsO7hajQyxmy9cRAhjQgBgzLCe7"
	);

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=#borderlands3&lang=en&count=50&result_type=popular&tweet_mode=extended'; // queries start with ? and are strung together with &
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>
