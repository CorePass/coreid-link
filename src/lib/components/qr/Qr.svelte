<script lang="ts">
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';
	import Ican from '@blockchainhub/ican';

	export let param: string;

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		const qrText = `corepass:${param.toUpperCase()}`;
		QRCode.toCanvas(canvas, qrText, { errorCorrectionLevel: 'H' }, function (error: Error | null | undefined) {
			if (error) console.error(error);
		});
	});
</script>

<div class="pt-6 space-y-6 text-base leading-7 text-slate-500 dark:text-slate-400">
	<p>Scan to connect via CorePass</p>
	<div class="qr">
		<canvas class="rounded-md" bind:this={canvas}></canvas>
	</div>
	<p><kbd class="block mt-4 text-xs select-all cursor-pointer">{Ican.printFormat(param, ' ')}</kbd></p>
</div>

<style>
	div.qr {
		display: flex;
		justify-content: center;
	}
</style>
