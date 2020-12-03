document.addEventListener('DOMContentLoaded', function() {
  var skipCheckbox = document.getElementById("skip")
  var notificationCheckbox = document.getElementById("notification")


  chrome.storage.sync.get(["skipToRecipeOption"], function (result) {
        skipCheckbox.checked = result.skipToRecipeOption;
        notificationCheckbox.checked = result.skipToRecipeOption;
  });

  skipCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({skipToRecipeOption: this.checked}, function() {
      console.log('Value is set to ' + this.checked);
    });
  }, false)
}, false)
