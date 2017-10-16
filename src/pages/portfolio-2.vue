<script>
import PageHeader from '../components/page-header/page-header.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import TopBar from '../components/top-bar/top-bar.vue';
import PaginationMenu from '../components/pagination-menu/pagination-menu.vue';
import TilesGrid from '../components/tiles-grid/tiles-grid.vue';
import TileLarge from '../components/tile-large/tile-large.vue';
import ImagePlaceholder from '../components/image-placeholder/image-placeholder.vue';


export default {
	components: {
		PageHeader,
		PageFooter,
		ContentWrapper,
		TagItem,
		TopBar,
		PaginationMenu,
		TilesGrid,
		TileLarge,
		ImagePlaceholder
	}
};
</script>

<template>
	<body>

		<page-header />

		<top-bar>
			<h1 class="naiming-top-bar">Portfolio</h1>
		</top-bar>

    	<content-wrapper>
			<tag-item class="tag-item-portfolio"> </tag-item>

			<tiles-grid>
				<tile-large text="1 large tile">
					<image-placeholder></image-placeholder>
				</tile-large>
				<tile-large text="2 large tile">
					<image-placeholder></image-placeholder>
				</tile-large>
				<tile-large > </tile-large>
				<tile-large> </tile-large>
				<tile-large> </tile-large>
				<tile-large> </tile-large>
				<tile-large> </tile-large>
				<tile-large> </tile-large>
			</tiles-grid>

			<pagination-menu class="pagination-portfolio"> </pagination-menu>


		</content-wrapper>
		<page-footer></page-footer>
	</body>
</template>

