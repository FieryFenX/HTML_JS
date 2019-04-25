var p = document.getElementsByTagName('p')[0];
var text = p.textContent;
console.log(text);
var obj = {
  element: text.match(/element:(\w+);/)[1].toLowerCase(),
  text: text.match(/text:(.+?);/)[1],
  count: parseInt(text.match(/count:(\d+);/)[1])
};
console.log(obj);
console.log("Tag: "+obj.element+"\nText: "+obj.text+"\nCount: "+obj.count);

var body = document.getElementsByTagName('body')[0];
var newP = document.createElement(obj.element);
body.replaceChild(newP, p);
newP.textContent = obj.text;
for (var i = 1; i < parseInt(obj.count); i++)
  body.insertBefore(body.children[0].cloneNode(true), body.children[0]);
console.log(body.innerHTML);