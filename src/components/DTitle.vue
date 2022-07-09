<template>
	<h2 class="font-extrabold text-doktarie-blue dark:text-white text-2xl md:text-3xl lg:text-4xl uppercase text-center my-2">
    {{text}}
  </h2>
</template>

<script>
export default{
	props:{
    text: String
  }
}
</script>