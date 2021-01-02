//task 1
function numbers(num1, num2) {
    const arr = []
    if (!(isNaN(Number(num1))) && !(isNaN(Number(num2)))) {
        while (num1 <= num2) {
            arr.push(num1++)
        }
        while (num1 >= num2) {
            arr.push(num1--)
        }
    } else {
        alert("Incorrect input. You need to enter numbers.")
    }
    return arr
}

//task2
let degree = (a, b) => b ? a ** b : a ** 2

//task3
const math = (a, b) => [(a * 0.3).toFixed(), (b * 0.3).toFixed()]


//task4
let random = (min, max) => {

    return Math.floor(min + Math.random() * (max + 1 - min))
}

//task5
function findStr(str1, str2) {
    const arr = []
    let index = -1

    do {
        index = str1.indexOf(str2, index + 1)
        if (index !== -1) {
            arr.push(index)
        }
    } while (index !== -1)
    return (arr.join(', ') + ' - entry indices' + '\n' + arr.length + ' - number of coincidences')
}

console.log(findStr('Happy New Year! New 2021 Year', 'New'))

//task 6
function allNumbers() {
    const str = 'PECMAScript 2015 (6th Edition, ECMA-262)'
    const reg = /\d+/g

    return str.match(reg)
}

console.log(allNumbers())

//task 7
function uppercase() {
    const str = 'ECMAScript 2015 (6th Edition, ECMA-262)'
    const reg = /[A-Z]/g

    return str.match(reg)
}

console.log(uppercase())

//task 8
let c = '#cc8 #ffff #c4b5 #*&*^%'
let reg = /#[a-fA-F0-9]{1,6}/g
console.log(c.match(reg))

let n = '+(380) 066 777 77 77; 380 93 999 99 88; +(380) 77 777 88 99'
let reg2 = /\+\(\d{3}\)\s(067|068|096|097|098|050|066|095|099|063|073|093)\s\d{3}\s\d{2}\s\d{2}/g
console.log(n.match(reg2))

let t = '<h1> aaabbbb </h1>'
console.log(t.replace(/<h1>/g, '<h2/>'))

let scr = '<noscript>\n' +
    '    You need to enable JavaScript to run this app.\n' +
    '  </noscript> <script type="text/javascript">\n' +
    '    console.log(\'gtm\')\n' +
    '    </script>'

let reg3 = /<\/?script.*>/g
console.log(scr.match(reg3))
