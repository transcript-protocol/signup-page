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

class Counsellor {
    constructor(username, firstName, middleName, lastName, userDOB, userSchool) {
        this.username = username;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.userDOB = userDOB;
        this.userSchool = userSchool;
    }
}

class Student {
    constructor(username, firstName, middleName, lastName, userDOB, userSchool) {
        this.username = username;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.userDOB = userDOB;
        this.userSchool = userSchool;
    }
}

function getRadioValue() {

    if(document.getElementById('typeStudent').checked){
        return 'student';
    }
    else if (document.getElementById('typeCounsellor').checked){
        return 'guidance';
    }

}

function createUser(username, password, accountType) {
    return new User(username, password, accountType)
}

function createCounsellor(username, firstName, middleName, lastName, userDOB, userSchool) {
    return new Counsellor(username, firstName, middleName, lastName, userDOB, userSchool)
}
function createStudent(username, firstName, middleName, lastName, userDOB, userSchool) {
    return new Student(username, firstName, middleName, lastName, userDOB, userSchool)
}

// Scrapes data from form and makes a user
function scrapeUser() {
    var username = document.getElementById("email").value
    var password = document.getElementById("password").value
    var accountType = getRadioValue()

    var user = createUser(username, password, accountType)
    console.log(user)
    return user

}

// Scrapes data from form and makes a guidance counsellor
function scrapeCounsellor() {
    var username = document.getElementById("email").value
    var firstName = document.getElementById("firstName").value
    var middleName = document.getElementById("middleName").value
    var lastName = document.getElementById("lastName").value
    var userDOB = document.getElementById("DOB").value
    var userSchool = document.getElementById("School").value

    var counsellor = createCounsellor(username, firstName, middleName, lastName, userDOB, userSchool)
    console.log(counsellor)
    return counsellor
}

function scrapeStudent() {
    var username = document.getElementById("email").value
    var firstName = document.getElementById("firstName").value
    var middleName = document.getElementById("middleName").value
    var lastName = document.getElementById("lastName").value
    var userDOB = document.getElementById("DOB").value
    var userSchool = document.getElementById("School").value

    var student = createStudent(username, firstName, middleName, lastName, userDOB, userSchool)
    console.log(student)
    return student
}


function scrapeAll() {
    var accountType = getRadioValue()
    scrapeUser()
    if (accountType == 'guidance'){
        scrapeCounsellor()
    } else if (accountType == 'student'){
        scrapeStudent()
    }
       
}