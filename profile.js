function createCircles() {
  const circles = [
    ['circle1', 'circle2'],
    ['circle3', 'circle4'],
    ['circle5', 'circle6'],
    ['circle7', 'circle8'],
    ['circle9', 'circle10'],
    ['circle11', 'circle12'],
    ['circle13', 'circle14']
  ];
  
  const circleContainer = document.createElement('div');
  circles.forEach(([outerClass, innerClass]) => {
    const outerDiv = document.createElement('div');
    outerDiv.className = outerClass;

    const innerDiv = document.createElement('div');
    innerDiv.className = innerClass;

    outerDiv.appendChild(innerDiv);
    circleContainer.appendChild(outerDiv);
  });
  document.body.appendChild(circleContainer);
}





function createNavBar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-light';

  const containerFluid = document.createElement('div');
  containerFluid.className = 'container-fluid';

  const brand = document.createElement('a');
  brand.className = 'navbar-brand';
  brand.href = 'http://127.0.0.1:5500/profile.html';
  brand.textContent = 'My Profile';

  const collapse = document.createElement('div');
  collapse.className = 'collapse navbar-collapse';
  collapse.id = 'navbarNav';

  const ul = document.createElement('ul');
  ul.className = 'navbar-nav';

  const links = [
    { text: 'Home', href: 'http://127.0.0.1:5500/profile.html', className: 'homepage' },
    { text: 'About', href: 'http://127.0.0.1:5500/About.html', className: 'page2' },
    { text: 'Skills', href: 'http://127.0.0.1:5500/Skill.html', className: 'page3' },
    { text: 'Education', href: 'http://127.0.0.1:5500/Education.html', className: 'page4' },
    { text: 'Contact', href: 'http://127.0.0.1:5500/Contact.html', className: 'page5' }
  ];

  links.forEach(link => {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.className = `nav-link active ${link.className}`; // Add class name dynamically
    a.href = link.href;
    a.textContent = link.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  collapse.appendChild(ul);
  containerFluid.appendChild(brand);
  containerFluid.appendChild(collapse);
  nav.appendChild(containerFluid);
  document.body.appendChild(nav);
}



function createImageContainer() {
  const inimgDiv = document.createElement('div');
  inimgDiv.className = 'inimg';

  const img = document.createElement('img');
  img.src = 'girl.png';
  img.alt = 'My photo';
  img.className = 'img1';

  inimgDiv.appendChild(img);
  document.body.appendChild(inimgDiv);
}

function createContentBox() {
  const box01 = document.createElement('div');
  box01.className = 'box01';

  const box02 = document.createElement('div');
  box02.className = 'box02';

  const h1_1 = document.createElement('h1');
  h1_1.className = 'box03';
  h1_1.textContent = 'Hello!';

  const h1_2 = document.createElement('h1');
  h1_2.className = 'box04';
  h1_2.textContent = 'My name is';

  const h1_3 = document.createElement('h1');
  h1_3.className = 'box05';
  h1_3.textContent = 'Noor-ul-ain';

  box02.appendChild(h1_1);
  box02.appendChild(h1_2);
  box02.appendChild(h1_3);

  const box06 = document.createElement('div');
  box06.className = 'box06';

  const button = document.createElement('button');
  button.className = 'box07';
  button.textContent = 'About Me';
  button.onclick = () => window.location.href = 'http://127.0.0.1:5500/About.html';

  box06.appendChild(button);
  box01.appendChild(box02);
  box01.appendChild(box06);
  document.body.appendChild(box01);
}

// Call functions to create elements
createCircles();
createNavBar();
createImageContainer();
createContentBox();






