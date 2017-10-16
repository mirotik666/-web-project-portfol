<script>
import PageHeader from '../components/page-header/page-header.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import TopBar from '../components/top-bar/top-bar.vue';
import PaginationMenu from '../components/pagination-menu/pagination-menu.vue';
import TilesGrid from '../components/tiles-grid/tiles-grid.vue';
import TileMedium from '../components/tile-medium/tile-medium.vue';


export default {
	components: {
		PageHeader,
		PageFooter,
		ContentWrapper,
		TagItem,
		TopBar,
		PaginationMenu,
		TilesGrid,
		TileMedium
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
				<tile-medium text="1 medium tile"> </tile-medium>
				<tile-medium text="2 medium tile"> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
				<tile-medium> </tile-medium>
			</tiles-grid>

			<pagination-menu class="pagination-portfolio"> </pagination-menu>
		</content-wrapper>
		<page-footer></page-footer>
	</body>
</template>
