//1
let a = 10;
alert(a);
//
alert(a = 20);
//2
let year = 2007;
alert(year);
//3
const createName = 'Брендан Эйх';
prompt(createName);
//4
let b = 10;
let c = 2;
let d = b + c;
alert(d);
let e = b - c;
alert(e);
let f = b * c;
alert(f);
let g = b / c;
alert(g);

//5
let result = 2 ** 5;
alert(result);

//6
let x = 9;
let y = 2;
alert(x % y);

//7
let num = 1;
num += 5
num -= 3
alert(num);

//8
let age = prompt('Сколько вам лет?');
alert(age);

//9
const user = {
    name: 'Елизавета',
    age: 19,
    isAdmin: true,
    "city of residence": Rostov
}
console.log(user['age']); //20
delete user['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?');
console.log(user[info]); //если пользователь введет name, то получим 'Elizaveta', если age, то 20, во всех остальных случаях undefined
alert(info);

//10
let name = prompt('Ваше имя');
alert(Привет, Елизавета);




