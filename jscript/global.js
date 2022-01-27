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

/**
 * Starts slap animation
 */
function slapAnimate(b){
    // Setup slap_fx
    let slapFxElem = document.createElement("img");
    slapFxElem.classList.add("slap_paw");
    slapFxElem.src = "img/site/slap.svg";
    slapFxElem.id = "slap_paw";

    // Add
    b.insertAdjacentHTML('beforeend', slapFxElem.outerHTML);

    // Get element
    let nodes = b.querySelectorAll("#slap_paw");
    let addedEl = nodes[nodes.length-1];
    let pos = ((Math.random() - 0.5) * 100);
    addedEl.style.left = (pos + 20) + "px";

    // Timeout for text spawn
    setTimeout(function(){
        slapAnimateText(b, pos);
    }, 200)

    // Timeout for post block move
    setTimeout(function(){
        let postBox = b.parentElement.parentElement;
        let counter = postBox.querySelector("#slap_count");
        let nb = parseInt(counter.innerHTML) + 1;
        
        postBox.style.animation = "none"; counter.style.animation = "none";
        postBox.offsetHeight; counter.offsetHeight;

        postBox.style.animation = "shake 1s cubic-bezier(0.19, 1, 0.22, 1)";
        counter.style.animation = "count_up 0.5s";
        counter.innerHTML = nb;
    }, 300)

    // Timeout for removal
    setTimeout(function(){
        b.removeChild(addedEl);
    }, 600)
}

/**
 * Create slap text
 */
function slapAnimateText(b, pos){
    // Setup slap_fx
    let slapFxElem = document.createElement("img");
    slapFxElem.classList.add("slap", "slap_anim_"+Math.ceil(Math.random() * 3));
    slapFxElem.src = "img/site/slap_FX" + Math.ceil(Math.random() * 3) + ".svg";
    slapFxElem.id = "slap_fx"

    // Add
    b.insertAdjacentHTML('beforeend', slapFxElem.outerHTML);

    // Get element
    let nodes = b.querySelectorAll("#slap_fx");
    let addedEl = nodes[nodes.length-1];
    addedEl.style.left = pos + "px";

    // Timeout for removal
    setTimeout(function(){
        b.removeChild(addedEl);
    }, 1000)
}

// Running functions
textareaSetup();