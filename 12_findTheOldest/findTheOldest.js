const findTheOldest = function(peopleArr) {

    // return peopleArr.sort((a, b) => {
    //     let aAge = (a.yearOfDeath ? a.yearOfDeath : (new Date()).getFullYear()) - a.yearOfBirth
    //     let bAge = (b.yearOfDeath ? b.yearOfDeath : (new Date()).getFullYear()) - b.yearOfBirth
    //     return bAge - aAge
    // })[0]

    return peopleArr.reduce((oldest, person) => {
        let personAge = (person.yearOfDeath ? person.yearOfDeath : (new Date()).getFullYear()) - person.yearOfBirth
        let oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath : (new Date()).getFullYear()) - oldest.yearOfBirth
        return personAge > oldestAge ? person : oldest
    }, peopleArr[0])  

};

// Do not edit below this line
module.exports = findTheOldest;
