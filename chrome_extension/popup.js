/**
 *
 */
document.addEventListener(
    "DOMContentLoaded",
    function () {
        const checkbox = document.getElementById("skip");

        chrome.storage.sync.get(["skipToRecipeOption"], function (result) {
            checkbox.checked = result.skipToRecipeOption;
        });

        checkbox.addEventListener(
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
