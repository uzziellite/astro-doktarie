<template>
	<div class="my-2" v-if="related[0]">
    <h2 class="text-2xl text-stone-800 dark:text-white capitalize font-semibold text-center my-3">
      Related Products
    </h2>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 p-2 gap-4" v-if="related[0]">
    <template v-for="product in related">
      <a :href="`${link}details/${product.slug}`" class="group bg-white dark:bg-stone-800 shadow-md relative">
        <div class="w-full bg-gray-200 dark:bg-stone-800 rounded-t-lg overflow-hidden">
          <img :src="`${url}assets/${product.images[0].directus_files_id}`" class="w-full object-center object-cover group-hover:opacity-75" @contextmenu.prevent>
        </div>
        <h3 class="mt-1 p-1 capitalize text-center text-lg">
          {{product.name}}
        </h3>
      </a>
    </template>
  </div>
</template>

<script>
export default{
	props:{
		type: String,
		url: String,
		related: Array | Object
	},
	data(){
		return{
			link:"",
		}
	},
	created(){
		if(this.type === 'hire'){
			this.link = '/equipment/for-hire/'
		}else{
			this.link = '/equipment/for-sale/'
		}
	}
}
</script>