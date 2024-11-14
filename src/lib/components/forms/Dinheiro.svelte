<script>
    export let valor
    export let label = ""
    export let placeholder = ""
    export let required = false
    export let nome = ''
  
    function formatarValor(event) {
      const value = event.target.value.replace(/[^0-9]/g, ''); // Remove tudo que não é dígito
      const valorNumerico = parseFloat(value) / 100; // Converte para número, dividindo por 100
  
      // Formata o valor como moeda
      valor = valorNumerico.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
  
      event.target.value = valor; // Atualiza o valor do input
    }
  </script>


{#if required}
<div>
  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}*</label>
  <input
    type="text"
    id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
    on:input={formatarValor}
    placeholder={placeholder}
    name={nome}
    bind:value={valor}
  >
</div>
{:else}
<div>
  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}</label>
  <input
    type="text"
    id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
    on:input={formatarValor}
    placeholder={placeholder}
    bind:value={valor}
    name={nome}
  >
</div>
{/if}
  
