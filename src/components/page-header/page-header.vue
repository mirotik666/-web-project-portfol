<style src="./page-header.css" />
<script>
import MainLogo from '../main-logo/main-logo.vue';
import MainMenu from '../main-menu/main-menu.vue';
import SearchBox from '../search-box/search-box.vue';
import ContentWrapper from '../content-wrapper/content-wrapper.vue';

export default {
	components: {
		MainLogo,
		MainMenu,
		SearchBox,
		ContentWrapper
	}
};
</script>

<template>
	<header class="page-header">
		<content-wrapper>
			<main-logo class="header-logo"> </main-logo>

			<main-menu class="header-menu"> </main-menu>

			<search-box class="header-search"> </search-box>

		</content-wrapper>
	</header>
</template>
