

function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        if (driver.toLowerCase() == name.toLowerCase()) {
        return driver
    }
    })
}

function fuzzyMatch(drivers) {
    return drivers.filter(function(driver, par) {
        if (driver == par) {
            return driver
        }
    })
}