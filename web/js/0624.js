var imgLinks = document.querySelectorAll("a[id$='link']");
imgLinks.forEach(element => {
    element.addEventListener("click", imgLinkClickedHandler);
});
var checklist = document.getElementById("checklist");
var lis = checklist.querySelectorAll("li");
lis.forEach(li => {
    var inputInLi = li.querySelector("input");
    li.addEventListener("click", editItemHandler)
    inputInLi.addEventListener("blur", inputBlurHandler)
    inputInLi.addEventListener("keypress", inputConfirmHandler)
});


function editItemHandler(){
    // this is li
    this.classList.add("edit");
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length)
}

function inputBlurHandler(){
    // this is input
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.classList.remove("edit") 
}

function inputConfirmHandler(event){
    // this is input
    if (event.which == 13){
        inputBlurHandler.call(this);
    }//enter

}

function imgLinkClickedHandler() {
    imgLinks.forEach(element => {
        var imgId = element.dataset.img;
        if (imgId) {
            img = document.getElementById(imgId);
            if (element !== this) {
                img.classList.add("d-none");
            }
            else {
                img.classList.toggle("d-none")
            }

        }
    });
}

