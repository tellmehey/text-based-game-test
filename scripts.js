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
        DayEvents.push("1") // Gain Loot
    }
    else {
        if (EventCalc >= 75) {
            DayEvents.push("2") // Be challenged on this day
        }
        else {
            DayEvents.push("0") // Nothing happends
        }
    }
}
function ReadDay(n) {
    if (n = 1) {
        itemLoot = Math.floor(Math.random * 5)
        if (itemLoot = 1) {
            inventory.push("1") // Material (for buying items)
        }
        else {
            if (itemLoot = 2) {
                inventory.push("2") // Small Health Potion
            }
            else {
                if (itemLoot = 3) {
                    inventory.push("3") // Armor Scraps (for repairing)
                }
                else {
                    inventory.push("4") // Material (for now)
                }
            }
        }
        NextDay()
    }
    else {
        if (n = 2) {
            ChallengeSpawn(Math.floor(Math.random * 26) + 50)
        }
        else {
            NextDay()
        }
    }
}