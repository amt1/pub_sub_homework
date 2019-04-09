const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(container){
  this.container = container;
};

InfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

InfoView.prototype.render = function(instrumentFamily){
  // const instrumentFamily = InstrumentFamilies.findFamily(instrumentFamilyIndex);
  console.log('instrumentFamily:', instrumentFamily);
  const infoHeading = document.createElement('h3');
  infoHeading.textContent = `${instrumentFamily.name}`;
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrumentFamily.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoHeading);

  this.container.appendChild(infoParagraph);
};

module.exports = InfoView;
