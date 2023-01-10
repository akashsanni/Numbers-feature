

const items= [...document.querySelectorAll('.number')]

const updateCount = (e) => {
   const value = parseInt(e.dataset.value)
   const increment = Math.ceil(value/1000)
   let initialValue = 0

   const counter = setInterval(function(){
        initialValue+=increment
        if(initialValue>value){

            e.textContent = `${value}`
            clearInterval(counter)
            return;
        }
        e.textContent = `${initialValue}`
   },1)
}
items.forEach((item)=>{
   updateCount(item)
})







//for counting by setInterval(fuct(),1)

// const succeededProjectsHeading = document.querySelector("#succeeded-projects-heading")
// const workingHours = document.querySelector('#working-hours-spent-heading')
// const happyClients = document.querySelector('#happy-clients-heading')
// let interval = 1;
// function countTo(){
//     let from = 1;
//     let to = 200;
//     let step = to > from ? 1 : -1;
    
//     if(from == to ){
//         succeededProjectsHeading.textContent = from;
//         return;
//     }

//     let counter = setInterval(function(){
//         from += step;
//         succeededProjectsHeading.textContent = from + "+";

//         if(to === from){
//             clearInterval(counter)
//         }
//     },interval);
// };
// countTo();
// function countToW(){
//     let from = 1;
//     let to = 531;
//     let step = to > from ? 1 : -1;
   
//     if(from == to ){
//         workingHours.textContent = from;
//         return;
//     }

//     let counter = setInterval(function(){
//         from += step;
//         workingHours.textContent = from + "+";

//         if(to === from){
//             clearInterval(counter)
//         }
//     },interval);
// };
// countToW();
// function countToH(){
//     let from = 1;
//     let to = 432;
//     let step = to > from ? 1 : -1;
    
//     if(from == to ){
//         happyClients.textContent = from;
//         return;
//     }

//     let counter = setInterval(function(){
//         from += step;
//         happyClients.textContent = from + "+";

//         if(to === from){
//             clearInterval(counter)
//         }
//     },interval);
// };
// countToH();