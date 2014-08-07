// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on("add", this.render, this);
    this.collection.on("ended", this.render, this);
    this.collection.on("dequeue", this.render, this);
  },

  render: function() {
    console.log('should be rendering');
    this.$el.children().detach();
    // console.log(JSON.stringify(this.collection));

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
