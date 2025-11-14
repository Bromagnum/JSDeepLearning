let output;

output = document.all;
output = document.all[10];

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;

output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = "new-id"

output = document.links;
output = document.links[0];
// output = document.links[0].href;
output = document.links.id;
output = document.links.className;

output = document.images;
output = document.images[0];
output = document.images[0].src;

// Foreach ile direkt documenttan ulaşılamaz o yüzden ilk önce document.forum u array e dönüştürüyoruz

const forms = Array.from(document.forms)

// forms.forEach((forms) => console.log(forms));

// console.log(output);
