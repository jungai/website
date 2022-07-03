export type TRoute = {
	name: string;
	basePath: string;
	child: (Omit<TRoute, 'child' | 'basePath'> & { path: string })[];
};

export type TConfig = {
	title: string;
	routes: TRoute[];
};
