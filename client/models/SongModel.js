// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  //this adds songs to a queue
  enqueue: function(){
    this.trigger('enqueue', this);
  },

  //takes the next queue song out
  dequeue: function(){
    this.trigger('dequeue', this);
  },

  // when song ended...call dequeue
  ended: function(){
    this.trigger('ended', this);
  }

});
