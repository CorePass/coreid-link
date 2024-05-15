<script lang="ts">
	const imgInfo = `https://og.tailgraph.com/og?fontFamily=Abel&title=Connect%20to%20Core%20ID%20via%20CorePass&titleTailwind=font-bold%20text-4xl%20text-blue-900&titleFontFamily=Poppins&text=Append%20Core%20ID%20after%20the%20URL's%20final%20slash.&textTailwind=mt-4%20text-4xl%20text-blue-900%20font-semibold&textFontFamily=Dosis&bgTailwind=bg-blue-400`;
</script>

<svelte:head>
	<title>Core ID</title>
	<meta name="description" content="Create a Core ID connector." />
	<meta property="og:title" content="Core ID" />
	<meta property="og:description" content="Create a Core ID connector." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={imgInfo} />
	<meta name="twitter:title" content="Core ID" />
	<meta name="twitter:description" content="Create a Core ID connector." />
	<meta name="twitter:image" content={imgInfo} />
</svelte:head>

<div class="divide-y divide-gray-300/50">
	<h1 class="text-2xl font-bold pb-4 text-black dark:text-white">Core ID</h1>
	<div class="pt-4 text-slate-500 dark:text-slate-400">
		<p>To create a Core ID connector, simply format your URL as follows: <kbd>https://coreid.link/cb00…</kbd>, replacing "cb00…" with your valid Core ID address.</p>
	</div>
</div>
