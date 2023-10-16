//task1-Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sum=arr.reduce((sum,elements)=>sum+elements,0)
//     return sum/arr.length
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,5,4,7,8,6,22));

//---------------------------------------------------------------------------------------------------------

//task2-Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sum=0
//     arr.forEach((elements)=>{
//         if (elements%2==0) {
//         sum+=elements
//         }
//     })
//     return sum
      
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,1,4,8,3,6));

//---------------------------------------------------------------------------------------------------------

//task3-Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sum=0
//     arr.forEach((elements)=>{
//         if (elements%2!==0) {
//         sum+=elements
//         }
//     })
//     return sum
      
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,1,4,8,3,6));

//---------------------------------------------------------------------------------------------------------

//task4-Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.

// function ortalama(...elements) {
//     const arr=elements
//     let sumtek=0
//     let sumcut=0
//     arr.forEach((elements)=>{
//         if (elements%2!==0) {
//         sumtek+=elements
//         }
//         else{
//             sumcut+=elements
//         }
//     })
//     return sumcut*sumtek
      
// }
// function son(callback,...elements) {
//     return callback(...elements)
// }
// console.log(son(ortalama,10,2,1,4,8,3,6));

//---------------------------------------------------------------------------------------------------------