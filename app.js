var WordExtractor = require("word-extractor");
var extractor = new WordExtractor();
var extracted = extractor.extract("archivo.doc");
extracted.then(function(doc) {
  console.log(doc.getBody());
});