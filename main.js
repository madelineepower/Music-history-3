var songs = [{name: "Hey There", artist: "Murphy", album: "Love"}, {name: "Dogs", artist:"The Dogs", album: "First Bark"}, {name: "Its a Dogs Life", artist:"Bebe", album: "Small Dogs"}, {name: "Sticks", artist: "Murphy and the Dogs", album: "Second Bark"}];

console.log("hi");

$(".Add-Music-View").hide();

$("#add-music-link").click(function(){
      $(".List-Music-View").hide();
      $(".Add-Music-View").show();
})

$("#list-music-link").click(function(){
      $(".Add-Music-View").hide();
      $(".List-Music-View").show();
})

var showSongs = (songs) => {
  console.log("songs", songs);
  for (var i = 0; i < songs.length; i++) {
    $("#song-names").append(`<section class="song-result">
                  <h2>${songs[i].name} </h2>
                  <p>${songs[i].artist} |</p>
                  <p>${songs[i].album} </p>
                </section>`);
  }
}
showSongs(songs);

$('#addButton').click(function(event) {
  var newSongObject = new Object();
      newSongObject.name = document.getElementById("song-input").value;
      newSongObject.artist = document.getElementById("artist-input").value;
      newSongObject.album = document.getElementById("album-input").value;
      songs.push(newSongObject);
      console.log(newSongObject);
      $('#song-names').append(`<section class="song-result">
                    <h2>${newSongObject.name} </h2>
                    <p>${newSongObject.artist} |</p>
                    <p>${newSongObject.album} </p>
                  </section>`);
     document.getElementById("song-input").value = "";
     document.getElementById("artist-input").value = "";
     document.getElementById("album-input").value = "";
})
