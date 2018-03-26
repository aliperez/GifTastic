var topics = ["happy", "sad", "mad", "afraid", "excited", "bored", "anxious", "nervous", "impatient", "hungry", "tired"];

var drawButtons = function(){

    $("#buttons").empty();
    
    for (var j = 0; j < topics.length; j++){

        var newButton = $("<button>");
        newButton.attr("class", "clickMe");
        newButton.val(j);
        newButton.text(topics[j]);
        $("#buttons").append(newButton);

    };

};

drawButtons();


$("#buttons").on("click", ".clickMe", function(){

    $("#gifs").empty();

    var fillBlank = $(this).text();
    
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=TpMux04V25hSyYBo7yfjMFKaPvTkMnTh&q=" + fillBlank + "&limit=10&offset=0&rating=G&lang=en",
        method: "GET"

    }).then(function (response) {
        console.log(response);
    
        var gifs = $("#gifs");
        
        for (var i = 0; i < response.data.length; i++){
    
            var imageDiv = $("<div>");
            var oneImage = $("<img>");
            var newCaption = $("<p>");

            var gifImage = response.data[i].images.preview_gif.url;
            oneImage.attr("src", gifImage);

            newCaption.text("Rating: " + response.data[i].rating);

            imageDiv.attr("class", "floatMe");
        
            imageDiv.append(oneImage);
            imageDiv.append(newCaption);
            
            gifs.append(imageDiv);

        };
    
    });

});

$("#submitButton").on("click", function(){

    event.preventDefault();

    var newFeel = $("#newFeeling").val();

    topics.push(newFeel);

    drawButtons();

    // console.log(topics);

});












