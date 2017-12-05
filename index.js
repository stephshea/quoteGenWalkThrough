/*global $ */

// https://talaikis.com/random_quotes_api/
// https://dev.twitter.com/web/tweet-button/web-intent
// https://fonts.google.com/
// http://fontawesome.io/icons/

var qGen = {
    quote: "",
    author: "",
    getQuote: function() {
        var that = this;
        $.ajax({
            method: "GET",
            url: "https://talaikis.com/api/quotes/random/",
            dataType: "json",
            success: function(data){
                console.log(data);
                //this and that now refers to ajax not the quotes object
                //bad practice to self reference in an object
            that.quote = data.quote;
            that.author = data.author;
            that.displayQuote();
                } 
            
        })    
            
    },
    
    displayQuote: function() {
        console.log("display");
        document.getElementById("insertQuote").innerHTML = qGen.quote;
        document.getElementById("insertAuthor").innerHTML = qGen.author;
    }
}
    
    document.getElementById("newQuote").onclick = function() {
                qGen.getQuote();


}

document.getElementById("postTwitter").onclick = function() {
    window.open('https://twitter.com/intent/tweet?text=' + '"' + qGen.quote + '"' + '-' + qGen.author);
}

qGen.getQuote();