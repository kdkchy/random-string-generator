# random-string-generator

## desc
we can create a random string with this package. Built with simple javascript function ``` Math.floor(Math.random() ...) ``` and you can random all things, like alphabet, number, and symbol. You can also give a parameter that will random by this package!

## installation
npm i random-string-generator

## import 
const randomString = require('random-string-generator')

## time to play
<pre>
console.log(randomString.allRandom(5)) // will print 5 random string : {)FVN
</pre>

## what can you do
- .allRandom(int) ``` randomString.allRandom(5) // print random string by 5``` 
- .doNumber(int) ``` .doNumber(5) // print random number by 5``` 
- .doUpper(int) ``` .doUpper(5) // print random uppercase by 5``` 
- .doLower(int)
- .doSym(int)

- .customInput(int, string) ``` .customInput(5, 'qwerty') // print random from string parameter```

- .customRandom(int, object)  ``` print by selected character with object parameter ```
<pre>
{
	upperc: true,
	lowerc: true,
	num: true,
	sym: false	
}
</pre>



