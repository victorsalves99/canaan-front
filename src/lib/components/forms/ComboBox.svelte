<script>
    export let label
    export let options
    export let valor
</script>

<div>
  <label for="default" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}</label>
    <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" bind:value={valor}>
      {#each options as option}
          <option value="{option.value}">{option.name}</option>
      {/each}
  </select>
</div>