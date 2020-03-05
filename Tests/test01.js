
const h = $("h1");
console.log(h.get());
console.log(h.text());
console.log(h.html());
h.css("font-size", "120px");
h.on("click", function() {
    h.classToggle("red");
});