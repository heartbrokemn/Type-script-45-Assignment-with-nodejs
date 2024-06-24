function make_album ( atistName :string , albumTitle:string , tracks?:number){
    let album :{artist:String , title:string, tracks?:number}={
        artist :atistName,
        title : albumTitle
    };
    if (tracks !== undefined ){
        album.tracks = tracks;
    }
    return album
}

let no1 = make_album ( "Artist No 1 ", "Album Tile No 1 ")
let no2 = make_album ( "Artist No 2 ", "Album Tile No 2 ")
let no3= make_album ( "Artist No 3 ", "Album Tile No 3 ", 10)


console.log(no1);
console.log(no2);
console.log(no3);

