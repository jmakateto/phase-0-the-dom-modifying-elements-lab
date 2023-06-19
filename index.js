// Write your code here!const element = document.createElement('div');
document.body.append(element);

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

const main = document.getElementById('main');
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

const element = document.getElementById('main');
element.style.height = '300px';
element.style.backgroundColor = '#27647B';
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2;

const ul = document.getElementsByTagName('ul')[0];
const secondChild = ul.querySelector('li:nth-child(2)');
ul.removeChild
