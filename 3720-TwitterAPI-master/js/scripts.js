window.onload = init;

likes = [];

function init() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_tweets.php', true); //this changes the state of xmlhttp
    xhr.send(null);
    xhr.onload = function () {
        document.getElementById("results").innerHTML = xhr.responseText;
        if (xhr.status == 200) {

            var tweets = JSON.parse(xhr.responseText);

            tweets = tweets.statuses;
            console.log("2");

            //            tweets.forEach(function (index) {
            //                console.log(index.favorite_count);
            //
            //                likes.push(index.favorite_count);
            //
            //
            //            })



            //  EXAMPLE OUTPUT TO A LIST
            var tweetList = "";

            // For-loop through all likes
            // Decide which style to use based on # of likes
            // tweetlist += tweet with its given size



            tweets.forEach(function (tweet) {
                console.log("1");

                if (tweet.favorite_count >= 1500) {
                    tweetList += "<div class='like orange'>" + tweet.full_text + "</div>";

                } else if (tweet.favorite_count >= 700) {
                    tweetList += "<div class='like purple'>" + tweet.full_text + "</div>";

                } else if (tweet.favorite_count >= 500) {
                    tweetList += "<div class='like blue'>" + tweet.full_text + "</div>";

                } else if (tweet.favorite_count >= 300) {
                    tweetList += "<div class='like green'>" + tweet.full_text + "</div>";

                } else {
                    tweetList += "<div class='like white'>" + tweet.full_text + "</div>";
                }
                console.log("3");


            });

            document.getElementById("results").innerHTML = tweetList;

        } else {
            console.log(xhr);
            document.getElementById("results").innerHTML = xhr.responseText;
        }
    }

}
