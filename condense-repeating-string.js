/**
 * Allegedly Microsoft Interview Question
 * Prompt: Suppose you have a string with many repeated characters. Your task is to find a way 
 * to efficiently store this string by removing duplicates but you must preserve the ability to 
 * expand the string back to its original value. 
 * Example string AAABBBB11CCCCC
 */

const val = 'AAAAABBB11CCCD3333;;;;;;;;ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ'
// answer A5;B3;12;C3;D1;34;;8;Z29;

function encode(str) {
  let newStr = '';
  let index = 0;
  let currChar = str.charAt(index);
  let currCharCount = 0;
  while (index <= str.length && index < 100) {
    if (currChar !== str.charAt(index)) {
      newStr += `${currChar}${currCharCount};`
      currChar = str.charAt(index);
      currCharCount = 0;
    }
    currCharCount++;
    index++;
  }
  return newStr;
}

function decode(encodedStr) {
  return encodedStr.split(/(?<!;);/gm).map(section => {
    let character = section.charAt(0);
    let count = +section.slice(1);
    let decodedSection = '';
    for (let i = 0; i < count; i++) {
      decodedSection += character;
    }
    return decodedSection;
  }).join('');
}

function test (val) {
  console.log(`Testing: ${val}`);
  const encodedVal = encode(val);
  const decodedVal = decode(encodedVal);
  if (decodedVal === val) {
    console.log('Test Succeeded!')
  } else {
    console.log('Test Failed');
    console.log(`Expected Result: ${val} but received ${decodedVal}`);
  }
}

test('');
test(';;;;;')
test('12345')
test('AA11BB22cC32')
test('AAAAABBB11CCCD3333;;;;;;;;ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ');