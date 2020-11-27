function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim()
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
// =>  WE ARE THE CHAMPIONS MY FRIEND

// /ab+c/i;new
// new RegExp('ab+c', 'i');
// Метод trim() возвращает строку с вырезанными пробельными символами с её концов. 
// Метод trim() не изменяет значение самой строки.

// Квантификаторы — * + ? и {}
// abc*       соответствует строке, в которой после ab следует 0 или более символов c -> тест
// abc+       соответствует строке, в которой после ab следует один или более символов c
