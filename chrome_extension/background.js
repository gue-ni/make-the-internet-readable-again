/**
 * 
 */
chrome.runtime.onInstalled.addListener(function() {
    let val = true
    chrome.storage.sync.set({skipToRecipeOption: val}, function() {
        console.log(`skipToRecipe is set to ${val}`)
    });
});
