/*
 * @title Events
 * @description An object containing shared application events
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

let events = {
  onError: function (err) {
    console.error(err.plugin, '>', err.message);
    this.emit('end');
  }
};

export default events;
