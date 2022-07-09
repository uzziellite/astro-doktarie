<template>
	<form @submit.prevent="book" class="bg-stone-200 dark:bg-stone-800 p-2 rounded-lg shadow-md">
    <div class="grid md:grid-cols-2 gap-x-4 gap-y-1 p-2 my-4">
      <div class="relative w-full mb-3 mt-8">
        <label
          class="block uppercase text-xs font-bold mb-2"
          htmlFor="Appointment day"
        >
          Appointment Day
          <span class="text-red-600">
            *
          </span>
        </label>
        <input type="date" :min="minDate" class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-stone-300 disabled:opacity-75" v-model="form.appointment_day" required>
      </div>
      <div class="relative w-full mb-3 mt-8">
        <label
          class="block uppercase text-xs font-bold mb-2"
          htmlFor="payment method"
        >
          Full Name
          <span class="text-red-700">
            *
          </span>
        </label>
        <input type="text" class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-stone-300 disabled:opacity-75" v-model="form.name" required>
      </div>
      <div class="relative w-full mb-3 mt-8">
        <label
          class="block uppercase text-xs font-bold mb-2"
          htmlFor="Phone">
          Phone Number
          <span class="text-red-700">
            *
          </span>
        </label>
        <input type="phone" class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-stone-300 disabled:opacity-75" v-model="form.phone" required>
      </div>
      <div class="relative w-full mb-3 mt-8">
        <label
          class="block uppercase text-xs font-bold mb-2"
          htmlFor="Email"
        >
          Email Address
          <span class="text-red-700">
            *
          </span>
        </label>
        <input type="email" class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-stone-300 disabled:opacity-75" v-model="form.email" required>
      </div>
    </div>
    <div class="p-2 flex space-x-2">
      <button class="bg-green-600 text-white p-2 rounded-sm flex space-x-2" v-if="!booked">
        <p class="text-sm lg:text-lg">
          Book appointment
        </p>
      </button>
      <span class="cursor-pointer bg-red-600 p-2 text-sm lg:text-lg text-white" @click="clearForm" v-if="!booked">
        Clear Form
      </span>
      <span class="text-green-600 text-lg" v-if="booked">
      	You have successfully booked an appointment. Please check your email address. Further instructions will be relayed to you.
      </span>
    </div>
  </form>
</template>

<script>
export default{
	props:{
		specialist: Object | Array,
		url: String
	},
	data(){
		return{
			loading:false,
			booked:false,
			form:{},
			minDate: new Date().toJSON().substr(0,10)
		}
	},
	methods:{
		book(){
			this.loading = true
			
			const data = {
				phone: this.form.phone,
				email: this.form.email,
				appointment_day: this.form.appointment_day,
				name: this.form.name,
				specialist_email: this.specialist.details[0].email,
				fees: this.specialist.details[0].fees,
				specialist_phone: this.specialist.details[0].phone,
				specialist_type: this.specialist.details[0].discipline,
				specialist_name: this.specialist.details[0].name,
				reg_no: this.specialist.details[0].registration_number
			}

			fetch(`${this.url}items/booking_specialist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
				this.booked = true
				this.loading = false
			}).catch(err => {
				this.booked = false
				this.loading = false
				console.error(err)
			})
		},
		clearForm(){
			this.form = {}
		}
	}
}
</script>
