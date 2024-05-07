<script lang="ts">
	import { page } from '$app/stores';
	import { Qr } from '$lib/components';
	import Ican from '@blockchainhub/ican';
	import { blo } from "@blockchainhub/blo";
	import { deviceSherlock } from 'device-sherlock';

	const coreid = $page.params.coreid;
	const isValidCoreid = Ican.isValid(coreid, true);

	function getAddressIconUrl(address: string): string {
		return blo(address);
	}
</script>

<div>
	{#if coreid && isValidCoreid}
		<div class="flex items-center justify-center w-full">
			<img alt={coreid} src={getAddressIconUrl(coreid)} class="h-8 rounded-md mr-4" />
			<h1 class="text-xl leading-8 select-all cursor-pointer text-black dark:text-white">{`${coreid.substring(0,4).toUpperCase()}…${coreid.slice(-4).toUpperCase()}`}</h1>
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
