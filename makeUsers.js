/*
Written by Maria Galebach
7/17/18
Property of EmblemEDU
Takes elements from form and creates a user object to be passed to the back end
*/



class User {
    constructor(username, password, accountType) {
        this.username = username
        this.password = password
        this.accountType = accountType
    }
}

class Counselor {
    constructor(username, firstName, middleName, lastName, userDOB, userSchool) {
        this.username = username;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.userDOB = userDOB;
        this.userSchool = userSchool;
    }
}

function createUser(username, password, accountType) {
    return new User(username, password, accountType)
}

function createCounselor(username, firstName, middleName, lastName, userDOB, userSchool) {
    return new Counselor(username, firstName, middleName, lastName, userDOB, userSchool)
}

// Scrapes data from form and makes a user
function scrapeUser() {
    var username = document.getElementById("email").value
    var password = document.getElementById("password").value
    var accountType = document.getElementById("accountType").value

    var user = createUser(username, password, accountType)
    console.log(user)
    return user

}

// Scrapes data from form and makes a guidance counselor
function scrapeCounselor() {
    var username = document.getElementById("email").value
    var firstName = document.getElementById("firstName").value
    var middleName = document.getElementById("middleName").value
    var lastName = document.getElementById("lastName").value
    var userDOB = document.getElementById("DOB").value
    var userSchool = document.getElementById("School").value

    var counselor = createCounselor(username, firstName, middleName, lastName, userDOB, userSchool)
    console.log(counselor)
    return counselor
}

function scrapeAll() {
    scrapeUser()
    scrapeCounselor()
}