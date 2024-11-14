<script>
	import '../app.css';
	import { loadingStore } from '$lib/store/loadingStore';
	import Loading from '$lib/components/Loading.svelte';
	import Toast from '$lib/components/Toast.svelte';
	let { children } = $props();
</script>


{#if $loadingStore}
	<Loading />
{:else}
	{@render children()}
{/if}
<Toast 
	tipo='SUCESSO'
	texto='TESTE DO TOAST'
	visivel={true}
/>