<script>
    export let label
    export let placeholder = ""
    export let valor
    export let required = false
</script>

{#if required}
    <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}*</label>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder={placeholder} bind:value={valor}/>
    </div>
{:else}
<div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}</label>
    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder={placeholder} bind:value={valor}/>
</div>
{/if}