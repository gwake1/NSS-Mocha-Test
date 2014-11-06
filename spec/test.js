// var chai = require('chai');
// var assert = chai.assert;
// QUnit.test( "preamble(name)", function( assert ) {
//   assert.equal(preamble("Eliza"), "Your name is Eliza!");
//   assert.equal(preamble("Colby"), "Your name is Colby!");
// });
describe('preamble', function(){
  it('should print my name out', function(){
    assert.equal(preamble("Eliza"), "Your name is Eliza!");
    assert.equal(preamble("Colby"), "Your name is Colby!");
  });
});
// QUnit.test("cheerFor(name)", function(assert){
//   expectedCheer = "Give me a... A!\nGive me a... L!";
//   assert.equal(cheerFor("AL"), expectedCheer);
describe('cheerFor', function(){
  it('should cheer the letters of my name out', function(){
    expectedCheer = "Give me a... A!\nGive me a... L!";
    asert.equal(cheerFor("AL"), expectedCheer);
  });
});
//   expectedCheer = "Give me a... B!\nGive me a... O!\nGive me a... B!";
//   assert.equal(cheerFor("BOB"), expectedCheer);
//
// 	TODO: Names with spaces or hyphens; Empty strings; Numbers; The business with vowel sounds; Names with lowercase letters
// });

/* global describe, it */

// (function () {
//   'use strict';
//
//   describe('Give it some context', function () {
//     describe('maybe a bit more context here', function () {
//       it('should run here few assertions', function () {
//
//       });
//     });
//   });
// })();
