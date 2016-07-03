/*
 * @title App
 * @description Application entry point
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import $ from 'jquery';
import fibonacci from './components/fibonacci/fibonacci';
import helloWorld from './components/helloWorld/helloWorld';

// helloWorld example
console.log(helloWorld());

// fibonacci example
for (let n of fibonacci) {
    if (n > 10) break;
    console.log(`fibonacci sequence number: ${n}`);
}

// jQuery selector sample
console.log($('body'));
