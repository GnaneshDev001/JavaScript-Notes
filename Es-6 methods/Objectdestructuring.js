let emp={
    eid:101,
    ename:"gnanesh",
    details:{ emial:"gannaesh@gamil.com",
        loc:"wayanad"
    }
}
//console.log(ename);//reference error
console.log(emp.ename);
console.log(emp.details.loc);
///object Destructring:

let {details}=emp;
let {loc}=details;
console.log(loc);
console.log(details);
console.log(ename);



