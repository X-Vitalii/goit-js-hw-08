const liList = document.querySelectorAll('.item');

console.log(`Number of categories: ${liList.length}`);

liList.forEach(function (elem) {
    console.log(`Category: ${elem.children[0].textContent}`);
    console.log(`Elements: ${elem.children[1].children.length}`);
});