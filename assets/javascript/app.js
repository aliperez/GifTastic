var topics = ["cat", "dog", "bird", "fish", "hippo"];

var drawButtons = function(){

    for (var j = 0; j < topics.length; j++){

        var newButton = $("<button>");
        newButton.attr("class", "clickMe");
        newButton.val(j);
        newButton.text(topics[j]);
        $("#buttons").append(newButton);

    };

};

drawButtons();

// // Tried to get divs on the page before populating them, but only worked for the last one, come back to this later
// for (var k = 0; k < 10 ; k++){
    
//     var imageDiv = $("<div>");
//     var oneImage = $("<img>");
//     var newCaption = $("<p>");

//     imageDiv.attr("class", "floatMe");

//     imageDiv.append(oneImage);
//     imageDiv.append(newCaption);
    
//     gifs.append(imageDiv);

// };


$(".clickMe").on("click", function(){

    var fillBlank = $(this).text();
    
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=TpMux04V25hSyYBo7yfjMFKaPvTkMnTh&q=" + fillBlank + "&limit=10&offset=0&rating=G&lang=en",
        method: "GET"

    }).then(function (response) {
        // console.log(response);
    
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

// var hello;

$("#submitButton").on("click", function(){

    var hello = $("#newAnimal").val();

    // // Tried another way, but no change
    // hello = $("#inputForm").find('input[name="newAnimal"]').val();

    // When I use the debugger, hello is in the array
    topics.push(hello);

    drawButtons();

    // This pops up in the console for a split second and disappears
    // when I use the debugger, topics includes the user input for hello
    console.log(topics);

});












