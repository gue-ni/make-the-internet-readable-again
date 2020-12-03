chrome.runtime.onInstalled.addListener(function() {
    let val = false
    chrome.storage.sync.set({skipToRecipeOption: val}, function() {
        console.log(`skipToRecipe is set to ${val}`)
    });
});
