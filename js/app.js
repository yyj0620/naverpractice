function tabList(e){
    let tabLink = e.getAttribute("data-tab");
    let tabContent = document.getElementById(tabLink);
    
    let currents = e.closest(".Layout-module__content_area___b_3TU").querySelectorAll(".current");
    for(var c = 0; c < currents.length; c++){
        currents[c].classList.remove("current")
    }
    
    e.classList.add("current");
    tabContent.classList.add("current");
}