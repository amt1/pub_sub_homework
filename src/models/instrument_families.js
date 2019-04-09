const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentFamilyDetail = function(selectedIndex){
  const selectedInstrumentFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-instrument-ready', selectedInstrumentFamily)
};

module.exports = InstrumentFamilies;
