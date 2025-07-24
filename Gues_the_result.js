console.log('number' + 3 + 3);
'number' + 3 + 3 // number33 --> If first of the operands is a string, the + operator performs concatenation 

console.log(null + 3);
null + 3 // 3 --> In digital convertion null is 0

 console.log(5 && "qwerty");
5 && "qwerty" // qwerty --> "qwerty" is true, && returns last true

console.log(+'40' + +'2' + "hillel");
+'40' + +'2' + "hillel" // 42 hillel --> Unarnu plus convert srting in digit, then we did adition. One of the operands is a string, the + operator performs concatenation

console.log('10' - 5 === 6);
'10' - 5 === 6; // false --> 10 - 5 = 5, 5 === 6 strict equality, it is different digits

console.log(true + false); 
true + false  // 1 --> Automatic convertation true = 1, false = 0, 1 + 0 = 1

console.log('4px' - 3);
'4px' - 3  // NaN -->  Convertetion '4px' in digit is Nan because of px, NaN - 3 gives NaN

console.log('4' - 3);
'4' - 3 // 1 --> Automatic convertation '4' in 4, 4 - 3 = 1

console.log('6' + 3 ** 0);
'6' + 3 ** 0 // 61 --> Automatic convertation '6' in 6, 3 ** 0 = 1,  the + operator performs concatenation

console.log(12 / '6');
12 / '6' // 2 --> Automatic convertation '6' in 6, 12 / 6 = 2

console.log('10' + (5 === 6)); 
'10' + (5 === 6) //100 --> (5 === 6) is strict equality result false,  sring + false in result is concutination

console.log(null == '');
null == '' // false --> In digital convertion null is 0, '' is false, null == false is false

console.log(3 ** (9 / 3));
3 ** (9 / 3)// 27 --> Symple mathematic operation

console.log(!!'false' == !!'true');
!!'false' == !!'true' // true --> srings is true, !true is false, !'false is true, true = true is true

console.log(0 || '0' && 1);
0 || '0' && 1 // 1 --> string '0' is true 0 || '0' give first true('0');  '0' && 1 give lust true (1)

console.log((+null == false) < 1);
(+null == false) < 1 // false --> Unarnu plus convert +null to 0, false converts to 0, 0 == 0 is true, true converts in 1, 1 < 1 is false

console.log(false && true || true);
false && true || true // true--> false && true result false( first falsy value ),  false || true result is true(first truly value)

console.log(false && (false || true));
false && (false || true)// false --> false || true (first truly value), false && true ( first falsy value )

console.log((+null == false) < 1 ** 5);
(+null == false) < 1 ** 5;  // false --> In digital convertion null is 0, false is 0 too, 0 == 0 is true, true is 1 , 1 ** 5 is 1, 1,1 is false
