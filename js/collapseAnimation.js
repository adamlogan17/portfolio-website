let coll = document.getElementsByClassName("collapsible-header");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapsed");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    
    if(document.getElementsByClassName("collapse-icon")[i].innerText === "+") {
        document.getElementsByClassName("collapse-icon")[i].innerText = '-';
    } else {
        document.getElementsByClassName("collapse-icon")[i].innerText = '+';
    }
    
  });
}