function songDecoder(song) {
  const re = new RegExp('WUB');
  // console.log(re); // /WUB/
  const newSong = song.split(re).filter(element => element !== '').join(' ');
  return (newSong);
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
// =>  WE ARE THE CHAMPIONS MY FRIEND

// /ab+c/i;new
// new RegExp('ab+c', 'i');
// убрать 'WUB'. В новой строке пробелы межд словами,  в начале и конце не пробелов.
