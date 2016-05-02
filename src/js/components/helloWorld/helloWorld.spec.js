/*
 * @title helloWorld
 * @description Tests for the helloWorld component
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import helloWorld from './helloWorld';


/*********************************************************************************
 2. TESTS
 *********************************************************************************/

describe('The helloWorld component...', () => {

  it('should return a `Hello World!` string by default', () => {
    expect(helloWorld()).toEqual('Hello World!');
  });

  it('should return a `Hello Planet!` string when `true` (bool) is passed in', () => {
    expect(helloWorld(true)).toEqual('Hello Planet!');
  });

});
