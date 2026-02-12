function NewBeginings() {
        let inventory = []
        let GameDay = 0
        let EnemyHealth = 50
        let TamedHealth = 0
        let DayGen = 0
        let DayEvents = []
        let EventCalc = 0
}
function YearEventGen() {
    DayGen = 0
    DayEvents = []
    EventCalc = 0
    for (let i = 0; i < 100; i++) {
    EventDayGen();
    DayGen = DayGen + 1
  }
  document.getElementById("DebugArray").innerHTML = DayEvents;
}
function EventDayGen() {
    EventCalc = Math.floor(math.random*101);
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
            console.log("Found material.")
        }
        else {
            if (itemLoot = 2) {
                inventory.push("2") // Small Health Potion
                console.log("Found a small health potion.")
            }
            else {
                if (itemLoot = 3) {
                    inventory.push("3") // Armor Scraps (for repairing)
                    console.log("Found a couple of armor scraps.")
                }
                else {
                    inventory.push("4") // Metal Ingot
                    console.log("Found a Metal Ingot.")
                }
            }
        }
        NextDay()
    }
    else {
        if (n = 2) {
            ChallengeSpawn(Math.floor(Math.random * 26) + 50) 
            // Base health: 50, Additional health: 0 - 25
            console.log("Enemy has spawned.")
        }
        else {
            NextDay()
        }
    }
}
function NextDay() {
    GameDay = GameDay + 1
    console.log ("A new day begins.")
}
function ChallengeSpawn(EnemyHealth) {
    EnemyHealth =  EnemyHealth // I don't even know...
}
function ChallengeDamage(Damage) {
    EnemyHealth = EnemyHealth - Damage
    if (EnemyHealth <= 0) {
        console.log("Enemy has been slained.")
    }
}
function ChallengeTame() {
    coo
}