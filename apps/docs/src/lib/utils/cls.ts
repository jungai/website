export function cls(args: (string | null | undefined)[]) {
	return args.filter(Boolean).join(' ');
}
