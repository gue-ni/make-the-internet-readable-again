/**
 * TODO:
 * close newsletter
 * find more elements
 */

const recipe_identifier = {
    tag_names: ["ul"],
    class_names: [
        "wprm-recipe-template-custom",
        "wprm-recipe-template-mb-custom",
        "wprm-recipe-template-mb-food",
    ],
    wild_card: ["wprm-recipe-template"],
};

function skipToRecipe() {
    for (const a of document.querySelectorAll("a")) {
        if (
            a.textContent.includes("Jump to Recipe") ||
            a.textContent.includes("Jump to Recipe")
        ) {
            a.click();
            return;
        }
    }

    function scroll(e) {
        if (e) {
            e[0].style.border = "4px solid red";
            e[0].scrollIntoView();
        }
    }

    var elem = null;

    for (var id of recipe_identifier.wild_card) {
        elem = document.querySelectorAll(`[class^='${id}']`);
        if (elem.length > 0) {
            scroll(elem);
            return;
        }
    }

    for (var id of recipe_identifier.class_names) {
        elem = document.getElementsByClassName(id);
        if (elem.length > 0) {
            scroll(elem);
            return;
        }
    }

    for (var id of recipe_identifier.tag_names) {
        elem = document.getElementsByTagName(id);
        if (elem.length > 0) {
            scroll(elem);
            return;
        }
    }
}

chrome.storage.sync.get(["skipToRecipeOption"], function (result) {
    //console.log('skipToRecipe currently is ' + result.skipToRecipeOption);
    if (result.skipToRecipeOption) {
        skipToRecipe();
    }
});
