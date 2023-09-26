




const arryObj= ['mango','mango', 'apple','apple','banana','pineapple','1','1']

const arOb= [
    {name: 'jihad',
age: 22},
    {name: 'rakib',
age: 22},
    {name: 'jihad',
age: 22},
    {name: 'rakib',
age: 22},
    {name: 'jihad',
age: 22},
]

// function removeDuplicateObj(data){
//     // console.log(data)
//     return data.filter((item,index)=> data.indexOf(item) === index)
// }
const names = arOb.map(i=>i.name)
function removeDuplicateObj2(data){
    // console.log(data)
    return data.filter(({ name, price }, index) => !names.includes(name, index + 1))
}

// console.log(removeDuplicateObj(arryObj))
console.log(removeDuplicateObj2(arOb))









