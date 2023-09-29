"use strict";

function testThis() {
  console.log(this);
  //In strict mode this is undefined
  // Non strict mode this is global
}

testThis();

const testThisArrow = () => this; //console.log(this); // this will be global

testThisArrow();

if (true) {
  function test() {
    console.log("Function test");
  }
}

// test(); // In strict mode functions are block scoped

module.exports = {
  testThis,
  testThisArrow,
};
