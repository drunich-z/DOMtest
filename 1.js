
// alert ('Hello');

//result = prompt('Whats up dude?', "");
//console.log(result);
//alert (confirm("ГЕй?"));
//alert (`Hello, ${prompt("whats your name?", "")}! How are you?`);
//alert(Number("15"));

/*(prompt ('Какое официальное название JavaScript?', '') == 'ECMAScript') ? alert('Правильно!'): alert('Не знаете? “ECMAScript”!');*/
login = prompt ('Ваш логин?', 'Директор');
let message = (login == 'Сотрудник') ? 
    'Привет': (login == 'Директор') ? 
    'Здравствуйте' : (login == '')  ? 
    'Нет логина' : '';
alert (message);



let count = 0;

console.log('log');
console.info('info');
console.warn('warn');
console.error('error alarm!!!!', count);

const handlerClick = () => {
    count++;
    console.log(`you clicked ${count} times`);
    const li = document.createElement('li');
    li.innerText = `you clicked ${count} times`;
    document.body.append(li);
};