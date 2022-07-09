<template>
	<button class="mt-2 bg-doktarie-blue text-white p-2 font-semibold shadow-md rounded-full px-4 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 lg:w-1/3 capitalize">
	  {{text}}
	</button>
</template>

<script>
export default{
	props:{
		text:String
	}
}
</script>
