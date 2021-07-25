"use strict";

const expect = (a) => {
  return {
    toEqual: (b) => {
     return a === b ? displayPass() : displayFail(a, b);
    },

  }
}

// const it = (expect, actual) => {
//   console.log(`Test: ${expect}`);
//   actual();
// }


function it(label, callback) {
  window.sessionStorage.clear();
  displayTestInExampleGroup(`${label}`);
  try {
    callback();
  } catch (error) {
    displayResultUnderTest(error);
  }
}

function describe(exampleGroup, callback) {
  displayExampleGroupCard(`${exampleGroup}`);
  callback();
}
