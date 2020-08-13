console.log('loading')
const h1 = document.querySelector('h1')
console.log(h1.text)
console.assert(document.querySelector('h2'), 'h2 not found!')

const member = [
    {first: 'neil', last: 'Amstrong'},
    {first: 'adam', last: 'khan'},
    {first: 'budi', last: 'Mandara'},
]

console.table(member)

let number = 1
let string = `pesantren coding ${number}`
console.log(string)

let string1 = "pesantren koding ${number}"
console.log(string1)

let info = ['first', 'secound', 'third']
console.log(info[0])
console.log(info.length)

let plus = 2 + 2;
let minus = 3 - 2;
let modulus = 7 % 2;
let multiple = 4 * 5;
console.log(plus)
console.log(minus)
console.log(modulus)
console.log(multiple)

let interger = 7
let result = interger == '7'
let result1 = interger !== 7
console.log(result)
console.log(result1)

let result2 = interger !== 7 && interger === 12
console.log(result2)
let result3 = interger === 7 || interger === 12
console.log(result3)

if(interger === 12 && interger === 7) {
    console.log('ini benar')
}else {
    console.log('ini tidak benar')
}

let result4 = Math.random(4.7)
console.log(result4)

for (let i = 1; i <= 9; i++) {
    console.log(i)
    document.getElementById('id').innerHTML +=`<ul>
        <li>${i}</li>
     </ul>`
}

let currentdate = new Date();
console.log(currentdate);

let year = currentdate.getFullYear()
console.log(`this year is ${year}`)

let month = currentdate.getMonth()
console.log(`this year is ${month}`)

let vehicles = ['motorcycle' , 'rocket' , 'plane' , 'ship']

result5 = vehicles.join('_');
result6 = vehicles.length;
result7 = vehicles.includes('plane');
result8 = vehicles.push('tank');
result9 = vehicles.pop();
console.log(result5)
console.log(result6)
console.log(result7)
console.log(result8)
console.log(result9)

alert(result6);