import type { TConfig } from '$types';

// insert here
const config: TConfig = {
	title: 'Jungai Docs',
	routes: [
		{
			name: 'Tools',
			basePath: '/docs/tools',
			child: [{ name: 'Pnpm', path: '/pnpm' }]
		}
	]
};

export { config };
export default config;
