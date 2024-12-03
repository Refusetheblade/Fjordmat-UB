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
  { name: 'Rødkål', description: 'Tradisjonell norsk rett.', price: '150 NOK' },
  { name: 'Kålrotpuré', description: 'En lekker liten forrett.', price: '150 NOK' },
  { name: 'Helstekt svineribbe', description: 'Saftig kjøtt og sprø svor.', price: '280 NOK' },
  { name: 'Pinnekjøtt', description: 'Den vanligste julematen på Vestlandet.', price: '200 NOK' },
  { name: 'Riskrem', description: 'Riskrem med rød saus er nydelig.', price: '260 NOK' },
  { name: 'Karamellpudding', description: 'Kanskje Norges mest populære dessert. ', price: '220 NOK' },
  { name: 'Rødkål', description: 'Tradisjonell norsk rett.', price: '150 NOK' },
  { name: 'Kålrotpuré', description: 'En lekker liten forrett.', price: '150 NOK' },
  { name: 'Helstekt svineribbe', description: 'Saftig kjøtt og sprø svor.', price: '280 NOK' },
  { name: 'Pinnekjøtt', description: 'Den vanligste julematen på Vestlandet.', price: '200 NOK' },
  { name: 'Riskrem', description: 'Riskrem med rød saus er nydelig.', price: '260 NOK' },
  { name: 'Karamellpudding', description: 'Kanskje Norges mest populære dessert. ', price: '220 NOK' },
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
  { name: 'RØD GLØGG ', description: 'Varm god drikke.', price: '40 NOK' },
  { name: 'HVIT GLØGG ', description: 'Varm god drikke.', price: '35 NOK' },
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


//Få oppskrifter fra txt
document.addEventListener("DOMContentLoaded", () => {
  const recipesGrid = document.getElementById("recipesGrid");
  const recipesFile = "assets/data/recipes.txt";

  fetch(recipesFile)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Could not fetch recipes: ${response.statusText}`);
          }
          return response.text();
      })
      .then(data => {
          const recipes = data.split('---').map(recipe => recipe.trim());
          recipes.forEach(recipeText => {
              const recipeElement = document.createElement("div");
              recipeElement.classList.add("recipe");

              const [title, ...body] = recipeText.split("\n");
              recipeElement.innerHTML = `
                  <h3>${title}</h3>
                  <p>${body.join("<br>")}</p>
              `;
              recipesGrid.appendChild(recipeElement);
          });
      })
      .catch(error => {
          console.error("Error loading recipes:", error);
          recipesGrid.innerHTML = "<p>Failed to load recipes. Please try again later.</p>";
      });
});
