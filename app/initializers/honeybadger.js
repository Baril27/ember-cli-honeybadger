import Ember from 'ember';
import ENV from '../config/environment';

export function initialize() {
  Ember.$.getScript('//js.honeybadger.io/v0.4/honeybadger.min.js').then(function() {
    if (Honeybadger) {
      var apiKey = Ember.get(ENV, 'honeybadger.apiKey');
      var environment = Ember.get(ENV, 'honeybadger.environment');
      var debug = Ember.get(ENV, 'honeybadger.debug') || false;

      Honeybadger.configure({
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
