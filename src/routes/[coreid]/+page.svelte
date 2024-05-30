<script lang="ts">
	import { page } from '$app/stores';
	import { Qr } from '$lib/components';
	import Ican from '@blockchainhub/ican';
	import { blo } from "@blockchainhub/blo";
	import { deviceSherlock } from 'device-sherlock';

	const coreid = $page.params.coreid;
	const coreidPrint = coreid ? Ican.printFormat(coreid, ' ') : '';
	const coreidShort = coreid ? Ican.shortFormat(coreid, '⋯') : '';
	const isValidCoreid = Ican.isValid(coreid, true);

	function getAddressIconUrl(address: string): string {
		return blo(address);
	}

	const metaObject = {
		valid: {
			title: 'Connect to Core ID via CorePass',
		},
		missing: {
			title: 'Missing Core ID',
			description: 'Core ID is missing or not defined.',
		},
		invalid: {
			title: 'Invalid Core ID',
			description: 'This Core ID is invalid, please correct it.',
		},
	};
</script>

<svelte:head>
	{#if coreid && isValidCoreid}
		<title>Core ID: {coreidShort} ≡ {coreidPrint}</title>
		<meta name="description" content={metaObject.valid.title} />
		<meta property="og:title" content={metaObject.valid.title} />
		<meta property="og:description" content={coreidPrint} />
		<meta property="og:type" content="profile" />
		<meta name="twitter:title" content={metaObject.valid.title} />
		<meta name="twitter:description" content={coreidPrint} />
		<meta property="ican:xcb" content={coreid} />
		<meta property="og:image" content={`/og-image-coreid?title=${encodeURIComponent(metaObject.valid.title)}&subtitle=${encodeURIComponent(coreidPrint)}`} />
		<meta name="twitter:image" content={`/og-image-coreid?title=${encodeURIComponent(metaObject.valid.title)}&subtitle=${encodeURIComponent(coreidPrint)}`} />
	{:else if !coreid}
		<title>{metaObject.missing.title}</title>
		<meta name="description" content={metaObject.missing.description} />
		<meta property="og:title" content={metaObject.missing.title} />
		<meta property="og:description" content={metaObject.missing.description} />
		<meta property="og:type" content="profile" />
		<meta name="twitter:title" content={metaObject.missing.title} />
		<meta name="twitter:description" content={metaObject.missing.description} />
		<meta property="og:image" content={`/og-image-coreid?title=${encodeURIComponent(metaObject.missing.title)}&subtitle=${encodeURIComponent(metaObject.missing.description)}`} />
		<meta name="twitter:image" content={`/og-image-coreid?title=${encodeURIComponent(metaObject.missing.title)}&subtitle=${encodeURIComponent(metaObject.missing.description)}`} />
	{:else}
		<title>{metaObject.invalid.title}</title>
		<meta name="description" content={metaObject.invalid.description} />
		<meta property="og:title" content={metaObject.invalid.title} />
		<meta property="og:description" content={metaObject.invalid.description} />
		<meta property="og:type" content="profile" />
		<meta name="twitter:title" content={metaObject.invalid.title} />
		<meta name="twitter:description" content={metaObject.invalid.description} />
		<meta property="og:image" content={`/og-image-coreid?title=${encodeURIComponent(metaObject.invalid.title)}&subtitle=${encodeURIComponent(metaObject.invalid.description)}`} />
		<meta name="twitter:image" content={`/og-image-coreid?title=${encodeURIComponent(metaObject.invalid.title)}&subtitle=${encodeURIComponent(metaObject.invalid.description)}`} />
	{/if}
</svelte:head>

<div>
	{#if coreid && isValidCoreid}
		<div class="flex items-center justify-center w-full">
			<img alt={coreid} src={getAddressIconUrl(coreid)} class="h-8 rounded-md mr-4" />
			<h1 class="text-xl leading-8 select-all cursor-pointer text-black dark:text-white">{coreidShort}</h1>
		</div>
	{/if}
	<div class="divide-y divide-gray-300/50 text-slate-500 dark:text-slate-400">
		{#if coreid && isValidCoreid}
			<Qr param={coreid} />
			{#if deviceSherlock.isMobile}
				<div class="pt-8 text-base leading-7">
					<a
						href={`corepass:${coreid}`}
						rel="noopener noreferrer"
						class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
					>Open in CorePass</a>
				</div>
			{/if}
		{:else if !coreid}
			<p class="mb-4 font-bold">Missing Core ID</p>
			<p class="text-sm pt-4">Tip: Please add your Core ID to the URL.</p>
		{:else}
			<p class="mb-4 font-bold">Invalid Core ID</p>
			<p class="text-sm pt-4">Tip: Verify your Core ID or contact the sender to confirm and resend it.</p>
		{/if}
	</div>
</div>
