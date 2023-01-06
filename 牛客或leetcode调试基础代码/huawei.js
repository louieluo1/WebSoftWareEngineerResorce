var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var readline = __readline.prompt

//代码写在这里，下面例子都是自己的练习
    //let  num = readline()

    let arr=readline().split(' ')
    let str=arr[arr.length-1]
    console.log(str.length)


// let tar = readline()
// let step = 0
// let dist = Math.abs(tar)
// while (dist) {
//     step++
//     if (dist == (Math.abs(tar) - 1)) {
//         dist += step
//     } else if (dist >= step) {
//         dist -= step
//     } else {
//         dist += step
//     }
// }
// console.log(step)



// let hi = readline()
// let k = readline()
// let arr = []
// let arrIndex = []
// for (i = lo; i <= hi; i++) {
//     let one = i
//     let count = 0
//     while (one !== 1) {
//         if (one % 2 === 0) {
//             one = one / 2
//             count++
//         } else {
//             one = 3 * one + 1
//             count++
//         }
//     }
//     arr.push({ count: count, i: i })
// }
// arr.sort((a, b) => a.count - b.count)
// console.log(arr)
// console.log(arr[k - 1].i)


// let sum = 0
// arr.sort((a, b) => b - a);
// arr.forEach(item => {
//     if (Number(item) >= 0) {
//         sum += Number(item)
//     }
// })
// console.log(sum)
// let sum = 0
// let arr = []
// for (let i = 0; i < nums.length; i++) {
//     arr.push(nums[i])
//     let num = Number(nums[i])
//     for (let j = i + 1; j < nums.length; j++) {
//         num += Number(nums[j])
//         arr.push(num)
//     }

// }
// console.log(arr)
// console.log('arr')

// arr.sort((a, b) => b - a)
// console.log(arr[0])




// console.log(v1);
// var v1 = 100;
// function foo() {
//     console.log(v1);
//     var v1 = 200;
//     console.log(v1);
// }
// foo();
// console.log(v1);


// function test(x) {
//     console.log(x)//1
//     console.log('x')//x
// }
// const p = 1
// const p2 = test(p)
// console.log(p) // -> 1
// console.log('p') // -> p
// console.log(p2) // -> undefined
// 1
// x
// 1
// p
// undefined



// function test(person) {
//     person.age = 26
//     person = {
//         name: 'hzj',
//         age: 18
//     }
//     return person
// }
// const p1 = {
//     name: 'fyq',
//     age: 19
// }
// const p2 = test(p1)
// console.log(p1) // -> { name: 'fyq', age: 26 }
// console.log(p2) // -> { name: 'hzj', age: 18 } 




// 数组去重
// 方法一：for循环 +indexOf
// indexOf() 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。
// indexOf(searchElement)或indexOf(searchElement, fromIndex)
//searchElement:要查找的元素。fromIndex :可选,开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找，-2 表示从倒数第二个元素开始查找，以此类推。注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0。
//返回值:首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。
//使用方式：arr.indexOf('bison')或arr.indexOf('bison'，2)
// var arr = [7, 1, 2, 3, 3, 4, 5, 2, 1, 3, 4]
// function newArrFn(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.indexOf(arr[i]) === -1 ? newArr.push(arr[i]) : ''
//     };
//     return newArr
// }
// console.log(arr);
// console.log(newArrFn(arr));

// var arr = [7, 1, 2, 3, 3, 4, 5, 2, 1, 3, 4]
// function newArrFn(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.indexOf(arr[i]) === -1 ? newArr.push(arr[i]) : ''
//     };
//     return newArr
// }
// console.log(arr);
// console.log(newArrFn(arr));

// var tree = [
//     { name: 'a' },
//     {
//         name: 'b',
//         child: [
//             { name: b1 }
//         ]
//     },
//     { name: 'c' },
//     {
//         name: 'd',
//         child: [{
//             name: d1,
//             child: [{
//                 name: d2,
//                 child: [{
//                     name: d3,
//                     child: [
//                         { name: b4 }
//                     ]
//                 }]
//             }]
//         }]
//     },
// ]

// function fn(tree) {
//     let str = '<ul>'
//     tree.forEach(item => {
//         str += '<li>' + item.name + (item.child ? fn(item.child) : '') + '</li>'
//     })
//     return str + '</ul>'
// }
// document.body.innerHTML = fn(tree)


// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };

// const me = Object.create(person);

//me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//me.isHuman = true; // inherited properties can be overwritten

//me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
// console.log(me)

// var i = 1;

// function f() {
//     i++;
//     console.log("-------------  :  " + i)
//     return k;

//     function k() {
//         return "I love you!"
//     }
// }
// console.log(f) //[Function: k]
// f(); //-------------2
// console.log("111111111111");
// var ff = f(); //-------------3
// console.log("00000000000");
// console.log(ff) //[Function: k]
// console.log("222222222222222");
// f()(); //-------------4
// console.log("333333333333333");
// var fff = f()() //-------------5
// console.log("0100000000000000");
// console.log(fff) //I love you
// console.log("44444444444444");
// console.log(f()()); //-------------6和I love you

// class De {
//     noA = '1'
//     static a = '2'
//     noFun() {
//         console.log('noFun:' + this) //报错无此函数
//     }
//     static fun() {
//         console.log('fun:' + this.noA) //undefined
//     }
//     static aFun() {
//         console.log('aFun:' + this.a) //2
//     }
// }
// new De()
// De.noFun() //报错无此函数
// De.fun() //undefined
// De.aFun() //2


// var x = { b: 1 };
// console.log(a) //undefined


// 数组扁平化
// let arr = [1, [2, [3, [4, 5]]], 6, [7, 8, [9, 10, [11, 12]]], 13]
// 1.toString和split结合
// function flatDeep(arr) {
//     let result = []
//     return result = arr.toString().split(',').map(Number)
// }
// console.log(flatDeep(arr))
// 2.ES6的flat方法
// function flatDeep(arr) {
//     return arr.flat(Infinity)
// }
// console.log(flatDeep(arr))
// // 3.用reduce函数、concat函数（递归）
// function flatDeep(arr) {
//     let handle = (pre, current) => {
//         // 数组合并
//         return pre.concat(Array.isArray(current) ? flatDeep(current) : current)
//     }
//     return arr.reduce(handle, [])
// }
// console.log(flatDeep(arr))
// console.log('原数组：')
// console.log(arr)
// console.log('数组扁平化：')
// console.log(flatDeep(arr))



//随机不重复数组
// let num = 0;
// let val = 0;
// let newarr = []
// while (num = readline()) {
//     // while (num = readline() && num >= 1 && num <= 1000) {
//     let arr = [];
//     while (val = readline()) {
//         // while (val = readline() && val >= 1 && val <= 500) {
//         arr.push(val)
//     }
//     newarr = arr.sort((a, b) => a - b)
//         // 方法1数组去重
//     let narr = Array.from(new Set(newarr))
//     narr.forEach(item => {
//             console.log(item)
//         })
// 方法2数组去重
// let j = 0
// for (let i = 1; i < newarr.length; i++) {
//     if (newarr[j] != newarr[i]) {
//         console.log(newarr[j])
//         j = i
//         if (j == newarr.length - 1) {
//             console.log(newarr[j])
//         }
//     } else if (i == newarr.length - 1 && j < newarr.length - 2) {
//         console.log(newarr[i])
//     }
// }
// }



// 另一个题空瓶
// let n = 0;
// let count = 0;
// while (n = readline()) {
//     if (n >= 1 && n <= 100) {
//         while (n > 1) {
//             if (n > 2) {
//                 count++;
//                 n -= 2;
//             } else if (n == 2) {
//                 count++;
//                 n = 0;
//                 // console.log(count);
//             }
//         }
//         console.log(count)
//     } else {
//         console.log(count);
//     }
//     count = 0;
// }