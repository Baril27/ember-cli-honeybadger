import Ember from 'ember';
import ENV from '../config/environment';

export function initialize() {
  $.getScript('//js.honeybadger.io/v0.2/honeybadger.min.js').then(function() {
    if (window.Honeybadger) {
      var apiKey = Ember.get(ENV, 'honeybadger.apiKey');
      var environment = Ember.get(ENV, 'honeybadger.environment');
      var debug = Ember.get(ENV, 'honeybadger.debug') || false;

      window.Honeybadger.configure({
        api_key: apiKey,
        environment: environment,
        debug: debug,
        onerror: true
      });
    }
  });
}

export default {
  name: 'honeybadger',
  initialize: initialize
};