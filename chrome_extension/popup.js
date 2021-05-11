/**
 *
 */
document.addEventListener(
    "DOMContentLoaded",
    function () {
        const skipCheckbox = document.getElementById("skip");

        chrome.storage.sync.get(["skipToRecipeOption"], function (result) {
            skipCheckbox.checked = result.skipToRecipeOption;
        });

        skipCheckbox.addEventListener(
            "change",
            function () {
                chrome.storage.sync.set(
                    { skipToRecipeOption: this.checked },
                    function () {
                        console.log("Value is set to " + this.checked);
                    }
                );
            },
            false
        );
    },
    false
);
