import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		coreid: params.coreid
	};
}) satisfies PageLoad;
