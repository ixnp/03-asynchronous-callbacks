"use strict"
const fs = require('fs');
const callFirst = require ('../lib/reader.js').callFirst;

let testArr = [`../assets/fileOneTest`,`../assets/fileTwoTest`,`../assets/fileThreeTest`]

callFirst(testArr,function cb(err,data){
    if (err) throw err
    console.log(data);
})


describe("Testing that the files load to strings", ()=>{
   
    it('This test should pass true',(resolve,reject)=>{
        callFirst(testArr,function cb(err,data){
            if (err) throw err
            console.log(data);
      
        
        console.log('test',typeof data[0]);
        expect(typeof data[0] == 'string').toBe(true);
        resolve();
    })
    })
})

describe("Testing that the files have loaded in the correct order", ()=>{
    it('This test should pass true',(resolve,reject)=>{
        callFirst(testArr,function cb(err,data){
            if (err) throw err
            console.log(data);
        
        console.log('test test',data[2])
        expect(data.includes('Three')).toBe(true);
        resolve();
    }) 
    })
})


// callFirst(testArr,function cb(err,data){
//     if (err) throw err
//     console.log(data);
// })