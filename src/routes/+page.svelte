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

<div class="space-y-5 text-center sm:text-left">
	<div class="space-y-2">
		<h1 class="text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-[1.0625rem]">
			Core ID
		</h1>
		<p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
			Generate a QR code for your Core ID to enable quick and secure connections with CorePass.
		</p>
	</div>
	<form on:submit|preventDefault={handleSubmit} class="space-y-3">
		<label class="sr-only" for="coreid-input">Core ID</label>
		<input
			id="coreid-input"
			type="text"
			inputmode="text"
			autocomplete="off"
			spellcheck="false"
			bind:value={coreid}
			on:input={(e) => validateCoreid(e.currentTarget.value)}
			on:paste={(e) => {
				e.preventDefault();
				const text = e.clipboardData?.getData('text');
				if (text) validateCoreid(text);
			}}
			placeholder="Enter your Core ID"
			class="w-full rounded-xl border bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/35 dark:border-slate-600 dark:bg-slate-950/50 dark:text-slate-100 dark:placeholder:text-slate-500 {!isValid && coreid.length > 0
				? 'border-red-500 focus:border-red-500 focus:ring-red-500/35'
				: 'border-slate-200 dark:border-slate-600'}"
		/>
		<button
			type="submit"
			disabled={!isValid}
			class="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none"
		>
			Create Connector
		</button>
	</form>
</div>
