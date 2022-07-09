<template>
	<div class="relative min-w-0 break-words bg-white dark:bg-stone-800 w-full shadow-md rounded-lg">
	  <div class="px-4 py-5 grid place-items-center">
	    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-doktarie-blue">
	      <slot></slot>
	    </div>
	    <h6 class="text-xl font-semibold text-center">
	    	{{title}}
	    </h6>
	    <p class="mt-2 mb-4 leading-loose text-center text-lg text-stone-800 dark:text-white">
	      {{text}}
	    </p>
	  </div>
	</div>
</template>

<script>
export default{
	props:{
		title:String,
		text:String
	}
}
</script>
