/*
 * @title fibonacci
 * @description Tests for the fibonacci component
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import fibonacci from './fibonacci';


/*********************************************************************************
 2. TESTS
 *********************************************************************************/

describe('The fibonacci component...', () => {

  it('should return the number `8`, the highest fibonacci number under 10', () => {
    let number;
    for (let n of fibonacci) {
      if (n > 10) break;
      number = n;
    }
    expect(number).toEqual(8);
  });

});
