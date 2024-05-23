<script lang="ts">
	import { page } from '$app/stores';
	import { Qr } from '$lib/components';
	import Ican from '@blockchainhub/ican';
	import { blo } from "@blockchainhub/blo";
	import { deviceSherlock } from 'device-sherlock';

	const coreid = $page.params.coreid;
	const coreidPrint = coreid ? Ican.printFormat(coreid, ' ') : '';
	const coreidShort = coreid ? Ican.shortFormat(coreid) : '';
	const isValidCoreid = Ican.isValid(coreid, true);

	const imgCoreid = `https://og.tailgraph.com/og?fontFamily=Abel&title=Connect%20to%20Core%20ID%20via%20CorePass&titleTailwind=font-bold%20text-4xl%20text-blue-900&titleFontFamily=Poppins&text=${encodeURIComponent(coreidPrint)}&textTailwind=mt-4%20text-4xl%20text-blue-900%20font-semibold&textFontFamily=Dosis&bgTailwind=bg-blue-400&footer=Clicking%20on%20the%20link%20will%20redirect%20you%20to%20the%20connection%20window.&footerTailwind=text-blue-50%20text-xl`;
	const imgMissing = `https://og.tailgraph.com/og?fontFamily=Abel&title=Missing%20Core%20ID!&titleTailwind=font-bold%20text-4xl%20text-orange-900&titleFontFamily=Poppins&text=&textTailwind=mt-4%20text-4xl%20text-blue-900%20font-semibold&textFontFamily=Dosis&bgTailwind=bg-orange-400&footer=Clicking%20on%20the%20link%20will%20redirect%20you%20to%20the%20connection%20window.&footerTailwind=text-xl%20text-orange-50`;
	const imgInvalid = `https://og.tailgraph.com/og?fontFamily=Abel&title=Core%20ID%20is%20invalid!&titleTailwind=font-bold%20text-4xl%20text-red-900&titleFontFamily=Poppins&text=&textTailwind=mt-4%20text-4xl%20text-blue-900%20font-semibold&textFontFamily=Dosis&bgTailwind=bg-red-400&footer=Clicking%20on%20the%20link%20will%20redirect%20you%20to%20the%20connection%20window.&footerTailwind=text-xl%20text-red-50`;

	function getAddressIconUrl(address: string): string {
		return blo(address);
	}
</script>

<svelte:head>
	{#if coreid && isValidCoreid}
		<title>Core ID: {coreidShort} ≡ {coreidPrint}</title>
		<meta name="description" content="Connect to Core ID via CorePass." />
		<meta property="og:title" content={`Core ID: ${coreidPrint}`} />
		<meta property="og:description" content="Connect to Core ID via CorePass." />
		<meta property="og:type" content="profile" />
		<meta property="og:image" content={imgCoreid} />
		<meta name="twitter:title" content={`Core ID: ${coreidPrint}`} />
		<meta name="twitter:description" content="Connect to Core ID via CorePass." />
		<meta name="twitter:image" content={imgCoreid} />
	{:else if !coreid}
		<title>Missing Core ID</title>
		<meta name="description" content="Core ID is missing or not defined." />
		<meta property="og:title" content="Missing Core ID" />
		<meta property="og:description" content="Core ID is missing or not defined." />
		<meta property="og:type" content="profile" />
		<meta property="og:image" content={imgMissing} />
		<meta name="twitter:title" content="Missing Core ID" />
		<meta name="twitter:description" content="Core ID is missing or not defined." />
		<meta name="twitter:image" content={imgMissing} />
	{:else}
		<title>Invalid Core ID</title>
		<meta name="description" content="This Core ID is invalid, please correct it." />
		<meta property="og:title" content="Invalid Core ID" />
		<meta property="og:description" content="This Core ID is invalid, please correct it." />
		<meta property="og:type" content="profile" />
		<meta property="og:image" content={imgInvalid} />
		<meta name="twitter:title" content="Invalid Core ID" />
		<meta name="twitter:description" content="This Core ID is invalid, please correct it." />
		<meta name="twitter:image" content={imgInvalid} />
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
