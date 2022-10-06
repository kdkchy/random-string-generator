# string-random-generator

## desc
we can create a random string with this package. Built with simple javascript function ``` Math.floor(Math.random() ...) ``` and you can random all things, like alphabet, number, and symbol. You can also give a parameter that will random by this package!

## installation
<pre>npm i string-random-generator</pre>

## import 
<pre>const randomString = require('string-random-generator')</pre>
you also can import only one function in it
<pre>const { doNumber } = require('string-random-generator)</pre>

## time to play
<pre>
console.log(randomString.allRandom(5)) // will print 5 random string : {)FVN
</pre>

## what can you do
| function     | parameter     | example                                                       | result                          |
|--------------|---------------|---------------------------------------------------------------|---------------------------------|
| allRandom    | (int)         | randomString.allRandom(5)                                     | ```1pO[. // generated 5 char``` |
| doNumber     | (int)         | doNumber(5)                                                   | ```41802```                     |
| doUpper      | (int)         | doUpper(5)                                                    | ```JSOPQ```                     |
| doLower      | (int)         | doLower(5)                                                    | ```dqmfi```                     |
| doSym        | (int)         | doSym(5)                                                      | ```(@:!0```                     |
| customInput  | (int, string) | ...(5, 'qwerty')                                              | ```ttweq```                     |
| customRandom | (int, object) | ...(5, { upperc: true, lowerc: true, num: true, sym: false }) | ```wR5r2```                     |



