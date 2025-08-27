// console.log('checking');

// যেখানে ক্লিক হবে সেটাকে ধরে নিয়ে আসো
// ইভেন্ট এড করো
// ফাংশন লেখো

// const btnClicked = document.getElementById('cart-btn-steel');

// btnClicked.addEventListener('click', function () {
//   console.log('steel er hari clicked');
// });

// id -> element
// ClassName -> array of element
// TagName -> array of element
// querySelector -> first element
// querySelectorAll -> array of element

// function removeSpace(str) {
//   return str.replaceAll(' ', '').toUpperCase();
// }

// const titles = document.querySelectorAll('.card-title');

// for (const title of titles) {
//   title.innerHTML = `<span class="text-pink-500">We are PH Student</span>`;
//   title.innerText = '';
//   title.style.border = '3px solid red';
//   title.classList.remove('card-title');
// }

// const images = document.getElementsByTagName('img');
// console.log(images);

// for (const img of images) {
//   img.addEventListener('mouseenter', function () {
//     img.src =
//       'https://c7.alamy.com/comp/BKDPPK/mr-bean-tv-rowan-atkinson-BKDPPK.jpg';
//   });
// }

function clickedElement(id) {
  const element = document.getElementById(id);
  return element;
}

// Event delegation technique

clickedElement('product-box').addEventListener('click', function (e) {
  if (e.target.className.includes('cart-btn')) {
    const cartBtn = e.target;

    const productImg =
      cartBtn.parentNode.parentNode.children[0].children[0].src;

    const productTitle =
      cartBtn.parentNode.parentNode.children[1].children[1].innerText;

    const productPrice =
      cartBtn.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    const totalPrice = clickedElement('total-price').innerText;

    const currentTotal = Number(totalPrice) + Number(productPrice);
    clickedElement('total-price').innerText = currentTotal;

    const cartContainer = clickedElement('cart-container');

    const newCart = document.createElement('div');
    newCart.innerHTML = `
                  <div class="flex justify-between items-center bg-gray-200 rounded-xl p-5">
                    <img src="${productImg}" alt="" class="w-12">
                    <div>
                      <h3 class="font-bold">${productTitle}</h3>
                      <p>$ ${productPrice}</p>
                    </div>
                  </div>
        `;
    cartContainer.append(newCart);

    const quantity = clickedElement('total-quantity').innerText;

    const currentQuantity = Number(quantity) + 1;
    clickedElement('total-quantity').innerText = currentQuantity;
  }
});

// traverse technique

// const cartBtns = document.getElementsByClassName('cart-btn');

// for (let cartBtn of cartBtns) {
//   cartBtn.addEventListener('click', function () {

//     const productImg =
//       cartBtn.parentNode.parentNode.children[0].children[0].src;

//     const productTitle =
//       cartBtn.parentNode.parentNode.children[1].children[1].innerText;

//     const productPrice =
//       cartBtn.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = clickedElement('total-price').innerText;

//     const currentTotal = Number(totalPrice) + Number(productPrice);
//     clickedElement('total-price').innerText = currentTotal;

//     const cartContainer = clickedElement('cart-container');

//     const newCart = document.createElement('div');
//     newCart.innerHTML = `
//               <div class="flex justify-between items-center bg-gray-200 rounded-xl p-5">
//                 <img src="${productImg}" alt="" class="w-12">
//                 <div>
//                   <h3 class="font-bold">${productTitle}</h3>
//                   <p>$ ${productPrice}</p>
//                 </div>
//               </div>
//     `;
//     cartContainer.append(newCart);

//     const quantity = clickedElement('total-quantity').innerText;

//     const currentQuantity = Number(quantity) + 1;
//     clickedElement('total-quantity').innerText = currentQuantity;
//   });
// }

document.getElementById('btn-clear').addEventListener('click', function () {
  const cartContainer = clickedElement('cart-container');
  cartContainer.innerHTML = '';
  clickedElement('total-price').innerText = 0;
  clickedElement('total-quantity').innerText = 0;
});

// traditional way
// document.getElementById('cart-btn-1').addEventListener('click', function () {
//   // const title = document.getElementById('card-title-1').innerText;
//   // console.log(title);

//   const title = clickedElement('card-title-1').innerText;
//   const price = clickedElement('card-price-1').innerText;
//   console.log(title, price);

//   // total price k dhorbe
//   const totalPrice = clickedElement('total-price').innerText;

//   // calculate korbe
//   let currentTotal = Number(price) + Number(totalPrice);

//   // price update korbe
//   clickedElement('total-price').innerText = currentTotal.toFixed(2);

//   // container take dhorte hobe
//   const cartContainer = clickedElement('cart-container');

//   // new ekta element create korte hobe cart container er moddhe
//   const newCart = document.createElement('div');
//   newCart.innerHTML = `

//   <div class="flex justify-between items-center bg-gray-200 rounded-xl p-5">
//   <img src="./assets/kitchen-1.png" alt="" class="w-12">
//   <div>
//     <h3 class="font-bold">${title}</h3>
//     <p>$ ${price}</p>
//   </div>
// </div>
//   `;
//   cartContainer.append(newCart);
// });
