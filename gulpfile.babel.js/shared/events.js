/*
 * @title Events
 * @description An object containing shared application events
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = {
  onError: err => {
    console.error(err.plugin, err.message);
    this.emit('end');
  }
};
