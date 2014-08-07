// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  //this adds songs to a collection
  enqueue: function(){
    this.trigger('enqueue', this);
  },

  //removes song that was selected from Songqueue collection
  dequeue: function(){
    this.trigger('dequeue', this);
  },

  // when song ended...call dequeue
  ended: function(){
    this.trigger('ended', this);
  }

});
