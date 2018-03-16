/**
 * WhiteCipher - a cipher that uses whitespaces
 *
 * WhiteCipher allows you to create encoded messages composed
 * completely of whitespaces. This block of whitespace can then
 * be decoded back to the original message. An all-whitespace message
 * is useful in hiding information and uses the principle of steganography,
 * allowing messages to be hidden in plain sight.
 *
 * Each instantiation of WhiteCipher produces a completely
 * unique random key. In order for someone to read your message,
 * you will need to send them the key.
 *
 * To encode:
 * var wc = new WhiteCipher();
 * var encoded = wc.encode("this is a message");
 * var key = wc.getKey();
 *
 *
 * To decode:
 * var myOtherWc = new WhiteCipher();
 * myOtherWc.setKey(key);
 * var decoded = myOtherWc.decode(message);
 *
*/
var WhiteCipher = function() {

  var seen = [];
  var getRand = function() {
    var n;
    do {
      n = Math.floor(Math.random() * 64) + 1;
    } while(seen.indexOf(n) > -1);
    seen.push(n);
    return n;
  }


  var sp = function() {
    var size = getRand();
    var s = "";
    var i;
    for(i=0;i<size;i++) {
      s+=" ";
    }
    return s;
  }

  var spMap = {};


  var createSpMap = function() {

    spMap = {
      "a": sp(),
      "A": sp(),

      "b": sp(),
      "B": sp(),

      "c": sp(),
      "C": sp(),

      "d": sp(),
      "D": sp(),

      "e": sp(),
      "E": sp(),

      "f": sp(),
      "F": sp(),

      "g": sp(),
      "G": sp(),

      "h": sp(),
      "H": sp(),

      "i": sp(),
      "I": sp(),

      "j": sp(),
      "J": sp(),

      "k": sp(),
      "K": sp(),

      "l": sp(),
      "L": sp(),

      "m": sp(),
      "M": sp(),

      "n": sp(),
      "N": sp(),

      "o": sp(),
      "O": sp(),

      "p": sp(),
      "P": sp(),

      "q": sp(),
      "Q": sp(),

      "r": sp(),
      "R": sp(),

      "s": sp(),
      "S": sp(),

      "t": sp(),
      "T": sp(),

      "u": sp(),
      "U": sp(),

      "v": sp(),
      "V": sp(),

      "w": sp(),
      "W": sp(),

      "x": sp(),
      "X": sp(),

      "y": sp(),
      "Y": sp(),

      "z": sp(),
      "Z": sp(),

      "0": sp(),
      "1": sp(),
      "2": sp(),
      "3": sp(),
      "4": sp(),
      "5": sp(),
      "6": sp(),
      "7": sp(),
      "8": sp(),
      "9": sp()
    }
  };

  createSpMap();


  var revSpMap = {};
  var createRevSpMap = function(){
    Object.keys(spMap).forEach(function(v,i){
      revSpMap[ spMap[v]  ] = v;
    });
  }

  createRevSpMap();

  this.encode = function(text) {
    var asB64 = btoa(text);
    var asB64Array = asB64.split("");
    var encodedArray = [];
    var i;
    for(i=0;i<asB64Array.length;i++){
      var spaceChar = spMap[asB64Array[i]];
      encodedArray.push(spaceChar);
    }

    return encodedArray.join("\t");
  }

  this.decode = function(text) {
    var spArray = text.split(/\t/);
    var chArray = [];
    spArray.forEach(function(v,i){
      chArray.push(revSpMap[v]);
    });
    return atob(chArray.join(""));
  }


  this.getKey = function() {
    var mapAsStr =JSON.stringify(spMap);
    var key = btoa(mapAsStr);
    return key;
  }

  this.setKey = function(key) {
    var fromB64 = atob(key);
    var newMap = JSON.parse(fromB64);

    spMap = newMap;
    createRevSpMap();
    return ;
  }

  this.generateNewKey = function() {
    seen.length = 0;
    createSpMap();
    createRevSpMap();
  }
}
