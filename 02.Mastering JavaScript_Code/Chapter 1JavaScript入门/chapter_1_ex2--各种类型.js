// 1.注释
// 
/**/
// 2.变量
// a-z, A-Z, _, $
var a;      //declares a variable but its undefined
var b = 0;
console.log(b);    //0
console.log(a);    //undefined
console.log(a+b); //NaN

// 3.常量
const area_code = '515'; //常量只能定义一次

// 4.Number
var aNumber = 555;
var aFloat = 555.0;

wu_being@UbuntuKylin1704:~/Github/web-js-learning$ node
> 0.1 + 0.2
0.30000000000000004
> (0.1 + 0.2) == 0.3
false
> (0.1 + 0.2) === 0.3
false
> 

// NaN
wu_being@UbuntuKylin1704:~/Github/web-js-learning$ nodejs
> isNaN(NaN)
true
> NaN == NaN
false
> NaN + 5
NaN
> .exit
wu_being@UbuntuKylin1704:~/Github/web-js-learning$ 

> Math.E
2.718281828459045
> Math.SQRT2
1.4142135623730951
> Math.SQRT3
undefined
> Math.SQRT1
undefined
> Math.SQRT(2)
TypeError: Math.SQRT is not a function
    at repl:1:6
    at REPLServer.defaultEval (repl.js:272:27)
    at bound (domain.js:287:14)
    at REPLServer.runBound [as eval] (domain.js:300:12)
    at REPLServer.<anonymous> (repl.js:441:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:212:10)
    at REPLServer.Interface._line (readline.js:551:8)
    at REPLServer.Interface._ttyWrite (readline.js:828:14)
> Math.sqrt(2)
1.4142135623730951
> 
> Math.abs(-900)
900
> Math.pow(2,3)
8
> 
> 
> parseInt("230", 10);
230
> parseInt("010", 10)
10
> parseInt("010", 8)
8
> parseInt("010", 2)

> isNaN("hello")
true
> isNaN("42")
false
> isNaN(42)
false
> parseInt("hello", 2)
NaN

//为了防止异常而导致程序崩溃
var underterminedValue = "elephant";
if (isNaN(parseInt(underterminedValue,2)))
{
  console.log("handle not a number case");
}
else {
  console.log("handle number case");
}
