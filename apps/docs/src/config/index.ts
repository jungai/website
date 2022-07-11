import type { TConfig } from '$types';

// insert here
const config: TConfig = {
	title: 'Jungai Docs',
	routes: [
		{
			name: 'Tools',
			child: [
				{ name: 'Pnpm', path: '/docs/pnpm' },
				{ name: 'Vitest', path: '/docs/vitest' }
			]
		},
		{
			name: 'Frontend',
			child: [
				{ name: 'Vue 101', path: '/docs/vue101' },
				{ name: 'React 101', path: '/docs/react101' }
			]
		},
		{
			name: 'Backend',
			child: [{ name: 'Nestjs', path: '/docs/nest101' }]
		}
	]
};

export { config };
export default config;
