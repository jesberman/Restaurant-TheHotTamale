var reservedTables = [];

var waitList = [];

//event listener that activates when the user clicks on the "Add an animal" button
$("#register-page-submit").on("click", function(event) {




    event.preventDefault();


    //creates the variable "animalInput", and sets it to equal the trimmed value of what the user enters into 
    //the animal input field
    var name = $("#form-name").val().trim();
    var phone = $("#form-phone").val().trim();
    var email = $("#form-email").val().trim();
    var uniqueID = $("#form-uniqueID").val().trim();

    var party = {partyName:name, partyPhone:phone, partyEmail: email, partyID: uniqueID};


    //pushes the "animalInput" variable into the "topics" array
    reservedTables.push(party);


    //creates the "newAnimalButton" variable, and sets it to equal "animalInput" wrapped between button tags
    var newParty = $('<div>'+ party + '</div>') 

    //adds to the "newAnimalButton" variable the class of "main-buttons", which are already shared by the buttons that
    //are already created automatically
    $(newParty).addClass("bootswatch-class");

    //Appends to the "topics" div the newParty variable
    $("#reserved-tables").append(newParty);




    console.log(reservedTables);
    console.log(reservedTables[1]);

});







