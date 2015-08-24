/*
 * @title helloWorld
 * @description Tests for the helloWorld component
 */


/*********************************************************************************
 1. TESTS
 *********************************************************************************/


describe('The helloWorld component...', function() {

  it('should return a `Hello World!` string by default', function() {
    expect(APP.helloWorld()).toEqual('Hello World!');
  });

  it('should return a `Hello Planet!` string when `true` (bool) is passed in', function() {
    expect(APP.helloWorld(true)).toEqual('Hello Planet!');
  });

});
