function findMatching (driverArray,driverName) {
return driverArray.filter(element => 
element.toUpperCase() === driverName.toUpperCase())
}

function fuzzyMatch (driverArray,driverName) {
return driverArray.filter(element =>
element.slice(0,1) === driverName.slice(0,1))
}

function matchName (driverObj,driverName) {
return driverObj.filter(element =>
    element.name === driverName)
}

