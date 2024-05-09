<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error {$page.status}</title>
	<meta name="description" content="An error occurred while processing your request." />
	<meta property="og:title" content={`Error ${$page.status}`} />
	<meta property="og:description" content="An error occurred while processing your request." />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content={`Error ${$page.status}`} />
	<meta name="twitter:description" content="An error occurred while processing your request." />
</svelte:head>

<div>
	<h1 class="text-2xl font-bold pb-4 text-black dark:text-white">
		{#if $page.status === 404}
			Page Not Found
		{:else if $page.status === 500}
			We have a problem!
		{:else}
			Error {$page.status}
		{/if}
	</h1>
	<div class="divide-y divide-gray-300/50 text-slate-500 dark:text-slate-400 pb-4">
		{#if $page.status === 404}
			<div class="pb-4">We can't seem to find the page you're looking for.</div>
		{:else if $page.status === 500}
			<div class="pb-4">
				We're having trouble processing your request.
			</div>
			<div class="pb-4">
				Please,
				<a href="https://github.com/CorePass/coreid-link/issues" target="_blank" rel="noindex,nofollow">report the problem</a>
				and try again later.
			</div>
		{:else}
			<div class="pb-4">{$page.error?.message || 'Unexpected error.'}</div>
		{/if}
		<div class="pt-4">
			<a href="/">Go back home.</a>
		</div>
	</div>
</div>
