<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import ShareBar from '../components/share-bar/share-bar.vue';

	export default {
		components: { PageHeader, ShareBar }
	};
</script>

<template>
	<body>
		<page-header />

		Blog post
		<share-bar />
	</body>
</template>
