const alphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz'
const number = '1234567890'
const symbol = '~!@#$%^&*()_+{}|[]:;<>,.?/'

function allRandom(length){
	let result = ''
	let item = ''
	let char = alphabetUppercase+alphabetLowercase+number+symbol
	for(var i=0; i<length; i++){
		item = char[Math.floor(Math.random() * (char.length-1))]
		result = result+item
	}

	return result
}

function doNumber(length){
	let result = ''
	let item = ''
	for(var i=0; i<length; i++){
		item = number[Math.floor(Math.random() * 9)]
		result = result+item
	}

	return result
}

function doUpper(length){
	let result = ''
	let item = ''
	for(var i=0; i<length; i++){
		item = alphabetUppercase[Math.floor(Math.random() * 25)]
		result = result+item
	}

	return result
}

function doLower(length){
	let result = ''
	let item = ''
	for(var i=0; i<length; i++){
		item = alphabetLowercase[Math.floor(Math.random() * 25)]
		result = result+item
	}

	return result
}

function doSym(length){
	let result = ''
	let item = ''
	for(var i=0; i<length; i++){
		item = symbol[Math.floor(Math.random() * 25)]
		result = result+item
	}

	return result
}

function customInput(length, char){
	let result = ''
	let item = ''
	for(var i=0; i<length; i++){
		item = char[Math.floor(Math.random() * (char.length-1))]
		result = result+item
	}

	return result
}

function customRandom(length, char){
	let executedChar = ''

	if(char.upperc === true){
		executedChar = executedChar+alphabetUppercase
	}

	if(char.lowerc === true){
		executedChar = executedChar+alphabetLowercase
	}

	if(char.num === true){
		executedChar = executedChar+number
	}

	if(char.sym === true){
		executedChar = executedChar+symbol
	}

	if(executedChar.length === 0){
		return 'generate failed, check your object on parameter'
	}

	let result = ''
	let item = ''

	for(var i=0; i<length; i++){
		item = executedChar[Math.floor(Math.random() * (executedChar.length-1))]
		result = result+item
	}

	return result
}

module.exports = { doUpper, doLower, doNumber, doSym, allRandom, customInput, customRandom }