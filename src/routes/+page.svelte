<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/forms/Button.svelte';
	import Password from '$lib/components/forms/Password.svelte';
	import Text from '$lib/components/forms/Text.svelte';
	import { toast } from '$lib/store/toastStore';
	let usuario = '';
	let senha = '';
	function fazer_login() {
		if (usuario == 'admin' && senha == 'admin') {
			goto('/canaan');
		} else {
			toast('ERROR', true, 'Usuario ou senha invalidos!');
		}
	}
</script>

<section class="login">
	<div class="box_login">
		<h1>Faça Login</h1>
		<Text label="Usuario" bind:valor={usuario} placeholder="EX: VictorAlves" />
		<Password label="Senha" bind:valor={senha} />
		<Button label="Login" funcaoClick={fazer_login} />
	</div>
</section>

<style>
	.login {
		max-width: 100vw;
		min-width: 100vw;
		max-height: 100vh;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box_login {
		width: 500px;
		padding: 50px;
	}
	h1 {
		font-size: 1.4rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}
</style>
