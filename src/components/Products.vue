<template>
	<div class="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-6 relative">
		<div class="lg:col-span-4" v-if="products[0]">
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  			<template v-for="product in products">
		      <a :href="`${link}details/${product.slug}`" class="group bg-white dark:bg-stone-800 shadow-md relative">
		        <div class="w-full bg-gray-200 dark:bg-stone-800 rounded-t-lg overflow-hidden">
		          <img :src="`${url}assets/${product.images[0].directus_files_id}`" class="w-full object-center object-cover group-hover:opacity-75" @contextmenu.prevent>
		        </div>
		        <h3 class="mt-1 p-1 text-lg capitalize text-center dark:text-white">
		        	{{product.name}}
		        </h3>
		      </a>
  			</template>
			</div>
		</div>
		<div class="lg:col-span-4 grid" v-else>
			<span class="font-bold text-lg dark:text-white">
				Sorry there are no products found in this category
			</span>
			<a :href="`${saleLink}category/${lcategory}`">
        <p class="underline text-stone-900 dark:text-white mt-4 text-center">
          View similar medical items for sale
        </p>
      </a>
		</div>
		<div class="grid grid-cols-1 lg:col-span-2 p-1">
			<ol>
				<span class="text-lg font-bold text-center">Categories</span>
				<li :class="`py-3 text-lg ml-1 hover:text-doktarie-blue ${products[0].category.name == category.name ? 'text-green-600' : ''}`" v-for="category in categories">
					<a :href="`${link}category/${category.slug}`">
						> {{category.name}}
					</a>
				</li>
			</ol>
		</div>
  </div>
</template>

<script>
export default{
	props:{
		type: String,
		categories: Object | Array,
		products: Object | Array,
		url: String,
		lcategory:String
	},
	data(){
		return{
			link:"",
			saleLink:""
		}
	},
	created(){
		if(this.type === 'hire'){
			this.link = '/equipment/for-hire/'
			this.saleLink = '/equipment/for-sale/'
		}else{
			this.link = '/equipment/for-sale/'
			this.saleLink = '/equipment/for-hire/'
		}
	}
}
</script>
