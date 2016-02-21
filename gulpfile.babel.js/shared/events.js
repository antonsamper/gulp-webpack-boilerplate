/*
 * @title Events
 * @description An object containing shared application events
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import chalk from 'chalk';


/*********************************************************************************
 2. EXPORTS
 *********************************************************************************/

export default {
    onError: function (err) {
        console.error(chalk.white.bgRed.bold(`${err.plugin}: ${err.message}`));
        if (process.env.GULP_IGNORE_ERRORS === 'true') {
            this.emit('end');
        } else {
            process.exit(1);
        }
    }
};
