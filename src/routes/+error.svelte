<script lang="ts">
	export let data: { status: number; error: string };
</script>

<svelte:head>
	<title>Error {data.status}</title>
	<meta name="description" content="An error occurred while processing your request." />
	<meta property="og:title" content={`Error ${data.status}`} />
	<meta property="og:description" content="An error occurred while processing your request." />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content={`Error ${data.status}`} />
	<meta name="twitter:description" content="An error occurred while processing your request." />
</svelte:head>

<div class="space-y-6">
	<h1 class="text-2xl font-bold text-black dark:text-white">
		{#if data.status === 404}
			Page Not Found
		{:else if data.status === 500}
			Technical Issue
		{:else}
			Error {data.status}
		{/if}
	</h1>
	<div class="text-slate-500 dark:text-slate-400">
		{#if data.status === 404}
			<div>This page doesn't exist.</div>
		{:else if data.status === 500}
			<div>
				We're experiencing technical difficulties.
			</div>
			<div>
				Please <a href="https://github.com/CorePass/coreid-link/issues" target="_blank" rel="noindex,nofollow">report this issue</a> and try again later.
			</div>
		{:else}
			<div>{data.error}</div>
		{/if}
		<div>
			<a href="/" class="flex items-center gap-2 text-blue-500 hover:text-blue-600">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
					<polyline points="9 22 9 12 15 12 15 22"/>
				</svg>
				Return Home
			</a>
		</div>
	</div>
</div>
