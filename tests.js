var wc = new WhiteCipher();
var wc2 = new WhiteCipher();
var enc = wc.encode("the rain in spain falls mainly over the plain");
console.log("enc",enc)
console.log("enc.split",enc.split("\t"))

var dec = wc.decode(enc);
console.log("dec output--------->",dec)

var dec2 = wc2.decode(enc);
console.log("dec2 output--------->",dec2)

var wcCert = wc.getCert();
console.log("wcCert", wcCert);
wc2.setCert(wcCert);
dec2 = wc2.decode(enc);
console.log("dec2 output--------->",dec2)

wc2.generateNewCert();
dec2 = wc2.decode(enc);
console.log("dec2 output--------->",dec2)
