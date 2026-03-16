//console.log("Hello World");
// var a = 5;//block scope
// var a = 10;
// console.log(a);

// let b = 20;//block scope
// console.log(b)

// const c = 30;//block scope
//const c = 40;
// console.log(c);

// var a = 10;
// var str ="smile"//''//''
// var bool = true;//boolean
// var un;//unddefined
// var nu = null;//null
// var big = 124658787865n;
// var symbol = Symbol("li");
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);
//  Arthemetic 

// var a = 10;
// var b = 30;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //relational
// var a = 10;
// var b = 30;
// console.log(a>b);//false
// console.log(a<b);//true
// console.log(a>=b);//false
// console.log(a<=b);//false
// console.log(a==b);//ture
// console.log(a!=b);//false
// //loops
// // for loop
// //for(initialization;Condition;increment/decrement)
//     //statement
// // for(let i=0;i<=10;i++){
// //     console.log(i);
// // }
// // let i=1;
// // while(i<=10){
// //     console.log(i);
// //     i++;
// // }
// // i = 1;
// // do{
// //     console.log('do.....while');
// // }while(i==0);

// // for(let i=1;i<=10;i++){
// //     if(i%2==0)
// //          console.log(i)
// // }
// // i=9;
// // if(i%2===0) console.log("even");
// // else console.log("odd");
// let mark=90;
// if(mark>=90) console.log("o grade")
// else if(mark>=80) console.log("A grade")
// else if(mark>=70) console.log("B grade")
// else console.log("fail")

// let arr = [10,20,30,40];
// //for(variable variable_name in array_name){
//     //statement
// //}
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var obj = {
//     name:"ram",
//     age:20
// }
// for(let i in obj){
//     console.log(i,obj[i]);
// }
// //for(variable var_name of arr_name ){
// //statement
// //}
// for(let val of arr){
//     console.log(val);
// }
// let arr = [2,3,7,8,6];
// //map
// var double_arr=arr.map((i)=>(i*2));
// console.log(double_arr);
// //filterr
// var even = arr.filter((i)=>(i%2==0))
// console.log(even);
// //reduse
// var total = arr.reduce((sum,i)=>(sum+i),0)
// console.log(total);

// var total_sum = arr.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num),0)
// console.log(total_sum);

// var n = 7;
// var flag=true;
// if(n<=1) flag=false;
// else{
//     for(let i=2;i<=n/2;i++){
//         if(n%i===0){
//             flag=false;
//             break;
//         }
//     }
// }
// console.log(flag?"Prime":"not prime");

// var name="Lexiiii";
// console.log('My name is ${name}');

// var add = (a,b,callback)=>{
//     var result=a+b;
//     callback(result);
// }
// add(10,20,(res)=>{console.log(res)});

// var demo =()=>{
//     console.log("I am callback");
// }
// var main=(MyFunction)=>{
//     MyFunction()
// }
// main(demo)

// var promise=new Promise((resolve,reject)=>{
//     var success=false;
//     if(success){
//         resolve("Promise Resolved");
//     }
//     else{
//         reject("Promise Rejected")
//     }
// })
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))
var promise=new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        setTimeout(()=>{
        resolve("Promise Resolved");
    },5000)
    }
    else{
        reject("Promise Rejected")
    }
})
promise.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// const getData =()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))


const getData = async ()=>{
    try{
    var res = await fetch('https://jsonplaceholder.typicode.com/posts')
    var data = await res.json();
    console.log(data);
    }catch(err){
    console.log(err);
    }
}
getData()