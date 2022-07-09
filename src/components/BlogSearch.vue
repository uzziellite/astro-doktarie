<template>
	<div class="container mx-auto" v-if="!showModal">
  	<div class="grid grid-cols-3 gap-6 p-2">
      <div class="col-span-3">
        <label for="company-website" class="block font-semibold text-stone-700 dark:text-white uppercase">
          Find an Article
        </label>
        <div class="mt-1 flex rounded-md shadow-sm" @click="showModal = ! showModal">
          <input type="text" class="flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 dark:bg-stone-800 cursor-pointer" placeholder="Search..." disabled>
          <span class="inline-flex items-center px-6 rounded-r-md border border-l-0 border-gray-300 bg-doktarie-blue text-white text-sm cursor-pointer">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </span>
        </div>
      </div>
    </div>
  </div>
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-else>
	  <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
	  <div class="fixed z-10 inset-0 overflow-y-auto">
	    <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
	      <div class="relative bg-white dark:bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-xl sm:w-full">
	        <div class="bg-white dark:bg-black pt-5 pb-4">
	          <form @submit.prevent="searchForPost">
					    <div class="grid grid-cols-3 gap-6 p-2">
					      <div class="col-span-3">
					        <label for="company-website" class="block font-semibold text-stone-700 dark:text-white uppercase">
					          Find an Article
					        </label>
					        <div class="mt-1 flex rounded-md shadow-sm">
					          <input type="text" class="flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 dark:bg-stone-800" placeholder="Search..." v-model="search">
					          <span class="inline-flex items-center px-6 rounded-r-md border border-l-0 border-gray-300 bg-doktarie-blue text-white text-sm cursor-pointer" @click="searchForPost">
					            <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="searching"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
					            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-else><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					          </span>
					        </div>
					      </div>
					    </div>
				  	</form>
				  	<div class="relative grid gap-2 bg-white dark:bg-stone-800 p-1 lg:p-2" v-if="data[0]">
              <a :href="`/blog/${item.slug}`" v-for="item in data" :key="item.id" class="text-stone-800 dark:text-white font-semibold px-3 py-2 flex items-center capitalize bg-stone-200 dark:bg-stone-600">
                {{item.blog_title}}
              </a>
            </div>
            <div class="relative grid gap-2 bg-white dark:bg-stone-800 p-1 lg:p-2" v-else>
            	<p class="text-sm">
            		There are no search results
            	</p>
            </div>
	        </div>
	        <div class="bg-gray-50 dark:bg-stone-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
	          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="showModal = ! showModal">Exit</button>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
export default{
	props:{
		url: String
	},
	data(){
		return{
			showModal:false,
			search:"",
			searching:false,
			data:[]
		}
	},
	methods:{
		searchForPost(){
			this.searching = true
			
			//The HTTP Verb SEARCH is still not implemented by the hosting
			//provider. So use get in the meantime
			/*const params = {
				filter:{
					"_and":[
						{
							"status":{
								"_eq":"published"
							}
						},
						{
							"category":{
								"_contains":"blog"
							}
						}
					]
				},
				search: this.search,
				limit: 3,
				sort:"-date_created"
			}*/

			//const filters = encodeURI( JSON.stringify(params) )

			fetch(`${this.url}items/blog?filter=%7B%22_and%22:[%7B%22status%22:%7B%22_eq%22:%22published%22%7D%7D,%7B%22category%22:%7B%22_contains%22:%22blog%22%7D%7D]%7D&limit=12&search=${this.search}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
      	return response.json()
      }).then(resp => {
				this.data = resp.data
				this.searching = false
			}).catch(err => {
				this.searching = false
				console.error(err)
			})
		}
	}
}
</script>
