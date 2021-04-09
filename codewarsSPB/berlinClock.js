// The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, 
// coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.

// alt text

// The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each,
//  alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format.
//  The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past),
//  and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) 
// or odd-numbered (when unlit) seconds.

// Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), 
// but no fields are lit in the second row; therefore the hour value is 10.
// Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), 
// while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether 
// tell the time as 10:31. (Source: Wikipedia)

// Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') 
// and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

// “O” = Light off
// “R” = Red light
// “Y” = Yellow light

// Example Test Case:
// Input String:
// 12:56:01

// Output String:
// O
// RROO
// RROO
// YYRYYRYYRYY
// YOOO

// Please check the example test cases for the required output format.

function berlinClock(time) {
  const newTime = time.split(':');

  const secRound = +newTime[2] % 2 === 0 ? 'Y' : 'O';

  const hour5Num = Math.floor(+newTime[0] / 5)
  const hour5Str = 'R'.repeat(hour5Num) + 'O'.repeat(4 - hour5Num);

  const hours1Num = +newTime[0] - (5 * hour5Num);
  const hours1Str = 'R'.repeat(hours1Num) + 'O'.repeat(4 - hours1Num);

  const min5Num = Math.floor(+newTime[1] / 5);
  let min5Str = [];
  const cicle5Min = [...Array(+min5Num).keys()];
  cicle5Min.forEach((elem) => {
    if ((elem + 1) % 3 !== 0) {
      min5Str.push('Y');
    } else {
      min5Str.push('R');
    }
  });
  const min5StrFull = min5Str.join('') + 'O'.repeat(11 - min5Num);

  const min1Num = +newTime[1] - min5Num * 5;
  const min1Str = 'Y'.repeat(min1Num) + 'O'.repeat(4 - min1Num);

  return (secRound + '\n' + hour5Str + '\n' + hours1Str + '\n' + min5StrFull + '\n' + min1Str)
}

console.log(berlinClock("12:56:01"));
// "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")
