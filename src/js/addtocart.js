/////////////////////////////////addtocart///
const shoppingCard = document.querySelector('.modal-body');
const receiptContainer = document.querySelector('.total-price');
const net=document.querySelector('.nettotal');
const continueCheckout=document.querySelector('.menimbutonum');
const quantity = document.querySelectorAll('.quantity');
renderShoppingCard();

function renderShoppingCard() {
  fetch("http://localhost:3001/card")
    .then((res) => res.json())
    .then((data) => {
      shoppingCard.innerHTML = "";

      if (data.length === 0) {
        shoppingCard.innerHTML = `
          <div class="empty">
            <p>No items found.</p>
          </div>
        `;
        net.innerHTML = "";
        continueCheckout.innerHTML = `<p>Shop now</p>`;

        return;
      }

      data.forEach((element) => {
        const existingItem = shoppingCard.querySelector(`[data-id="${element.id}"]`);

        if (!existingItem) {
          const itemHTML = `
            <div class="notempty" data-id="${element.id}">
              <div class="cartitemimg">
                <img src="${element.img}" alt="">
              </div>
              <div class="cartiteminfo">
                <div class="leftinfo">
                  <div class="itemtitle">${element.propertytitle}</div>
                  <input type="number" class="count" value="1" min="0">
                  <div class="action">Remove</div>
                </div>
                <div class="rightinfo">
                  <div class="cart-price">$<span>${element.price}</span></div>
                </div>
              </div>
            </div>
          `;
          shoppingCard.insertAdjacentHTML('beforeend', itemHTML);
        } else {
          const input = existingItem.querySelector('.count');
          input.value = parseInt(input.value) + 1; 
        }
      });

      attachEventListeners(); 
    })
    .catch((error) => console.error("Error rendering shopping cart:", error));
}

function attachEventListeners() {
  const items = document.querySelectorAll('.notempty');

  items.forEach(item => {
    const input = item.querySelector('.count');
    const removeButton = item.querySelector('.action');
    const price = parseFloat(item.querySelector('.cart-price span').textContent.replace(/,/g, '')) || 0;

    updateItemVisibility(item, input.value);
    updateSubtotal();

    input.addEventListener('input', () => {
      updateItemVisibility(item, input.value); 
      updateSubtotal();
    });

    removeButton.addEventListener('click', () => {
      let inputValue = parseInt(input.value) || 0;

      if (inputValue > 0) {
        input.value = inputValue - 1; 
      }

      updateItemVisibility(item, input.value);
      updateSubtotal();

      const itemId = item.getAttribute('data-id');
      fetch(`http://localhost:3001/card/${itemId}`, {
        method: 'DELETE'
      })
        .then((response) => {
          if (response.ok) {
            console.log(`Item with ID ${itemId} removed from server.`);
            if (parseInt(input.value) === 0) {
              item.remove();
            }
          } else {
            console.error("Error removing item from server");
          }
        })
        .catch((error) => console.error("Error removing item from server:", error));

      updateSubtotal();
    });
  });
}

function updateItemVisibility(item, value) {
  item.style.display = parseInt(value) > 0 ? "flex" : "none";
}

function updateSubtotal() {
  const items = document.querySelectorAll('.notempty');
  let subtotal = 0;
  let totalQuantity = 0;

  items.forEach(item => {
    const input = item.querySelector('.count');
    const price = parseFloat(item.querySelector('.cart-price span').textContent.replace(/,/g, '')) || 0;
    const inputValue = parseInt(input.value) || 0;

    if (inputValue > 0) {
      subtotal += inputValue * price;
      totalQuantity += inputValue;
    }
  });

  renderReceiptContainer(subtotal, totalQuantity);
}

function renderReceiptContainer(total, totalQuantity) {
  const formattedTotal = total.toLocaleString('en-US'); 
  receiptContainer.innerHTML = `$<span>${formattedTotal}</span>`;
  
  quantity.forEach((element) => {
    element.textContent = totalQuantity;
  });
}

