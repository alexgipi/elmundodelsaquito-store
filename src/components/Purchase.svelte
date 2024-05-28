<script lang="ts">

import AddToCartButton from "./AddToCartButton.svelte";
import SvelteQuantity from "./ui/SvelteQuantity.svelte";

export let product: any = undefined;
let qty = 1;

interface selectedAttributesOption {
  slug: string,
  viewValue: string,
  optionSelected: string 
}

let selectedAttributesOptions: selectedAttributesOption[] = [];

function handleAttributeChange(e:any, attribute:any){
    // console.log(attribute)
    // console.log(e.target.value)
    // selectedAttributesOptions[attribute.slug] = {
    //     slug: attribute.slug,
    //     viewValue: attribute.name,
    //     optionSelected: e.target.value
    // }

    const index = selectedAttributesOptions.findIndex((el) => {
        return el.slug === attribute.slug
    })

    if(index === -1){
        selectedAttributesOptions.push(
            {
                slug: attribute.slug,
                viewValue: attribute.name,
                optionSelected: e.target.value
            }
        )
        console.log(selectedAttributesOptions)
    }else {
        selectedAttributesOptions[index].optionSelected = e.target.value;
        console.log(selectedAttributesOptions)
    }
}
</script>

<div>
    {#if product?.attributes?.length > 0 }
        <div class="inline-flex flex-col gap-2 mt-2 mb-3">
            
            {#each product.attributes as attribute, attributeIndex}
                {#if attribute.options}
                <label for="">{attribute.name}:</label>
                    <select on:change={(e) => handleAttributeChange(e, attribute) } name={attribute.slug} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected disabled>{attribute.label || attribute.name || 'Selecciona una opción'}</option>
                        
                        {#each (attribute.options?.split(",")) as option, optionIndex}
                        <option value={option}>{option}</option>
                        {/each}
                    </select>
                {/if}
            {/each}
            
        </div>

        
    {/if}

    <SvelteQuantity bind:value={qty} min={1} max={100} name="quantity"/>
    
    <div class="flex product-actions gap-2.5 mt-4">
        <AddToCartButton selectedAttributesOptions={selectedAttributesOptions} disabledProp={false} product={product} quantity={qty}></AddToCartButton>
    </div>
</div>



<style>
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
</style>