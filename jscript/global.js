/**
 * Textarea elements are auto-resizing
 */
function textareaSetup(){
    const txtAreas = document.getElementsByTagName("textarea");
    for (let i = 0; i < txtAreas.length; i++) {
        txtAreas[i].style.height = txtAreas[i].scrollHeight + "px";
        txtAreas[i].style.overflowY = "hidden";
        txtAreas[i].addEventListener("input", resizeTextarea, false);
        txtAreas[i].addEventListener("input", resizeTextarea, false);
        // Remove spellcheck because red on gray is ugly and can't be seen correctly.
        // Unless I am slighlty colorblind, I still don't know after 21 years. 
        txtAreas[i].setAttribute("spellcheck", "false");
        txtAreas[i].setAttribute("autocomplete", "off");
    }

    function resizeTextarea(){
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    }
}

// Running functions
textareaSetup();