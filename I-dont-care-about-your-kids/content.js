console.log("content.js is running...");

function scroll(e){
    e.scrollIntoView()
    e.style.border = "4px solid red"
}

var elem = null
/* simple list elements */
elem = document.getElementsByTagName("ul")
/* wordpress recipe maker */
elem = document.getElementsByClassName("wprm-recipe-template-mb-food")
elem = document.getElementsByClassName("wprm-recipe-template-custom")


if(elem) scroll(elem[0]) 


/*
TODO:
    * click on jump to recipe
    * close newsletter
    * 
*/

