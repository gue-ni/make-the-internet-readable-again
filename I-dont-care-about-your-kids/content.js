/*
TODO:
    * close newsletter
    * find more elements
*/

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

function skipToRecipe(){
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes("Jump to Recipe")) {
            a.click()
            return
        }
    }

    var elem = null

    for (var id of recipe_identifier.tag_names){
        elem = document.getElementsByTagName(id)
        if (elem.length > 0) break;
        elem = null
    }

    for (var id of recipe_identifier.wild_card){
        elem = document.querySelectorAll(`[class^='${id}']`)
        if (elem.length > 0) break;
        elem = null
    }

    for (var id of recipe_identifier.class_names){
        elem = document.getElementsByClassName(id)
        if (elem.length > 0) break;
        elem = null
    }

    if(elem){
        elem[0].style.border = "4px solid red"
        elem[0].scrollIntoView()
    }  
}

chrome.storage.sync.get(['skipToRecipeOption'], function(result) {
    console.log('skipToRecipe currently is ' + result.skipToRecipeOption);
    if (result.skipToRecipeOption == true){
        skipToRecipe()
    }
});

