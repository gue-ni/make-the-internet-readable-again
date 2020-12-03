console.log("content.js is running...");

var recipe_identifier = {
    "tag_names": ["ul"],
    "class_names": [
        "wprm-recipe-template-custom",
        "wprm-recipe-template-mb-custom",
        "wprm-recipe-template-mb-food"
    ],
    "wild_card": [
        "wprm-recipe-template"
    ]
}

function scroll(e){
    e.style.border = "4px solid red"
    e.scrollIntoView()
}

var elem = null

for (var id of recipe_identifier.tag_names){
    elem = document.getElementsByTagName(id)
    if (elem.length > 0) break;
    elem = null
}

for (var id of recipe_identifier.class_names){
    elem = document.getElementsByClassName(id)
    if (elem.length > 0) break;
    elem = null
}

for (var id of recipe_identifier.wild_card){
    elem = document.querySelectorAll(`[class^='${id}']`)
    if (elem.length > 0) break;
    elem = null
}



if(elem) scroll(elem[0]) 

/*
TODO:
    * click on jump to recipe
    * close newsletter
    * find more elements
*/

