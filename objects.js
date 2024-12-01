// objects and symbols
const symb1=Symbol("key1");
const MyObj= {
    name:"Amit",        //type String
    [symb1]:"value1",   // type Symbol
    age:10,
    myArr:[1,2,3]
}
console.log(MyObj["name"]);
console.log(typeof symb1);
//console.log(typeof name);
MyObj.func=function(){
    console.log(`hello , ${this.name}`);
}
console.log(MyObj.func());
