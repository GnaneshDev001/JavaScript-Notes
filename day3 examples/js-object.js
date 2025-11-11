let gnana={
    "id":101,
    "name":"Gnana",
    "sal":42000,
    "loc":"Banglore",
}
console.log(gnana);
console.log(typeof gnana);
// to read js -object//
console.log(gnana.id);
console.log(gnana.sal);
console.log(gnana.loc);
//to update js-object//
gnana.id=102;
gnana.name="mahi";
console.log(gnana);
//to delete js-object//
delete gnana.loc
console.log(gnana);