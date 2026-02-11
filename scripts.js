function setnum1(num) {
let num1= (num)
document.getElementById("DisNum1").innerHTML = (num1);
    }
function calc() {
    sum = num1 + num2
    console.log(sum)
    document.getElementById("report").innerHTML = (sum);
    }
function customset1() {
    let num1 = prompt("Number for 1?","1")
    document.getElementById("num1").innerHTML = (num1);
}
function repeatEventGen() {
    let DayGen = 0
    let DayEvents = []
    let EventCalc = 0
    for (let i = 0; i < 100; i++) {
    EventDayGen();
    DayGen = DayGen + 1
  }
  document.getElementById("DebugArray").innerHTML = DayEvents;
}
function EventDayGen() {
    EventCalc = Math.floor(math.random()*101);
    if (EventCalc <= 25) {
        DayEvents.push("Loot")
    }
    else {
        if (EventCalc >= 75) {
            DayEvents.push("Challenged")
        }
        else {
            DayEvents.push("Passive")
        }
    }
}