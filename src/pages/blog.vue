<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import PageFooter from '../components/page-footer/page-footer.vue';
	import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
	import TopBar from '../components/top-bar/top-bar.vue';
	import BlogPost from '../components/blog-post/blog-post.vue';
	import ImagePlaceholder from '../components/image-placeholder/image-placeholder.vue';
	import BlogSideBar from '../components/blog-side-bar/blog-side-bar.vue';
	import PaginationMenu from '../components/pagination-menu/pagination-menu.vue';


	export default {
		components: {
			PageHeader,
			TopBar,
			ContentWrapper,
			ImagePlaceholder,
			BlogSideBar,
			BlogPost,
			PaginationMenu,
			PageFooter
		}
	};
</script>

<template>
	<body>
		<page-header />
		<top-bar><h1 class="naiming-top-bar">Blog</h1></top-bar>
			<content-wrapper>
				<blog-post></blog-post>
				<blog-post>
					<slide-show></slide-show>
				</blog-post>
				<blog-post>
					<video-content></video-content>
				</blog-post>
				<blog-post></blog-post>
				<blog-post>
					<audio-content></audio-content>
				</blog-post>
				<blog-side-bar class="blog-side-bar-right"></blog-side-bar>
				<pagination-menu></pagination-menu>
			</content-wrapper>

		<page-footer />
	</body>
</template>
