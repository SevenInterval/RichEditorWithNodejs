$(document).ready(function(){

        //var content =  localStorage.getItem(key);

       // $("#data-container").html(content);

        //return false;
        
        console.log(localStorage.getItem("key"));
        document.getElementById("data-container").innerHTML = localStorage.getItem("key");
        document.getElementById("texteditor").innerHTML = localStorage.getItem("key");

});




