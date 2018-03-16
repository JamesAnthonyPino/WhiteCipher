# WhiteCipher
A whitespace text cipher.


**WhiteCipher** allows you to create encoded messages composed
completely of whitespaces. This block of whitespaces can then
be decoded back to the original message. An all-whitespace message
is useful in hiding information and uses the principle of steganography,
allowing messages to be hidden in plain sight.

Each instantiation of *WhiteCipher* produces a completely
unique random key. In order for someone to read your message,
you will need to send them the key along with the message.

To encode: *This would be done in the sender's browser.*
```javascript
var wc = new WhiteCipher();
var encoded = wc.encode("this is a message");
var key = wc.getKey(); // to be sent with the message
```


To decode: *This would be done in the recipient's browser*. The **key** would have to be sent along with the mmessage.

```javascript
var wc2 = new WhiteCipher();
wc2.setKey(key); // should have been sent with the message
var decoded = myOtherWc.decode(message);
```

## Installation
This is written in Vanilla JS (pure JavaScript), so there are no libraries or other dependencies. 
All you need to do is to include the script as you normally would in your page:

```html
<script type="text/javascript" src="/path/to/WhiteCipher.min.js"></script>
```
#### The Obfuscated Version
Included in this repository is an <u>obfuscated</u> version of this script, which can add to
the level of subterfuge and make it very difficult for someone to try to figure out
how to decode messages by studying the source code. For added security, rename the file
before including it in your application or site.

## Disclaimer
**WhiteCipher** is not intended to provide any level of security. Rather, it is a *privacy* tool. To truly secure information,
you would need to use encryption. This utility only intends to obscure information and make
it difficult for someone to detect that any message is being sent at all. Remember, as with any script code such as JavaScript,
someone could reverse-engineer the source code (even the obfuscated version, albeit with a lot of effort) and possibly
decode messages.
