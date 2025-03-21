<script lang="ts">
  import AddToCartButton from "./AddToCartButton.svelte";

  export let product: any = undefined;

  let quantityCounter = 1;

  function directPurchaseHandle() {
    alert("Direct purchase handle");
  }

interface selectedAttributesOption {
  slug: string,
  viewValue: string,
  optionSelected: string 
}

let selectedAttributesOptions: selectedAttributesOption[] | any = [];

let allAttributesSelected = false;
let disabled = false;

if(product?.attributes?.length > 0){
  allAttributesSelected = areAllAttributesSelected();
  if(allAttributesSelected) disabled = true;
}

function selectAttributeOptionHandle(attributeIndex:number, optionIndex:number){
  const attribute = product?.attributes[attributeIndex];

  const selectedOption:selectedAttributesOption = {
    slug: attribute.slug,
    viewValue: attribute.name,
    optionSelected: attribute.options.split(',')[optionIndex]
  }

  selectedAttributesOptions[attributeIndex] = selectedOption;

  allAttributesSelected = areAllAttributesSelected();
  disabled = allAttributesSelected;
}

function areAllAttributesSelected(): boolean {

    return selectedAttributesOptions.length != product.attributes?.length ||
    selectedAttributesOptions.includes(undefined);
    
}
</script>

<div class="purchase-form">
  <div class="product-fields">
    <!-- <fieldset disabled={product?.out_of_stock} class="incrementor-field" data-quantity="">
      <button on:click={decrementQuantity} title="Down" class="decrement"
        >-</button
      >
      <input
        id="quantity"
        type="number"
        class="quantity"
        name="quantity"
        value={quantityCounter}
        pattern="[1-9]+"
      />
      <button on:click={incrementQuantity} title="Up" class="increment"
        >+</button
      >
    </fieldset> -->

    
    <form class="max-w-xs">
      <div class="relative flex items-center">
          <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
              </svg>
          </button>
          <input type="text" id="counter-input" data-input-counter class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required>
          <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
              </svg>
          </button>
      </div>
    </form>


    <!-- {#if product?.attributes}
      {#each product.attributes as attribute, attributeIndex}
        <fieldset disabled={product?.out_of_stock} id={"attribute-" + attribute.slug}>
          <label for="">{attribute.name}</label>

          {#each attribute.options.split(",") as option, optionIndex}
            <button 
            class="select"
            on:click={() => selectAttributeOptionHandle(attributeIndex, optionIndex)}
            class:active={selectedAttributesOptions[attributeIndex]?.optionSelected === option}
            >
              {option}
            </button>
          {/each}
        </fieldset>
      {/each}
    {/if} -->

    

    <div class="flex gap-2">
      {#if product?.attributes}
        {#each product.attributes as attribute, attributeIndex}
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Seleccionar talla</option>
            
            {#each attribute.options.split(",") as option, optionIndex}
              <option value={option}>{option}</option>
            {/each}
          </select>
        {/each}
      {/if}
    </div>
    

  </div>

  <div class="flex product-actions">
    {#if product?.out_of_stock}
      <button
        disabled
        id="add-to-cart"
        class="btn btn-lg with-icon btn-add-to-cart out-of-stock"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/></svg>
        No hay stock
      </button>
    {:else}
      <AddToCartButton disabledProp={disabled} product={product} quantity={quantityCounter}></AddToCartButton>
      <button
        on:click={directPurchaseHandle}
        type="submit"
        id="add-to-cart"
        class="btn btn-lg with-icon btn-add-to-cart btn-add-to-cart--special"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
          ><g><rect fill="none" height="24" width="24" /></g><g
            ><path
              d="M10.67,21L10.67,21c-0.35,0-0.62-0.31-0.57-0.66L11,14H7.5c-0.88,0-0.33-0.75-0.31-0.78c1.26-2.23,3.15-5.53,5.65-9.93 c0.1-0.18,0.3-0.29,0.5-0.29h0c0.35,0,0.62,0.31,0.57,0.66L13.01,10h3.51c0.4,0,0.62,0.19,0.4,0.66c-3.29,5.74-5.2,9.09-5.75,10.05 C11.07,20.89,10.88,21,10.67,21z"
            /></g
          ></svg
        >
        Comprar directamente
      </button>
    {/if}
  </div>
</div>

<style>
  .purchase-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .product-actions,
  .product-fields {
    display: flex;
    gap: 14px 12px;
  }

  .product-fields {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-add-to-cart {
    color: #fff;
    background-color: #000;
    font-size: 0.96em;
    border-radius: 14px;
    min-width: 260px;
    justify-content: center;
  }

  .btn-add-to-cart--special {
    background-color: #FFC107;
    color: #000;
  }

  .btn.out-of-stock {
    background-color: #ffd0d0;
    color: #f7524b;
    cursor: not-allowed;
    position: relative;
  }

  fieldset:disabled {
    opacity: 0.5;
  }

  fieldset:disabled button, fieldset:disabled input {
    cursor: not-allowed;
  }

  
  fieldset button {
    padding: 6px 16px;
    height: 34px;
    min-width: 34px;
    border-radius: 8px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
    position: relative;
    
  }

  fieldset button.active {
    background-color: #3d1a6c;
    border-color: transparent;
    color: #fff;
  }

  fieldset {
    padding: 0;
    border: none;
    margin: 0;
    display: flex;
    gap: 10px 6px;
    flex-wrap: wrap;
  }

  fieldset label {
    width: 100%;
    font-size: 0.9em;
  }

  .incrementor-field {
    gap: 0;
  }

  .incrementor-field input {
    max-width: 60px;
    text-align: center;
    border: none;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #ddd;
    outline: none;
    margin-right: -17px;
    margin-left: -1px;
  }

  .incrementor-field button {
    border-radius: 8px 0 0 8px;
    padding: 0;
  }

  .incrementor-field button:last-child {
    border-radius: 0 8px 8px 0;
  }
</style>
