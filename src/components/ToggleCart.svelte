<script lang="ts">
  import { isCartOpen, cartItems, totalItems, subtotal } from "../cartStore";
  import { formatCurrency } from "../utils";
  
  function toggleCart() {
    isCartOpen.set(!$isCartOpen);
  }
</script>

<div class="cart-panel">
  <button on:click={toggleCart} class="toggle-cart">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect><rect fill="none" height="24" width="24"></rect></g><g><path d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2 S18.1,18,17,18z M19,16c0-0.55-0.45-1-1-1H7l1.1-2h7.45c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14c0.25-0.48,0.08-1.08-0.4-1.34 c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.54,2.57C4.38,2.22,4.02,2,3.64,2H2C1.45,2,1,2.45,1,3s0.45,1,1,1h1l3.6,7.59 l-1.35,2.44C4.52,15.37,5.48,17,7,17h11C18.55,17,19,16.55,19,16z M11.29,2.71c0.39-0.39,1.02-0.39,1.41,0l2.59,2.59 c0.39,0.39,0.39,1.02,0,1.41l-2.59,2.59c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L12.17,7L9,7C8.45,7,8,6.55,8,6 c0-0.55,0.45-1,1-1l3.17,0l-0.88-0.88C10.9,3.73,10.9,3.1,11.29,2.71z"></path></g></svg>
    <span class="price">{formatCurrency($subtotal)}</span>
    
    {#if $totalItems > 0}
      <span class="total-products">{$totalItems}</span>
    {/if}
    
  </button>

  {#if Object.values($cartItems).length}
    <div class="cart-items">
      {#each Object.values($cartItems) as cartItem}
        <li class="cart-item">
          <div class="cart-item__info">
            <img src={cartItem.imageSrc} alt={cartItem.name} />
            <div>
              <h4>{cartItem.name}</h4>
              <small>
                {#each cartItem.selectedAttributes as attribute}
                  <span>
                    {attribute?.optionSelected}
                  </span>
                {/each}
              </small>
            </div>            
          </div>
          <div class="cart-item__details">
            <p class="quantity">
              {cartItem.quantity} x <span class="price">{formatCurrency(cartItem.price)}</span>
            </p>
          </div>
          
        </li>
      {/each}
      <footer>
        <p>
          <strong>Subtotal:</strong>
          <span>{formatCurrency($subtotal)}</span>
        </p>
        <a href="/finalizar-compra" class="cart-panel__btn">Finalizar compra</a>
      </footer>
    </div>
  {/if}
</div>

<style>
  .cart-panel {
    position: relative;
  }

  .toggle-cart {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    padding: 10px 18px;
    border: none;
    background: #fff;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    box-shadow: 1px 1px 10px #f2f2f2d4;
  }

  .cart-panel.open .cart-items {
    opacity: 1;
    visibility: bisible;
  }

  .toggle-cart .price,
  .toggle-cart .total-products {
    font-size: 0.84em;
    opacity: 0.9;
  }

  .toggle-cart .total-products {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    opacity: 1;
    width: 22px;
    height: 22px;
    left: -11px;
    top: -11px;
    background: #ff5858;
    color: #fff;
    border-radius: 100%;
    box-shadow: 1px 1px 10px #4e4e4e17;
  }

  .toggle-cart .price {
    font-weight: 600;
  }

  .toggle-cart svg {
    width: 24px;
    height: 24px;
    padding: 1px;
    fill: currentColor;
  }

  .cart-panel:hover .cart-items {
    opacity: 1;
    visibility: visible;
  }

  .cart-panel:hover::before {
    position: absolute;
    right: 0;
    top: 1px;
    content: "";
    width: 278px;
    height: 60px;
    border-radius: 100% 0% 0% 100% / 140% 0% 100% 0%;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    border: 1px solid #dddddd78;
    background: #ffffff;
    backdrop-filter: hue-rotate(53deg);
    position: absolute;
    width: 385px;
    right: 0;
    top: 50px;
    border-radius: 12px;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
  }

  .cart-item {
    list-style: none;
    padding: 22px;
    border-bottom: 1px solid #dddddd78;
    display: flex;
    align-items: center;
    gap: 14px;
    justify-content: space-between;
  }

  .cart-item:hover {
    background: #f6f6f6;
  }

  .cart-item__info {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .cart-item img {
    border-radius: 6px;
    object-fit: cover;
    height: 56px;
  }

  .cart-item h4 {
    font-size: 0.9em;
    margin: 0;
    max-width: 195px;
    text-wrap: balance;
  }

  .cart-item .quantity {
    font-size: 0.8em;
    margin-top: 0;
    white-space: nowrap;
  }

  .cart-item .price {
    color: #00966c;
    font-weight: 600;
  }

  .cart-items footer {
    display: flex;
    padding: 22px;
    flex-direction: column;
    gap: 18px;
  }

  .cart-items footer .cart-panel__btn {
    padding: 16px 20px;
    border: none;
    background: #3d1a6c;
    color: #fff;
    border-radius: 9px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    font-size: 0.9em;
    line-height: 1;
    font-weight: 500;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #a6a6a6 #ebebeb;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 11px;
  }

  *::-webkit-scrollbar-track {
    background: #ebebeb;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
    border-radius: 13px;
    border: 3px solid #ebebeb;
  }
</style>
