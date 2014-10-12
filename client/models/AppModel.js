// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({


  initialize: function(params){
    //set variable mediaPlayer to have access to it for ending
    

    this.set('currentSong', new SongModel()); //setting 'current song' to be a new model, which has play,queue, etc
    this.set('songQueue', new SongQueue()); //creating a new 'playlist'

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    // params.library.on('dequeue', function(song){
    //   this.get('songQueue').remove(song);
    // }, this);

  }

});

/*
  if (mediaPlayer.played.end() === mediaPlayer.seekable.end()) //the file is done playing
    run 'ended' and or dequeue

*/



    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
