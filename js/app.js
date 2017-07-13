function toggleDisplay(d) {
    var elm = document.getElementById(d);
    var elmhr = document.getElementById(d+'-hr');
    var icon = document.getElementById(d+'-icon');

    console.log(elm);
    if (elm.style.display == "none") {
        icon.classList.remove("button");
        icon.classList.remove("button-transparent");

        icon.innerHTML="<i class='material-icons'>arrow_drop_up</i>";
        elm.style.display = "block";
        elmhr.style.display = "block";
        elm.classList.add('dropdown');
    } else {
        icon.classList.add("button");
        icon.classList.add("button-transparent");
        icon.innerHTML="繼續閱讀";
        elm.style.display = "none";
        elmhr.style.display = "none";
        elm.classList.remove('dropdown');
    }
}


function toggleTechDisplay(d) {
    var elm = document.getElementById(d);
    var icon = document.getElementById(d+'-icon');

    if (elm.style.display == "none") {
        icon.innerHTML="<i class='material-icons'>arrow_drop_up</i>";
        elm.style.display = "block";
        elm.classList.add('dropdown');
    } else {
        icon.innerHTML="<i class='material-icons'>arrow_drop_down</i>";
        elm.style.display = "none";
        elm.classList.remove('dropdown');
    }
}