import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    this.get('store').findPoll(params.poll_id);
  },
  store: Ember.inject.service('store')
});
