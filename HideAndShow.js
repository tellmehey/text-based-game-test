let Id =  0
let Text = 0
function DisableButtonId(Id) {
    getElementById("${Id}").innerHTML=("-")
}
function EnableButtonId(Id,Text) {
    getElementById("${Id}").innerHTML=("${Text}")
}
