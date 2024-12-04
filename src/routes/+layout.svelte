<script>
	import "../app.css";
	import { deviceSherlock } from 'device-sherlock';
</script>

<article class="flex flex-col h-screen justify-between text-black">
	<header class="w-full p-4 flex justify-between items-center bg-gray-100 dark:bg-slate-800 opacity-85">
		<a href="https://corepass.net" target="_blank" class="flex items-center gap-2" rel="noreferrer">
			<img src="/icons/corepass.svg" alt="CorePass" class="h-8 w-auto">
			<h1 class="text-2xl font-bold text-black dark:text-white">CorePass</h1>
		</a>
		{#if deviceSherlock.isIos}
			<a
				href="https://apps.apple.com/us/app/corepass-id/id1644928641"
				rel="noopener noreferrer"
				target="_blank"
				class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
			>
				<span class="max-sm:hidden min-sm:block">Download for iOS</span>
				<span class="max-sm:block min-sm:hidden">Download</span>
			</a>
		{:else if deviceSherlock.isAndroid}
			<a
				href="https://play.google.com/store/apps/details?id=net.corepass.app"
				rel="noopener noreferrer"
				target="_blank"
				class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
			>
				<span class="max-sm:hidden min-sm:block">Download for Android</span>
				<span class="max-sm:block min-sm:hidden">Download</span>
			</a>
		{/if}
	</header>

	<main class="flex-1 p-8 w-full max-w-4xl mx-auto">
		<div class="relative bg-white dark:bg-slate-800 px-6 pt-4 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg sm:px-10 max-w-xs">
			<div class="mx-auto max-w-md">
				<slot />
			</div>
		</div>
	</main>

	<footer class="w-full p-2 text-center text-xs text-slate-500 dark:text-slate-400">
		<div class="container mx-auto">
			<a href="https://github.com/CorePass/coreid-link" target="_blank" rel="noreferrer">
				Open-Source code
			</a> licensed under the
			<a href="https://github.com/bchainhub/core-license/blob/master/LICENSE" target="_blank" rel="noreferrer">
				Core License
			</a>.
		</div>
	</footer>
</article>
