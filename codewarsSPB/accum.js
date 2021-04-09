// This time no story, no theory. 
// The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s.split('').map((w, i) => {
    let result = w.toUpperCase();
    if (i > 0) result +=  w.toLowerCase().repeat(i);
    if (i < s.length-1) result += '-';
    return result
  }).join('');
}
console.log(accum("HbideVbxncC"))
// H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc
