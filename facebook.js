var about = /** @class */ (function () {
    function about(firstName, lastName, phone, dob, education, work, friends) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.dob = dob;
        this.education = education;
        this.work = work;
        this.friends = friends;
        this.getName = function () {
            return _this.firstName + _this.lastName;
        };
        this.getPhone = function () {
            return _this.phone;
        };
        this.getDOB = function () {
            return _this.dob;
        };
        this.getEducation1 = function () {
            return _this.education[0];
        };
        this.getEducation2 = function () {
            return _this.education[1];
        };
        this.getWorkDesc = function () {
            return _this.work;
        };
        this.getFriends = function () {
            return _this.friends[i];
        };
        this.getNoOfFriends = function () {
            return _this.friends.length;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.dob = dob;
        this.education = education;
        this.work = work;
        this.friends = friends;
    }
    return about;
}());
var profile = new about("Amir", "khan", 9988776655, "29th aug 1990", ["DPS Gurgaon", "Military Public School Himachal"], "Professional actor", ["Kiran khan", "Salman Khan", "Rajkumar Hirani", "Asha Bhosle"]);
var a = profile.getNoOfFriends();
console.log("Name:" + profile.getName());
console.log("Date Of Birth:" + profile.getDOB());
console.log("Phone No:" + profile.getPhone());
console.log("Secondary education:" + profile.getEducation1());
console.log("Higher education:" + profile.getEducation2());
console.log("Work:" + profile.getWorkDesc());
console.log("Total NO Of friends:" + profile.getNoOfFriends());
console.log("Friends:");
for (var i = 0; i < a; i++)
    console.log(profile.getFriends());
