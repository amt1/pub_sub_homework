const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentFamilyData = require('./data/instrument_family_data.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', function(){
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-info')
  const InfoDisplay = new InfoView(infoDiv);
  InfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies(InstrumentFamilyData);
  instrumentDataSource.bindEvents();
});
