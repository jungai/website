import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import Seo from '@/components/Seo';
import dynamic from 'next/dynamic';
import { isString } from '@/utils/is_string';
import { getPostBySlug, getPostsSlug, RenderMdxWithRemoteResult } from '@/utils/api';
import Loading from '@/components/Loading';

interface InitialProps {
	post: RenderMdxWithRemoteResult;
}

const LayoutBlog = dynamic(() => import('@/layouts/blog'), {
	loading: () => <Loading />,
});

export const PostPage: FC<InitialProps> = ({ post }) => {
	const content = hydrate(post.mdx);

	return (
		<>
			<Seo
				title={post.data.title}
				openGraph={{
					url: `https://wwww.juver.xyz/blogs/${post.data.name}`,
					title: post.data.title,
					site_name: 'jungai',
				}}
			/>
			<LayoutBlog meta={post.data}>{content}</LayoutBlog>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug;

	// not found case
	if (!isString(slug)) {
		return {
			notFound: true,
		};
	}

	const post = await getPostBySlug(slug);

	return {
		props: { post },
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const postSlug = getPostsSlug();

	const paths = postSlug.map((post) => ({
		params: { slug: post.replace(/\.mdx$/, '') },
	}));

	return {
		paths,
		fallback: false,
	};
};

export default PostPage;
