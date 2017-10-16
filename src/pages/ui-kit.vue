<script>
import PageHeader from '../components/page-header/page-header.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import SearchBox from '../components/search-box/search-box.vue';
import ButtonControl from '../components/button-control/button-control.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import TileSmall from '../components/tile-small/tile-small.vue';
import TileMedium from '../components/tile-medium/tile-medium.vue';
import TileLarge from '../components/tile-large/tile-large.vue';
import LinkExternal from '../components/link-external/link-external.vue';
import BreadcrumbsNavigation from '../components/breadcrumbs-navigation/breadcrumbs-navigation.vue';
import TopBar from '../components/top-bar/top-bar.vue';
import ListCross from '../components/list-cross/list-cross.vue';
import ListArrow from '../components/list-arrow/list-arrow.vue';
import ListCheck from '../components/list-check/list-check.vue';
import ListUnordered from '../components/list-unordered/list-unordered.vue';
import BlogSideBar from '../components/blog-side-bar/blog-side-bar.vue';
import TeaserItem from '../components/teaser-item/teaser-item.vue';
import MotivationInfo from '../components/motivation-info/motivation-info.vue';
import DataTable from '../components/data-table/data-table.vue';
import FeedbackQuote from '../components/feedback-quote/feedback-quote.vue';
import BlogPostHeader from '../components/blog-post-header/blog-post-header.vue';
import AddressInfo from '../components/address-info/address-info.vue';
import FeatureItem from '../components/feature-item/feature-item.vue';
import BlogPost from '../components/blog-post/blog-post.vue';
import ExpandableBox from '../components/expandable-box/expandable-box.vue';
import FormFeedback from '../components/form-feedback/form-feedback.vue';
import FeatureList from '../components/feature-list/feature-list.vue';
import AccordionList from '../components/accordion-list/accordion-list.vue';
import ProgressSemiRadial from '../components/progress-semi-radial/progress-semi-radial.vue';
import MapGoogle from '../components/map-google/map-google.vue';


export default {
	components: {
		PageHeader,
		TagItem,
		SearchBox,
		ButtonControl,
		ContentWrapper,
		PageFooter,
		TileSmall,
		TileMedium,
		TileLarge,
		LinkExternal,
		BreadcrumbsNavigation,
		TopBar,
		ListCross,
		ListArrow,
		ListCheck,
		ListUnordered,
		BlogSideBar,
		TeaserItem,
		MotivationInfo,
		FeedbackQuote,
		BlogPostHeader,
		DataTable,
		AddressInfo,
		FeatureItem,
		BlogPost,
		ExpandableBox,
		FormFeedback,
		FeatureList,
		AccordionList,
		ProgressSemiRadial,
		MapGoogle
	}
};
</script>

<template>
	<body>

		<page-header></page-header>
		<top-bar> <h1 class="naiming-top-bar"> Examples</h1> </top-bar>
		<content-wrapper>

			UI Kit

			<breadcrumbs-navigation/>

			<address-info></address-info>
			<search-box></search-box>
			<accordion-list></accordion-list>
			<tag-item>All</tag-item>
			<tag-item>Web design</tag-item>
			<tag-item>Logo design</tag-item>
			<tag-item>Photography</tag-item>
			<tag-item>Wordpress</tag-item>

			<a href="">Open Sans</a>
			<blockquote>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque.Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. </blockquote>

			<LinkExternal></LinkExternal>
			</br>
			</content-wrapper>
				<motivation-info></motivation-info>
			<content-wrapper>
			<expandable-box></expandable-box>
			</br>
			<button-control></button-control>
			<tile-small>
				expandable-box
			</tile-small>
			<feedback-quote/>

			<tabs></tabs>

			<tile-small>

			</tile-small>

			<tile-medium></tile-medium>
			<tabs></tabs>

			<list-cross></list-cross>

			<list-arrow></list-arrow>

			<list-check></list-check>

			<list-unordered></list-unordered>

			<teaser-item> </teaser-item>
			<br>
			<blog-side-bar></blog-side-bar>

			<data-table></data-table>

			<blog-post-header> </blog-post-header>

			<h4>Feature List</h4>

			<feature-list>

			</feature-list>

			<h4>BLOG POST </h4>
			<blog-post/>
			<form-feedback />

			<h4>Progress Bar</h4>
			<progress-semi-radial value='40'>Suspendisse
			</progress-semi-radial>
			<progress-semi-radial value='70'>Maecenas
			</progress-semi-radial>
			<progress-semi-radial value='0'>Aliquam
			</progress-semi-radial>
			<progress-semi-radial value='100'>Habitasse
			</progress-semi-radial>
			
			<h4>Google Map</h4>
			<map-google> </map-google>

			<h1>Example of h1 </h1>
			<h2>Example of h2 </h2>
			<h3>Example of h3 </h3>
			<h4>Example of h4 </h4>
			
		</content-wrapper>

		<page-footer></page-footer>

	</body>
</template>