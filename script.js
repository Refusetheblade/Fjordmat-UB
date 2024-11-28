// Responsive nettside script
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

// meny
const julemiddagItems = [
  { name: 'Pinnekjøtt', description: 'Tradisjonell norsk rett.', price: '250 NOK' },
  { name: 'Ribbe', description: 'Saftig ribbe med sprø svor.', price: '300 NOK' },
  { name: 'Lutefisk', description: 'Serveres med ertestuing og bacon.', price: '280 NOK' },
  { name: 'Medisterkaker', description: 'Hjemmelaget medisterkaker.', price: '200 NOK' },
  { name: 'Juletorsk', description: 'Torsk med lever og rogn.', price: '260 NOK' },
  { name: 'Svinerull', description: 'Salt og krydret svinekjøtt.', price: '220 NOK' },
  { name: 'Gravet laks', description: 'Laks marinert i dill og sukker.', price: '240 NOK' },
  { name: 'Kalkun', description: 'Saftig kalkun med stuffing.', price: '320 NOK' },
  { name: 'Skinkestek', description: 'Langtidsstekt skinke.', price: '280 NOK' },
  { name: 'Viltgryte', description: 'Gryte med reinsdyr og sopp.', price: '290 NOK' },
  { name: 'Julepølser', description: 'Smakfulle, hjemmelagde pølser.', price: '190 NOK' },
  { name: 'Rype', description: 'Tradisjonell viltrett.', price: '350 NOK' },
];

const julekakerItems = [
  { name: 'Krumkaker', description: 'Tynne sprø kjeks.', price: '50 NOK' },
  { name: 'Serinakaker', description: 'Smøraktige kaker med mandler.', price: '60 NOK' },
  { name: 'Pepperkaker', description: 'Klassiske krydderkaker.', price: '40 NOK' },
  { name: 'Sandkaker', description: 'Tradisjonelle kaker med mandel.', price: '55 NOK' },
  { name: 'Berlinerkranser', description: 'Myke, søte smørkaker.', price: '60 NOK' },
  { name: 'Fattigmann', description: 'Sprø og luftige.', price: '70 NOK' },
  { name: 'Goro', description: 'Tynne og sprø med krydder.', price: '75 NOK' },
  { name: 'Kokosmakroner', description: 'Luftige med kokos.', price: '50 NOK' },
  { name: 'Brune pinner', description: 'Karamellaktige kaker.', price: '55 NOK' },
  { name: 'Smultringer', description: 'Friterte, myke godbiter.', price: '45 NOK' },
  { name: 'Hvite kakemenn', description: 'Søte småkaker.', price: '40 NOK' },
  { name: 'Rosettbakkels', description: 'Lett og sprø.', price: '65 NOK' },
];

const drikkeItems = [
  { name: 'Gløgg', description: 'Varm krydret drikk.', price: '40 NOK' },
  { name: 'Julebrus', description: 'Tradisjonell julebrus.', price: '35 NOK' },
  { name: 'Akevitt', description: 'En klassisk norsk juledram.', price: '70 NOK' },
  { name: 'Kaffe', description: 'Nykokt svart kaffe.', price: '30 NOK' },
  { name: 'Te', description: 'Varme urteteer.', price: '30 NOK' },
  { name: 'Kakao med krem', description: 'Perfekt for vinterkvelder.', price: '50 NOK' },
  { name: 'Eplemost', description: 'Lokalpresset eplemost.', price: '40 NOK' },
  { name: 'Rødvin', description: 'Passer til julemiddag.', price: '90 NOK' },
  { name: 'Hvitvin', description: 'Frisk og lett.', price: '85 NOK' },
  { name: 'Irish Coffee', description: 'Kaffe med whiskey og krem.', price: '100 NOK' },
  { name: 'Mineralvann', description: 'Kullsyrevann.', price: '30 NOK' },
  { name: 'Juleøl', description: 'Smakfullt og krydret.', price: '60 NOK' },
];

// Render Meny
const renderMenuItems = (menuId, items) => {
  const menuElement = document.getElementById(menuId);
  items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.innerHTML = `
      <div class="menu-item-header">
        <span class="menu-item-name">${item.name}</span>
        <span class="menu-item-price">${item.price}</span>
      </div>
      <p class="menu-item-description">${item.description}</p>
    `;
    menuElement.appendChild(div);
  });
};

renderMenuItems('julemiddag', julemiddagItems);
renderMenuItems('julekaker', julekakerItems);
renderMenuItems('drikke', drikkeItems);

// Catering
const cateringForm = document.getElementById('cateringForm');

cateringForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(cateringForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const date = formData.get('date');
  const guests = formData.get('guests');

  if (!name || !email || !phone || !date || !guests) {
    alert('Vennligst fyll ut alle obligatoriske felt.');
    return;
  }

  alert('Førespurnad sendt! Vi vil kontakte deg snart.');
  cateringForm.reset();
});

