<template>
	<div>
		Test component

		<p @click="routePage">Route to new Tab</p>
	</div>
</template>

<script>
	import { v4 as uuidV4 } from "uuid"
	export default {
		methods: {
			routePage() {
				this.$router.push({ name: "test", params: { key: uuidV4() } })
			},
		},
	}
</script>

<style lang="scss" scoped></style>
