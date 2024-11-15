<script>
    export let date = ''; // Valor inicial da data
    export let label
  
  </script>
  

  <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">{label}*</label>
    <input
        type="date"
        id="first_name" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
        bind:value={date}
      />
  </div>
  

