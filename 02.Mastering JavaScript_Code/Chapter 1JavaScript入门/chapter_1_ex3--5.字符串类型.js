// 5.字符串
> console.log("hello world")
hello world
undefined
> console.log('hello world')
hello world
undefined
> console.log('hello "," world')
hello "," world
undefined
> console.log("hello',' world")
hello',' world
undefined
> console.log("hello" " world")
SyntaxError: missing ) after argument list
    at Object.exports.createScript (vm.js:24:10)
    at REPLServer.defaultEval (repl.js:245:25)
    at bound (domain.js:287:14)
    at REPLServer.runBound [as eval] (domain.js:300:12)
    at REPLServer.<anonymous> (repl.js:441:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:212:10)
    at REPLServer.Interface._line (readline.js:551:8)
    at REPLServer.Interface._ttyWrite (readline.js:828:14)
> console.log("hello", " world")
hello  world
undefined
> console.log("hello\n", " world")
hello
  world
undefined
> 


// String, Number, Boolean类型可以把自己的初始值（primitive equivalent）包装成对象（wrapper object）

var s = new String("dummy"); //Creates a String object
console.log(s); //"dummy"
console.log(typeof s); //"object"
var nonObject = "1" + "2"; //Create a String primitive
console.log(typeof nonObject); //"string"
var objString = new String("1" + "2"); //Creates a String object
console.log(typeof objString); //"object"
//Helper functions
console.log("Hello".length); //5
console.log("Hello".charAt(0)); //"H"
console.log("Hello".charAt(1)); //"e"
console.log("Hello".indexOf("e")); //1
console.log("Hello".lastIndexOf("l")); //3
console.log("Hello".startsWith("H")); //true
console.log("Hello".endsWith("o")); //true
console.log("Hello".includes("X")); //false
var splitStringByWords = "Hello World".split(" ");
console.log(splitStringByWords); //["Hello", "World"]
var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
console.log("UPPPERCASESTRING".toLowerCase());//"upppercasestring"
console.log("There are no spaces in the end     ".trim());//"There are no spaces in the end"



//6.undefined

> var x1
undefined
> console.log(typeof x2)
undefined
undefined
> console.log(null == undefined)
true
undefined
> (null == undefined)
true
> null == undefined
true
> null === undefined
false
> 

