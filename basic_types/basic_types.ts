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
let boolVar1: boolean = false;
let boolVar2: boolean = true;
console.log(boolVar1);
console.log(boolVar2);

//  Number
console.log('--- Number Types ---');
let decVar: number = 10;
let hexVar: number = 0xA;
let binVar: number = 0b11;
let octVar: number = 0o11;
console.log(decVar);
console.log(hexVar);
console.log(binVar);
console.log(octVar);

//  String
console.log('--- String Types ---');
console.log('*** Const string ***');
let constStr1: string = 'Single quotes string';
let constStr2: string = "Double quotes string";
console.log(constStr1);
console.log(constStr2);

console.log('*** Concate string ***');
let subStr1 = "string A";
let subStr2 = "string B";
let concateStr = subStr1 + ' ' + subStr2;
console.log(concateStr);

console.log('*** Template string ***');
let numVar: number = 10;
let strVar: string = "Hello";
let interpolatedStr1: string = `${strVar} Interpolate ${numVar}`;
console.log(interpolatedStr1);

//  Array
console.log('--- Array Types ---');
console.log("*** Basic Array ***");
let arr1: number[] = [1, 2, 3];
console.log(arr1);
console.log("*** Generic Array ***");
let arr2: Array<number> = [4, 5, 6];
console.log(arr2);

//  Tuple
console.log('--- Tuple Types ---');
// tuple is like to combine different types in a structure.
// if we want to use tuple as a type, we shall ues interface instead.
let tupleVar: [string, number, boolean];
tupleVar = ['Hello', 123, true];
console.log(tupleVar[0]);
console.log(tupleVar[1]);
console.log(tupleVar[2]);

//  Enum
console.log('--- Enum Types ---');
enum Color {RED, GREEN, BLUE}
enum Animal {DOG = 1, CAT, HORSE}
enum Traffic {PLANE, CAR, SHIP}
let c: number = Color.GREEN;
let c_name: string = Color[c];
let a: number = Animal.CAT;
let a_name: string = Animal[a];
let t = Traffic.SHIP;
let t_name: string = Traffic[t];
console.log(c + " "+ c_name);
console.log(a + " "+ a_name);
console.log(t + " "+ t_name);

//  Any
console.log('--- Any Types ---');
let convertableVar: any = 123;
console.log(convertableVar);
convertableVar = "convert to a string";
console.log(convertableVar);
console.log("any can be used to implement Python style lists");
let pyList: any[] = [1, true, "free"];
console.log(pyList[2]);

//  Void
console.log('--- Void Types ---');
console.log('*** Used in void return function ***');
function sayHello(): void {
    console.log("hello");
}
sayHello();
console.log('*** For variable declaration, basically not useful ***');
let voidVar: void = undefined; // or null

//  Null & Undefined
console.log('--- Null & Undefined Types ---');
console.log('null and undefined are subtypes of all other types');
console.log('you can assign null and undefined to something like number');
let aNumberVar: number = null;
let anotherNumberVar: number = undefined;

//  Never
console.log('--- Never Types ---');
console.log('The never type represents the type of values that never occur');
console.log('never can be the return type for a function that always throws an exception or one that never returns');
function error(message: string): never {
    throw new Error(message);
}
// error("fatal");

//  Type Assertions
console.log('--- Type Assertions ---');
console.log('similar to type convertion');
console.log('*** < New Type> ***');
let aAnyVar: any = "this is a book";
let aAnyVarLen: number = (<string>aAnyVar).length;
console.log(aAnyVarLen);

console.log('*** as New Type ***');
let anotherAnyVar: any = "that is a pen";
let anothrerAnyVarLen: number = (anotherAnyVar as string).length;
console.log(anothrerAnyVarLen);

