let cars=[
 { "brand": "Maruti Suzuki", "model": "Swift", "price": 650000, "color": "Red" },
 { "brand": "Maruti Suzuki", "model": "Baleno", "price": 800000, "color": "Blue" },
 { "brand": "Hyundai", "model": "i20", "price": 900000, "color": "White" },
 { "brand": "Hyundai", "model": "Venue", "price": 1100000, "color": "Black" },
 { "brand": "Tata", "model": "Nexon", "price": 1200000, "color": "Grey" },
 { "brand": "Tata", "model": "Punch", "price": 700000, "color": "Orange" },
 { "brand": "Mahindra", "model": "XUV300", "price": 1300000, "color": "Silver" },
 { "brand": "Mahindra", "model": "Thar", "price": 1600000, "color": "Black" },
 { "brand": "Honda", "model": "Amaze", "price": 850000, "color": "White" },
 { "brand": "Honda", "model": "City", "price": 1400000, "color": "Red" },
 { "brand": "Toyota", "model": "Glanza", "price": 900000, "color": "Blue" },
 { "brand": "Toyota", "model": "Innova Crysta", "price": 2200000, "color": "Silver" },
 { "brand": "Kia", "model": "Seltos", "price": 1500000, "color": "Black" },
 { "brand": "Kia", "model": "Sonet", "price": 1100000, "color": "Grey" },
 { "brand": "Renault", "model": "Kwid", "price": 550000, "color": "Yellow" },
 { "brand": "Renault", "model": "Triber", "price": 800000, "color": "White" },
 { "brand": "Skoda", "model": "Slavia", "price": 1400000, "color": "Blue" },
 { "brand": "Volkswagen", "model": "Virtus", "price": 1500000, "color": "Red" },
 { "brand": "MG", "model": "Hector", "price": 1800000, "color": "White" },
 { "brand": "Nissan", "model": "Magnite", "price": 900000, "color": "Silver" }
]
// 5. Use object destructuring to extract brand and model from the first car.
let {brand,model}=cars[0] //object destructuring to improve code readability.
console.log(brand);
console.log(model);

let numbers=[232,11,1055,7,8,18,31]
let num=numbers.sort((a,b)=>{
    return a-b
})
console.log(num);

// 11. Sort the cars by price using ES6 arrow function.
let car=cars.sort((car,price)=>{0-1})
console.log(car);

//16. Create a new array of cars using map() that adds a new key onRoadPrice = price + 50000.
// let arr=cars.map(car=>cars.onRoadPrice=cars.price+50000) //implicit return
let arr=cars.map((car)=>{
    car.onRoadprice=car.price+50000
    return car
})
console.log(arr);

// 19. Use Set to store unique car colors.

let car_colors=new Set(cars.map(car=>car.color))
console.log(car_colors)

let arra=cars.map(car=>car.color)
console.log(arra);
let ar=new Set(arra)
console.log(ar);
// 6. Use array destructuring to extract the first 3 cars into separate variables.
//using destructuring separate the three indexes.
let [c1,c2,c3]=[cars[0],car[1],car[2]]
console.log(c1,c2,c3);









