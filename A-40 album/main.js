function make_album(atistName, albumTitle, tracks) {
    var album = {
        artist: atistName,
        title: albumTitle
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var no1 = make_album("Artist No 1 ", "Album Tile No 1 ");
var no2 = make_album("Artist No 2 ", "Album Tile No 2 ");
var no3 = make_album("Artist No 3 ", "Album Tile No 3 ", 10);
console.log(no1);
console.log(no2);
console.log(no3);
