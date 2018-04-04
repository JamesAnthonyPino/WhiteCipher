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
  var chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789".split("")

  var createSpMap = function() {
    chars.forEach(function(v,i){
      spMap[v] = sp();
    });
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

  this.getCert = function() {
    var mapAsStr =JSON.stringify(spMap);
    var cert = btoa(mapAsStr);
    return cert;
  }

  this.setCert = function(cert) {
    var fromB64 = atob(cert);
    var newMap = JSON.parse(fromB64);

    spMap = newMap;
    createRevSpMap();
    return ;
  }

  this.generateNewCert = function() {
    seen.length = 0;
    createSpMap();
    createRevSpMap();
  }
}
