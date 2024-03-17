const productList = document.querySelector('#product-list');
// GET
// utwórz funkcje fetchData która pobiera liste produktów i wypisuje tablice elementów w konsoli - https://dummyjson.com/docs/products
const ul = document.querySelector('ul');
const getProducts = async () => {
  const productsUrl = 'https://dummyjson.com/products';
  try {
    const response = await fetch(productsUrl);
    if (!response.ok) throw new Error('Failed to fetch');
    const { products } = await response.json();
    products.forEach((product) => {
      const { title, price, description, images } = product;
      const productLi = document.createElement('li');
      const productButton = document.createElement('button');
      const displayDetailsParagfaph = document.createElement('p');
      productButton.textContent = 'display details';
      displayDetailsParagfaph.textContent = `Description: ${description}, Price: ${price};`;
      productLi.textContent = `${title}`;
      const img = document.createElement('img');
      img.src = images[0];
      productLi.appendChild(img);
      displayDetailsParagfaph.style.display = 'none';
      img.style.display = 'none';
      productList.appendChild(productLi);
      productList.appendChild(productButton);
      productList.appendChild(displayDetailsParagfaph);
      productButton.addEventListener('click', function () {
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
        displayDetailsParagfaph.style.display =
          displayDetailsParagfaph.style.display === 'none' ? 'block' : 'none';
      });
    });
  } catch (error) {
    console.log(error);
  }
};
getProducts();
const productTitlefromInput = document.querySelector('#product-title');
const productForm = document.querySelector('#product-title-form');
const productSearchResult = document.querySelector('#product-search-results');
const findProductByTitle = async (event) => {
  event.preventDefault();
  const productTitle = productTitlefromInput.value;
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${productTitle}`
    );
    if (!response.ok) {
      throw new Error('Problem with endpoint');
    }
    const { products } = await response.json();
    products.forEach((product) => {
      console.log(product);
      const { title } = product;
      const productResult = document.createElement('li');
      productResult.textContent = `${title}`;
      productSearchResult.appendChild(productResult);
    });
    // do sprawdzenia
    // const filteredProducts = products.filter(product =>
    //     product.title.toLowerCase().includes(productTitle)
    // );
    // findProductByTitle(filteredProducts);
    // console.log(products);
  } catch (error) {
    console.log(error);
  }
};
productForm.addEventListener('submit', findProductByTitle);

const quickMessageForm = document.querySelector('#contact-form');
const companyAdressInput = document.querySelector('#company-address');
const phoneNumberInput = document.querySelector('#phone-number');
const emailInput = document.querySelector('#email');

function sendQuickMessage() {
  const companyAdress = companyAdressInput.value;
  const phoneNumber = phoneNumberInput.value;
  const email = emailInput.value;

  alert(`WYSŁANO WIADOMOŚĆ: ${companyAdress} ${phoneNumber} ${email}`);
}

quickMessageForm.addEventListener('submit', sendQuickMessage);

// ABOUT US WORKERS
const usersUl = document.querySelector('#about-us-workers ul');
console.log();
const fetchUsers = async () => {
  const usersURL = 'https://dummyjson.com/users';
  try {
    const response = await fetch(usersURL);
    if (!response.ok) throw new Error('Something wrong with fetching users!');
    // data.users
    const { users } = await response.json();
    users.forEach((user) => {
      const userLi = document.createElement('li');
      const { firstName, lastName } = user;
      userLi.textContent = `${firstName} ${lastName}`;
      usersUl.appendChild(userLi);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchUsers();
