/*
 * @title Clean
 * @description A task to delete the output directory
 * @example (cli) gulp clean
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import del from 'del';
import sharedPaths from '../shared/paths.js';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  return del.sync(sharedPaths.outputDir);
};
