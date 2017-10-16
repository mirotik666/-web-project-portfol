<script>
import PageHeader from '../components/page-header/page-header.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import TopBar from '../components/top-bar/top-bar.vue';
import PaginationMenu from '../components/pagination-menu/pagination-menu.vue';
import TilesGrid from '../components/tiles-grid/tiles-grid.vue';
import TileSmall from '../components/tile-small/tile-small.vue';


export default{
	components: {
		PageHeader,
		PageFooter,
		ContentWrapper,
		TagItem,
		TopBar,
		PaginationMenu,
		TilesGrid,
		TileSmall
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
				<tile-small text="1 small tile"> </tile-small>
				<tile-small text="2 small tile"> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>
				<tile-small> </tile-small>


			</tiles-grid>


			<pagination-menu class="pagination-portfolio"> </pagination-menu>
		</content-wrapper>

		<page-footer></page-footer>
	</body>
</template>
