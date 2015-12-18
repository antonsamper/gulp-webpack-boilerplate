/*
 * @title Events
 * @description An object containing shared application events
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

export default {
  onError: function (err) {
    console.error(err.plugin, '>', err.message);
    this.emit('end');
  }
};
