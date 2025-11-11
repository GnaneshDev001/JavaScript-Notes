let fullname=(fname,lname)=>{
    return fname+lname;
}
let  mode=fullname("gnan","esh")
console.log(mode);
let name1=fullname("gna","nesh")
console.log(name1);

//fatarrow with implict return
let adde=(a,b)=>a+b+1
let n=adde(2,3)
console.log(n);

//implicit return with single parameter
let wish=(name)=>"hello "+name+" GM"
let msg=wish("Gnanesh")
console.log(msg);
