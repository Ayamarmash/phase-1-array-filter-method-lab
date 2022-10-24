function findMatching(driversArray , string){
    return driversArray.filter((driver)=> {
        return string.toLowerCase() === driver.toLowerCase()
    })
}
function fuzzyMatch(driversArray , driversFirstInitial){
    return driversArray.filter((driver)=>{
        return driver.slice(0,2) === driversFirstInitial
    })
}
function matchName(drivers , string){
    return drivers.filter((driver)=>{
        return driver.name.toLowerCase() === string.toLowerCase()
    })
}