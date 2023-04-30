<template>
	<router-view v-slot="{ Component }">
		<transition name="fade">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
	export default {
		name: 'App',

		mounted(){
			this.$router.push('/rhea/home')
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from, .fade-leave-to {
		opacity: 0;
	}

</style>