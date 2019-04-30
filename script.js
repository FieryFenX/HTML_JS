var p = document.querySelector('p');
var text = p.textContent;
console.log(text);
var obj = {
  element: text.match(/element:(\w+);/)[1].toLowerCase(),
  text: text.match(/text:(.+?);/)[1],
  count: parseInt(text.match(/count:(\d+|-\d+);/)[1])
};
console.log(obj);
console.log("Tag: "+obj.element+"\nText: "+obj.text+"\nCount: "+obj.count);

var body = document.body;
var newTag = document.createElement(obj.element);
newTag.textContent = obj.text;
body.removeChild(p);
for (var i = 0; i < obj.count; i++)
  body.appendChild(newTag.cloneNode(true));
console.log(body.innerHTML);
