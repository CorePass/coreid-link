<script>
	import "../app.css";
	import { deviceSherlock } from 'device-sherlock';
</script>

<article class="flex min-h-screen flex-col justify-between text-slate-900 dark:text-slate-100">
	<header
		class="flex w-full items-center justify-between border-b border-white/10 bg-slate-950/40 px-4 py-3 backdrop-blur-md sm:px-6"
	>
		<a
			href="https://corepass.net"
			target="_blank"
			class="flex items-center gap-2.5"
			rel="noreferrer"
		>
			<img src="/icons/corepass.svg" alt="" class="h-7 w-auto" width="28" height="28" />
			<span class="text-base font-semibold tracking-tight text-white">CorePass</span>
		</a>
		{#if deviceSherlock.isIos}
			<a
				href="https://apps.apple.com/us/app/corepass-id/id1644928641"
				rel="noopener noreferrer"
				target="_blank"
				class="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/30 transition hover:bg-blue-500 hover:brightness-110 hover:shadow-md hover:shadow-blue-500/30"
			>
				<span class="max-sm:hidden min-sm:block">Download for iOS</span>
				<span class="max-sm:block min-sm:hidden">Download</span>
			</a>
		{:else if deviceSherlock.isAndroid}
			<a
				href="https://play.google.com/store/apps/details?id=net.corepass.app"
				rel="noopener noreferrer"
				target="_blank"
				class="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/30 transition hover:bg-blue-500 hover:brightness-110 hover:shadow-md hover:shadow-blue-500/30"
			>
				<span class="max-sm:hidden min-sm:block">Download for Android</span>
				<span class="max-sm:block min-sm:hidden">Download</span>
			</a>
		{/if}
	</header>

	<main class="flex w-full flex-1 flex-col items-center justify-center px-4 py-10 sm:px-6">
		<div
			class="w-full max-w-md rounded-2xl border border-white/10 bg-white/95 px-6 py-8 shadow-2xl shadow-black/40 ring-1 ring-slate-900/5 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/90 dark:ring-white/10 sm:px-8"
		>
			<div class="mx-auto w-full max-w-md">
				<slot />
			</div>
		</div>
	</main>

	<footer class="w-full p-3 text-center text-xs text-slate-400 dark:text-slate-500">
		<div class="container mx-auto">
			<a href="https://github.com/CorePass/coreid-link" target="_blank" rel="noreferrer">
				Open-source code
			</a> licensed under the
			<a href="https://github.com/bchainhub/core-license/blob/master/LICENSE" target="_blank" rel="noreferrer">
				Core License
			</a>
		</div>
	</footer>
</article>
