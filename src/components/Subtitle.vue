<template>
	<p class="my-4 lg:my-8 text-lg md:text-2xl md:text-center text-stone-800 dark:text-white">
    {{text}}
  </p>
</template>

<script>
export default{
	props:{
		text: String
	}
}
</script>
