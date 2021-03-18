console.log('you are at '+window.location);

const Page = document.querySelector('.page');
console.log(Page);

console.log(Page.style);
Page.style.backgroundColor = 'ghostwhite';

const Body = document.querySelector('body');
console.log(Body);

console.log(Body.style);
Body.style.backgroundColor = '#696969';

const image = document.querySelector('img');

console.log(image.hasAttribute('src'));

console.log(image.getAttribute('src'));

image.setAttribute('src', 'img/dj.jpg')

const short = document.querySelector('.short-bio ');

console.log(short.className);

short.className+=' animated';
