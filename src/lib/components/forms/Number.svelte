<script>
    export let valor
    export let label
    export let placeholder = ""
    export let required = false
    export let maximo = 3
    let value = "";

    function handleInput(event) {
        const inputValue = event.target.value;
        // Remove caracteres que não são dígitos
        const onlyNumbers = inputValue.replace(/[^0-9]/g, '');

        // Limita a 10 dígitos
        if (onlyNumbers.length <= maximo) {
        value = onlyNumbers; // Atualiza o valor se estiver dentro do limite
        } else {
        value = onlyNumbers.slice(0, maximo); // Limita a 10 dígitos
        }

        event.target.value = value; // Atualiza o valor do input
    }
  
</script>


{#if required}
<div>
  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}*</label>
  <input
    type="text"
    id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
    placeholder={placeholder}
    bind:value={valor}
    on:input={handleInput}
  >
</div>
{:else}
<div>
  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}</label>
  <input
    type="text"
    id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
    placeholder={placeholder}
    on:input={handleInput}
  >
</div>
{/if}
  
