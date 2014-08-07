// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  //initialize container for songs added to a "playlist"
  //listen for enqueue or dequeue events
    //add or remove songs based on event
    this.on("add", function(){
      if(this.length === 1){
       this.playFirst();
      }
    }, this);

    this.on("ended", function(){
      this.remove(this.at(0));
      if(this.length !== 0){
        this.playFirst();
      }
    }, this);

    //it expects the remove call to be here

  },

  playFirst: function(){
      this.at(0).play();
  }

});