var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function() {
                    var playlists = this.playlists;
                    for (var items in playlists) {
                      var listID = playlists[items]['id'];
                      var listName = playlists[items]['name'];
                      var listTrack = playlists[items]['tracks'];
                      var listLength = listTrack.length;
                      console.log(listID + ': ' + listName + ' - ' + listLength + " tracks.");
                    }
                  },

  printTracks: function() {
                    var tracks = this.tracks;
                    for (var songs in tracks) {
                      var trackNumber = tracks[songs]['id'];
                      var trackName = tracks[songs]['name'];
                      var trackArtist = tracks[songs]['artist'];
                      var trackAlbums = tracks[songs]['album'];
                      console.log(trackNumber + ": " + trackName + " by " + trackArtist + " (" + trackAlbums + ")");
                    }
                },

  printPlaylist: function(playlistID) {
                      var playlists = this.playlists;
                      var trackListRequest = this.tracks;
                      for (var playlistKey in playlists) {
                        if (playlistID === playlistKey) {
                          var listID = playlists[playlistID]['id'];
                          var listName = playlists[playlistID]['name'];
                          var listTrack = playlists[playlistID]['tracks'];
                          var listLength = listTrack.length;
                          console.log(listID + ': ' + listName + ' - ' + listLength + " tracks.");
                        }
                      }
                      for (var trackRequest in trackListRequest) {
                      for (var i = 0; i < listLength; i++) {
                        if (listTrack[i] === trackListRequest[trackRequest]['id']){
                          var trackID = trackListRequest[trackRequest]['id'];
                          var trackName = trackListRequest[trackRequest]['name'];
                          var trackArtist = trackListRequest[trackRequest]['artist'];
                          var trackAlbums = trackListRequest[trackRequest]['album'];
                          console.log(trackID + ": " + trackName + " by " + trackArtist + " (" + trackAlbums + ")")
                        }
                      }
                      }
                  },

  addTrackToPlaylist: function (trackId, playlistId) {
                        var playlists = this.playlists;
                         for (var playlistNum in playlists) {
                          if (playlistId === playlists[playlistNum]['id']) {
                            playlists[playlistNum]['tracks'] += "," + trackId;
                            console.log(playlists[playlistNum]);
                          }
                         }
                      },

  addTrack : function (name, artist, album) {
                var uid = function() {
                  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }
              var newID = uid();
              this.tracks[newID] = {
                id: newID,
                name: name,
                artist: artist,
                album: album,
              }
              console.log(this.tracks);
              },

  addPlaylist : function (name, tracks) {
                  var uid = function() {
                  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                  }
                  var newID = uid();

                  this.playlists[newID] = {
                    id: newID,
                    name: name,
                    tracks:tracks,
                  }

                  console.log(this.playlists);
                }
}

library.printPlaylists();
console.log("now the tracks");
library.printTracks();
console.log("now a playlist");
library.printPlaylist('p01');
console.log("now adding tracks");
library.addTrackToPlaylist('t01', 'p01');
console.log("add random tracks");
library.addTrack('hello', 'goodbye', 'bonjour');
console.log("add new playlist");
library.addPlaylist("this is my new playlist", "this is my first song");

