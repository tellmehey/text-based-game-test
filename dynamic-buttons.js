function DisableButtonId(Id) {
    button = document.getElementById(Id).innerHTML;
    button .innerHTML = "-"
}
function EnableButtonId(Id,Text) {
    button = document.getElementById(Id).innerHTML;
    button.innerHTML = Text;
}