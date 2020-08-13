const c = 1 
{
    const c = 2
}

console.log(c)

let grade = 87;

if ( grade >= 90) {
    console.log('A')
}else if ( grade >= 88) {
    console.log('B')
}else if ( grade >= 70) {
    console.log('C')
}else if ( grade >= 60) {
    console.log('D')
}else {
    console.log('E')
}

var animal = 'giraffe'

switch ( animal ) {
    case 'cow':
    case 'giraffe':
    case 'dog':
    case 'pig':
        console.log("This animal will go on Noah's Ark")
        break;
    
    case 'dinosaur':
    default:
        console.log('this animal will not')
}

var text = "";

for (let i = 0; i < 5; i++ ) {
    text += i + ','
    console.log(text)
}

let person = {first_name: 'Jhon', las_name: 'Doe' ,age: 25}
let text1 = ""
for (let x in person) {
    text1 += person[x] + " "
    console.log(text1)
}


let i = 0
let text2 = ""
while ( i < 5 ) {
    text2 += i + ",";
    i++
    console.log(text2)
}

let text3 = ""
let a = 0
do {
    text3 += a + ",";
    a++
    console.log(text3)
}while (i < 5)
