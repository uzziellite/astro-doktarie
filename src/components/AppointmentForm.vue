<template>
	<form @submit.prevent="book">
    <div class="grid sm:grid-cols-2 gap-2 my-4 lg:max-w-lg">
      <div class="relative">
        <label class="uppercase">Please enter your name</label>
        <input type="text" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="Please enter your name" v-model="form.name">
      </div>
      <div class="relative">
        <label class="uppercase">Please enter your email</label>
        <input type="email" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="someone@example.com" v-model="form.email">
      </div>
      <div class="relative">
        <label class="uppercase">Patient's gender</label>
        <select type="text" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required v-model="form.gender">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="relative">
        <label class="uppercase">Patient's Age</label>
        <input type="number" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="45" v-model="form.age">
      </div>
      <div class="relative">
        <label class="uppercase">Phone</label>
        <input type="phone" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="0712345678" v-model="form.phone">
      </div>
      <div class="relative">
        <label class="uppercase">Location</label>
        <input type="text" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="Nairobi, Westlands" v-model="form.location">
      </div>
      <div class="relative">
        <label class="uppercase">Symptoms</label>
        <textarea class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="Give full details about how you feel" v-model="form.symptoms"></textarea>
      </div>
      <div class="relative">
        <label class="uppercase">Confirm Payment</label>
        <textarea type="text" class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="Payment transaction ID" v-model="form.transaction"></textarea>
      </div>
      <div class="relative">
        <label class="uppercase">Payment Method</label>
        <select class="border-0 px-3 py-3 bg-white dark:bg-stone-800 rounded text-sm shadow-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="Nairobi, Westlands" v-model="form.payment">
          <option>MPESA</option>
          <option>Bank Transfer</option>
          <option>Paypal</option>
        </select>
      </div>
      <button class="bg-doktarie-blue p-2 md:mt-7 rounded-lg mt-2 flex space-x-2 place-content-center font-semibold relative w-full text-white" v-if="!booked">
        <span v-if="!loading">Book</span>
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </button>
      <div :class="`relative mt-2 ${response_type ? '' : 'text-red-300'}`">
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
			form:{},
			booked:false,
			loading:false,
			response:"",
			response_type:false
		}
	},
	methods:{
    book(){
      this.loading = true
    	const data = {
    		name: this.form.name,
    		email: this.form.email,
    		gender: this.form.gender,
    		age: this.form.age,
    		phone: this.form.phone,
    		location: this.form.location,
    		symptoms: this.form.symptoms,
    		transaction: this.form.transaction,
        payment:this.form.payment
    	}

    	fetch(`${this.url}items/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
        this.loading = false
        this.booked = true
        this.response_type = true
        this.response = "We have received your booking request. We will be in touch in less than thirty minutes"
      }).catch(err => {
        console.error(err)
        this.loading = false
        this.booked = false
        this.response_type = false
        this.response = "Unable to place your booking request at the moment. Please try again"
      })
    }
	}
}
</script>
