for (var i = 3; i <= 10; i++) {
    console.log(i);

    for (var j = 1; j <= 10; j++) {
        document.write( i + ' X ' +  j  + " = " + i*j + "<p>" );
    }
}


// =========Assignment  ==================
// =======================================

// method=====(push,pop,shift,unshif........)

let array = ['tanim,true,likhon,56'];
console.log(array.push('ratul'));
console.log(array);

let frnd = ['tanim,true,likhon,56'];
console.log(frnd.pop());
console.log(frnd);



let arr = ["tanim","rezvi","ahmed","Dristy","ummey","habiba"];
// arr.unshift("Niyaz","nihat");
console.log(arr.unshift('niloy'));
console.log(arr);



var fdName = ["tanim","rezvi","ahmed","Dristy","ummey","habiba"];
fdName.shift();
console.log(fdName);



(function(){
    console.log('ok cool');
})
()


// function add (){
//     console.log('hello');
// }
// add()



// function add ( a,b){
//     console.log(a);
//     console.log(b);

// }
// add(4,23)




// (... spred operator / rest operator)


// function add ( ...x){
//     console.log(x);
//     // x.map((item)=>{
//     // console.log(item);})
// }
// add(3,4,5,6,7,8,9,0,13,23,54,565,67,667,88)




// function add(a,b){
//     console.log(a+b);
// }
// add(3,2)


function add(a,b){
   return(a+b);
}
let res = add(3,20)
console.log(res);




// object

// let students = {
// name: 'niloy',
// address:'kamarpara',
// id:'3'

// }
// console.log(students);


let students = {
name: 'niloy',
address:'kamarpara',
id:'3'

}
console.log(students.name);