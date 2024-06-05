// function sayHello(n) {
//     console.log("Saludo", n);
// }
// function sayHelloDelay(n) {
//     setTimeout(function(){
//         console.log("saludo demorado");
//     }, 500)

// }
// sayHello(1);
// sayHello(2);
// sayHelloDelay();

// function suma(acum,valor,callback) {
//     // let total
//     // setTimeout(function (params) {
//     //     total = acum + valor;
//     // },1000)
//     setTimeout(function(params) {
//         let total = acum + valor;
//         callback(total)
//     },3000)
// }

// // let acum = 0;
// // suma
// // acum= suma(acum,2);
// // acum= suma(acum,2);
// // console.log("El total es", acum);
// suma(0,2,function name(acum) {
//     suma(acum,5,function(acum) {
//         console.log(acum);
//     });
    
// })

// let acum= 0;
// async function sumarPromise(acum,valor) {
//     return new Promise(function(resolve,reject){
        
//         if(valor == 5) return reject("No me gustan los 5"); 
        
//         const total = acum + valor;
//         resolve(total)

//     })
// }

// async function main(params) {
//     try {
//         let total = await sumarPromise(0,2)
//         total = await sumarPromise(total,2)
//         console.log(total);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

// sumarPromise(acum,2).then(function(total){
//     return sumarPromise(total,5)

// }).then(function(total) {
//     console.log(total);
// }).catch(function(error){
//     console.log(error);
// })


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json.title))

    //   let url = 'https://jsonplaceholder.typicode.com/todos/1';
    //   async function json(url){
    //     return new Promise(function(resolve,reject){
    //                 resolve(url)
    //             })
    //   }

    //   async function main(params) {
    //     let json = await json(url)
    //     console.log(json);
    //   }