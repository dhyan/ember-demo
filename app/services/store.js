import Ember from 'ember';
import Option from 'quiz/models/option';
import Poll from 'quiz/models/poll';
import Vote from 'quiz/models/vote';



const polls = [];

let poll = Poll.create({
  id:1,
  options:[],
  prompt: 'Whats the question??',
  votes: []
});

poll.get('options').pushObjects([
  Option.create({id: '1', label:'Something', poll:poll}),
  Option.create({id: '1', label:'Nothing', poll:poll}),
  Option.create({id: '1', label:'Everything', poll:poll})
]);
polls.pushObject(poll);

 poll = Poll.create({
  id:2,
  options:[],
  prompt: 'Where is the answer??',
  votes: []
});

poll.get('options').pushObjects([
  Option.create({id: '2', label:'AAAAA', poll:poll}),
  Option.create({id: '2', label:'BBBBBB', poll:poll}),
  Option.create({id: '2', label:'CCCCCCC', poll:poll})
]);
polls.pushObject(poll);

export default Ember.Service.extend({
  saveVote(vote){
    return Vote.create({
      poll:poll
    });
  },
  createVote(){
    return Vote.create({poll:poll});
  },
  findAllPolls(){
    return polls;
  },
  findPoll(id){
    return this.findAllPolls().findBy('id',id);
  }
});
