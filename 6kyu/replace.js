function alphabetPosition(text) {
  var bytes = text.split('');
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  for (var i = 0, len = text.length; i < len; i++) {
	bytes[i] = alphabet.indexOf(bytes[i].toLowerCase()) + 1;
  }
  return bytes.filter(n => { if(n > 0) return n; } ).join(' ');
}
