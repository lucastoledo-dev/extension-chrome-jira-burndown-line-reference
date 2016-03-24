import $ from 'jquery';
import {Burndown} from './components/burndown';
import {Detourer} from './utils/detourer';

let burndown;
let gh_data_model = new Detourer({
  name: 'gh_data_model',
  functionPath: 'GH.BurndownChartModel.setRawData',
  serializePath: 'this',
  callback: function(data) {
    if (burndown) {
      burndown.setData(data);
      console.log(data);
    }
  }
}).run();

chrome.runtime.onMessage.addListener(
  request => {
    if (request.message !== 'clicked_browser_action') {
      return;
    }

    if (!burndown) {
      burndown = new Burndown(gh_data_model.data);
      console.log(gh_data_model.data);
    }
  }
);