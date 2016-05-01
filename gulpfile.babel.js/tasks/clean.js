/*
 * @title Clean
 * @description A task to delete the output directory
 * @example (cli) gulp clean
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths from '../shared/paths.js';
import del         from 'del';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => del.sync(sharedPaths.outputDir);
