<template>
	<form @submit.prevent="contact">
  	<h2 class="text-2xl text-stone-800 dark:text-white capitalize font-semibold md:text-center">
      Leave us a message
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
        <input type="text" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="Please enter your name" v-model="form.name">
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
        <input type="text" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="0712345678" v-model="form.phone">
      </div>
      <div class="relative w-full mt-2">
        <label
          class="block uppercase text-xs font-bold mb-2"
          htmlFor="email"
        >
          Email
          <span class="text-red-600">
            * (Required)
          </span>
        </label>
        <input type="email" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="someone@example.com" v-model="form.email">
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
        <textarea class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required v-model="form.message" placeholder="Type your message here"></textarea>
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
</template>

<script>
export default{
	props:{
		url:String
	},
	data(){
		return{
			form: {},
			response:'',
			response_type:false,
			loading:false,
      contacted:false
		}
	},
  methods:{
    contact(){
      this.loading = true

      const data = {
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        message: this.form.message
      }

      fetch(`${this.url}items/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
        this.loading = false
        this.response_type = true
        this.response = "Message received. We will contact you soon"
        this.contacted = true
      }).catch(() => {
        this.loading = false
        this.response_type = false
        this.response = "Unable to send message at this instance"
        this.contacted = false
      })
    }
  }
}
</script>
