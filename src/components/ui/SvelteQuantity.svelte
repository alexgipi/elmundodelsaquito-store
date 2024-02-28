<!-- ---
interface Props {
  min?: number;
  max?: number;
  name?: string;
  value?: number
}

const { min, max, name, value } = Astro.props;
--- -->
<script lang="ts">

    export let min = 0;
    export let max:number | null = null;
    export let name:string | undefined = undefined;
    export let value:string | number | undefined = min;
    let inputEl:any;

    function increment(){
        let number = parseInt(inputEl.value);
        
        if(max){
            if(number < max) {
                value = number+1;
            }
        } else {
            value = number+1;
        }

        inputEl.value = value;
    }

    function decrement(){
        let number = parseInt(inputEl.value);
        if(number > min) {
            value = number-1;
        }
        inputEl.value = value;
    }

    function handleInput(){
        let number = parseInt(inputEl.value);

        if(number < min) {
            inputEl.value = min;
        }

        if(max && number > max){
            inputEl.value = max;
        }

        
    }

</script>

<div class="relative flex items-center">
    <button on:click={decrement} type="button" id="decrement-button" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
        </svg>
    </button>

    <input
    on:input={handleInput}
    bind:value={value}
    min={min}
    max={max}
    name={name}
    type="number"
    bind:this={inputEl}
    id="counter-input-example" 
    class="pr-0 pl-0 flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" 
    placeholder="" 
    required
    >
    
    <button on:click={increment} type="button" id="increment-button" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
    </button>
</div>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>

