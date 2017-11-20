/*
This tutorial introduce basic types in Typescript.
Basic types include the following:
 > Boolean
 > Number
 > String
 > Array
 > Tuple
 > Enum
 > Any
 > Void
 > Null and Undefined
 > Never
 > Type Assertions
*/
//  Boolean
console.log('--- Boolean Types ---');
var boolVar1 = false;
var boolVar2 = true;
console.log(boolVar1);
console.log(boolVar2);
//  Number
console.log('--- Number Types ---');
var decVar = 10;
var hexVar = 0xA;
var binVar = 3;
var octVar = 9;
console.log(decVar);
console.log(hexVar);
console.log(binVar);
console.log(octVar);
//  String
console.log('--- String Types ---');
console.log('*** Const string ***');
var constStr1 = 'Single quotes string';
var constStr2 = "Double quotes string";
console.log(constStr1);
console.log(constStr2);
console.log('*** Concate string ***');
var subStr1 = "string A";
var subStr2 = "string B";
var concateStr = subStr1 + ' ' + subStr2;
console.log(concateStr);
console.log('*** Template string ***');
var numVar = 10;
var strVar = "Hello";
var interpolatedStr1 = strVar + " Interpolate " + numVar;
console.log(interpolatedStr1);
//  Array
console.log('--- Array Types ---');
console.log("*** Basic Array ***");
var arr1 = [1, 2, 3];
console.log(arr1);
console.log("*** Generic Array ***");
var arr2 = [4, 5, 6];
console.log(arr2);
//  Tuple
console.log('--- Tuple Types ---');
// tuple is like to combine different types in a structure.
// if we want to use tuple as a type, we shall ues interface instead.
var tupleVar;
tupleVar = ['Hello', 123, true];
console.log(tupleVar[0]);
console.log(tupleVar[1]);
console.log(tupleVar[2]);
//  Enum
console.log('--- Enum Types ---');
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var Animal;
(function (Animal) {
    Animal[Animal["DOG"] = 1] = "DOG";
    Animal[Animal["CAT"] = 2] = "CAT";
    Animal[Animal["HORSE"] = 3] = "HORSE";
})(Animal || (Animal = {}));
var Traffic;
(function (Traffic) {
    Traffic[Traffic["PLANE"] = 0] = "PLANE";
    Traffic[Traffic["CAR"] = 1] = "CAR";
    Traffic[Traffic["SHIP"] = 2] = "SHIP";
})(Traffic || (Traffic = {}));
var c = Color.GREEN;
var c_name = Color[c];
var a = Animal.CAT;
var a_name = Animal[a];
var t = Traffic.SHIP;
var t_name = Traffic[t];
console.log(c + " " + c_name);
console.log(a + " " + a_name);
console.log(t + " " + t_name);
//  Any
console.log('--- Any Types ---');
var convertableVar = 123;
console.log(convertableVar);
convertableVar = "convert to a string";
console.log(convertableVar);
console.log("any can be used to implement Python style lists");
var pyList = [1, true, "free"];
console.log(pyList[2]);
//  Void
console.log('--- Void Types ---');
console.log('*** Used in void return function ***');
function sayHello() {
    console.log("hello");
}
sayHello();
console.log('*** For variable declaration, basically not useful ***');
var voidVar = undefined; // or null
//  Null & Undefined
console.log('--- Null & Undefined Types ---');
console.log('null and undefined are subtypes of all other types');
console.log('you can assign null and undefined to something like number');
var aNumberVar = null;
var anotherNumberVar = undefined;
//  Never
console.log('--- Never Types ---');
console.log('The never type represents the type of values that never occur');
console.log('never can be the return type for a function that always throws an exception or one that never returns');
function error(message) {
    throw new Error(message);
}
// error("fatal");
//  Type Assertions
console.log('--- Type Assertions ---');
console.log('similar to type convertion');
console.log('*** < New Type> ***');
var aAnyVar = "this is a book";
var aAnyVarLen = aAnyVar.length;
console.log(aAnyVarLen);
console.log('*** as New Type ***');
var anotherAnyVar = "that is a pen";
var anothrerAnyVarLen = anotherAnyVar.length;
console.log(anothrerAnyVarLen);
