// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  //initialize container for songs added to a "playlist"
  //listen for enqueue or dequeue events
    //add or remove songs based on event
    this.on("add", function(){
       this.playFirst();
    }, this);

    this.on("ended", function(){
      this.shift();
      if(this.length !== 0){
        this.playFirst();
      }
    }, this);

  },

  playFirst: function(){
    //spec wants this function
      this.at(0).play();
  }

});