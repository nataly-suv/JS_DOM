console.log("____________________");
console.log(document.documentElement); // тег <html>
console.log(document.body); // тег <body>
console.log(document.head); // тег <head>
console.log("____________________");

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.children);
console.log("____________________");

for (const val of document.body.children) {
  console.log(val.localName === "div" ? "yes" : "no");
}

for (const val of document.body.childNodes) {
  console.dir(val.nodeType); // тип узла
}

for (const val of document.body.childNodes) {
  console.dir(val.nodeValue); // значени узла
}

//   https://dom.spec.whatwg.org/#node
