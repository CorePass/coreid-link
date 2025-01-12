<script lang="ts">
	import Ican from '@blockchainhub/ican';
	import { goto } from '$app/navigation';

	let coreid = '';
	let isValid = false;

	function validateCoreid(value: string) {
		value = value.replace(/[^a-fA-F0-9]/g, '');
		coreid = value;

		if (value.length === 44) {
			isValid = Ican.isValid(value, true);
		} else {
			isValid = false;
		}
		return isValid;
	}

	function handleSubmit() {
		if (isValid) {
			goto(`/${coreid.toLowerCase()}`);
		}
	}
</script>

<svelte:head>
	<title>Core ID</title>
	<meta name="description" content="Create a Core ID connector" />
	<meta property="og:title" content="Core ID" />
	<meta property="og:description" content="Create a Core ID connector" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-image-intro.png" />
	<meta name="twitter:title" content="Core ID" />
	<meta name="twitter:description" content="Create a Core ID connector" />
	<meta name="twitter:image" content="/og-image-intro.png" />
</svelte:head>

<div class="space-y-4">
	<h2 class="text-xl leading-8 text-black dark:text-white">Core ID</h2>
	<p class="text-base text-slate-500 dark:text-slate-400">
		Generate a QR code for your Core ID to enable quick and secure connections with CorePass.
	</p>
	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<input
			type="text"
			bind:value={coreid}
			on:input={(e) => validateCoreid(e.currentTarget.value)}
			on:paste={(e) => {
				e.preventDefault();
				const text = e.clipboardData?.getData('text');
				if (text) validateCoreid(text);
			}}
			placeholder="Enter your Core ID"
			class="w-full px-3 py-2 rounded border {!isValid && coreid.length > 0 ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
		<button
			type="submit"
			disabled={!isValid}
			class="w-full px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
		>
			Create Connector
		</button>
	</form>
</div>
