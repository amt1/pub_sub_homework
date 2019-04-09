const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(container){
  this.container = container;
};

InfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InfoView:selected-instrument-ready', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

InfoView.prototype.render = function(instrumentFamily){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `writing some text`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InfoView;
