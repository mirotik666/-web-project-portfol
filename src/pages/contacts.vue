<script>
	import PageHeader from '../components/page-header/page-header.vue';
	import TopBar from '../components/top-bar/top-bar.vue';
	import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
	// import MapGoogle from '../components/map-google/map-google.vue';
	import FormFeedback from '../components/form-feedback/form-feedback.vue';
	import AddressInfo from '../components/address-info/address-info.vue';
	import PageFooter from '../components/page-footer/page-footer.vue';


	export default {
		components: {
			PageHeader,
			TopBar,
			ContentWrapper,
			// MapGoogle,
			FormFeedback,
			AddressInfo,
			PageFooter
		}
	};
</script>

<template>
	<body>

		<page-header />

		<top-bar>
			<h1 class="naiming-top-bar">Contact us</h1>
		</top-bar>

		<content-wrapper>
			<div class="page-contacts-paragraph">
				<p>Etiam tincidunt laoreet turpis a vulputate. Etiam diam lorem, convallis ac laoreet a, pretium id nisl. Morbi tincidunt nibh a ante fringilla at tincidunt eros venenatis. Nunc a dui mi, in imperdiet sem. Aenean eu nulla massa. Ut interdum tristique est commodo pharetra.</p>
			</div>
			<div class="address-content">
				<span class="contacts-h">Address</span>
				<address-info class="page-contacts-address"></address-info>
			</div>
			<span class="form-h">Send inquiry</span>
			<form-feedback class="contacts-form"></form-feedback>
		</content-wrapper>

		<page-footer/>
	</body>
</template>
