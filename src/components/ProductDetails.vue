<template>
	<div class="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-6">
    <div class="lg:col-span-4" v-if="products[0]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <template v-for="product in products">
          <div class="w-full bg-stone-200 dark:bg-stone-800 rounded-t-lg overflow-hidden shadow-sm">
            <img :src="`${url}assets/${product.images[0].directus_files_id}`" class="w-full object-center object-cover" @contextmenu.prevent>
          </div>
        </template>
        <div class="rounded-t-lg shadow-sm bg-stone-100 dark:bg-stone-800 p-2">
          <h3 class="font-semibold capitalize text-2xl">
            {{products[0].name}}
          </h3>
          <p class="text-stone-800 dark:text-white text-lg">
            {{products[0].description}}
          </p>
        </div>
      </div>
      <div class="mt-4 bg-stone-100 dark:bg-stone-800 rounded-t-lg">
        <form @submit.prevent="sendEnquiry">
          <h2 class="text-2xl text-stone-800 dark:text-white capitalize font-semibold md:text-center p-2">
            Send Enquiry
          </h2>
          <div class="grid gap-x-4 gap-y-1 p-2 my-4">
            <div class="relative w-full mt-2">
              <label
                class="block uppercase text-xs font-bold mb-2"
                htmlFor="Name"
              >
                Name
                <span class="text-red-600">
                  * (Required)
                </span>
              </label>
              <input type="text" class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="Please enter your name" v-model="form.name">
            </div>
            <div class="relative w-full mt-2">
              <label
                class="block uppercase text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone number
                <span class="text-red-600">
                  * (Required)
                </span>
              </label>
              <input type="phone" class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="0712345678" v-model="form.phone">
            </div>
            <div class="relative w-full mt-2">
              <label
                class="block uppercase text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email Address
                <span class="text-red-600">
                  * (Required)
                </span>
              </label>
              <input type="email" class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="someone@example.com" v-model="form.email">
            </div>
            <div class="relative w-full mt-2">
              <label
                class="block uppercase text-xs font-bold mb-2"
                htmlFor="date"
              >
                Message
                <span class="text-red-600">
                  * (Required)
                </span>
              </label>
              <textarea class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required v-model="form.message" placeholder="Type your message here"></textarea>
            </div>
            <button class="bg-doktarie-blue text-white p-2 rounded-lg mt-2 flex space-x-2 place-content-center font-semibold" v-if="!contacted">
              <span v-if="!loading">Send Message</span>
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
            <div :class="`mt-2 ${response_type ? 'text-green-600' : 'text-red-600'}`">
              {{response}}
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="lg:col-span-4 grid place-content-center" v-else>
      <span class="font-bold text-lg">
        Sorry there are no medical equipment for {{type}} in this category
      </span>
      <a :href="`${saleLink}category/${category}`">
        <p class="underline text-stone-900 mt-4 text-center">
          View similar medical items for {{ type == 'hire' ? 'sale' : type }}
        </p>
      </a>
    </div>
    <div class="bg-white dark:bg-stone-800 grid grid-cols-1 lg:col-span-2 p-2 rounded-t-lg">
      <ol>
        <span class="text-lg font-bold text-center">Categories</span>
        <li :class="`py-3 ml-1 text-lg hover:text-doktarie-blue ${products[0] && products[0].category.name == category.name ? 'text-green-600' : ''}`" v-for="category in categories">
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
		url: String,
		type: String,
		products: Object | Array,
		categories: Object | Array
	},
	data(){
		return{
			link:"",
			form:{},
			saleLink:"",
      response:"",
      loading:false,
      contacted:false,
      response_type:false,
		}
	},
	methods:{
		sendEnquiry(){
      this.loading = true

      const data = {
        type: this.type,
        name:this.form.name,
        email:this.form.email,
        phone:this.form.phone,
        image:`${this.url}assets/${this.products[0].images[0].directus_files_id}?fit=cover&height=450`,
        equipment:this.products[0].name,
        message:this.form.message
      }

      fetch(`${this.url}items/purchases`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(resp => {
        this.loading = false
        this.contacted = true
        this.response_type = true
        this.response = "We have received your order enquiry. We will be in touch soon"
      }).catch(err => {
        console.error(err)
        this.loading = false
        this.contacted = false
        this.response_type = false
        this.response = "Unable to process your request at the moment"
      })
    }
	},
	created(){
		if(this.type === 'hire'){
			this.link = '/equipment/for-hire/'
			this.saleLink = '/equipment/for-sale'
		}else{
			this.link = '/equipment/for-sale/'
			this.saleLink = '/equipment/for-hire'
		}
	}
}
</script>
