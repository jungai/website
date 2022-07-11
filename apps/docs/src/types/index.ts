export type TRoute = {
	name: string;
	child: (Omit<TRoute, 'child'> & { path: string })[];
};

export type TConfig = {
	title: string;
	routes: TRoute[];
};
