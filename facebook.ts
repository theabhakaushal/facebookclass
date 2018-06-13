class about{



    constructor(public firstName:string,public lastName:string,public phone:number,public dob:string,public education:string[],public work:string,public friends:string[]){
    
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.dob=dob;
        this.education=education;
        this.work=work;
        this.friends=friends;

    }

getName=()=>{
    return this.firstName+this.lastName;
}

getPhone=()=>{
    return this.phone;
}

getDOB=()=>{
     return this.dob;

}

getEducation1=()=>{
    return this.education[0]
}

getEducation2=()=>{
    return this.education[1]
}

getWorkDesc=()=>{

    return this.work
}
getFriends=()=>{

    return this.friends[i]
}

getNoOfFriends=()=>{
    return this.friends.length
}


}

let profile= new about("Amir","khan",9988776655,"29th aug 1990",["DPS Gurgaon","Military Public School Himachal"],"Professional actor",["Kiran khan","Salman Khan","Rajkumar Hirani","Asha Bhosle"])

let a=profile.getNoOfFriends()
console.log("Name:"+profile.getName())
console.log("Date Of Birth:"+profile.getDOB())
console.log("Phone No:"+profile.getPhone())
console.log("Secondary education:"+profile.getEducation1())
console.log("Higher education:"+profile.getEducation2())
console.log("Work:"+profile.getWorkDesc())
console.log("Total NO Of friends:"+profile.getNoOfFriends())
console.log("Friends:")
for(var i=0;i<a;i++)
console.log(profile.getFriends())