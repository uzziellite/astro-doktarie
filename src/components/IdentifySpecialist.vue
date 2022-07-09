<template>
	<form @submit.prevent="findSpecialist" class="bg-stone-200 dark:bg-stone-800 p-2 rounded-lg shadow-md">
    <div class="grid md:grid-cols-2 gap-x-4 gap-y-1 p-2 my-4">
      <div class="relative w-full mb-3 mt-8">
        <label
          class="block uppercase text-xs font-bold mb-2"
          htmlFor="County"
        >
          Please Select your county
          <span class="text-red-600">
            *
          </span>
        </label>
        <select class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="form.county" required>
          <option selected disabled>--Select Option--</option>
          <option v-for="county in counties" :key="county.id" :value="county.name">
            {{county.name}}
          </option>
        </select>
      </div>
      <div class="relative w-full mb-3 mt-8">
        <label
          class="block uppercase text-xs font-bold mb-2"
          htmlFor="specialist"
        >
          Please Select Specialist
          <span class="text-red-600">
            *
          </span>
        </label>
        <select class="border-0 px-3 py-3 bg-white dark:bg-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-stone-300 disabled:opacity-75" v-model="form.specialist" required>
          <option selected disabled>--Select Option--</option>
          <template v-for="specialist in specialists" :key="specialist.id">
            <option :value="specialist.name">
              {{specialist.name}}
            </option>
          </template>
        </select>
      </div>
    </div>
    <div class="p-2 flex space-x-2">
      <button class="bg-green-600 text-white p-2 rounded-sm flex space-x-2">
        <p class="text-sm lg:text-lg">
          Find Specialist
        </p>
      </button>
      <span class="cursor-pointer bg-red-600 p-2 text-sm lg:text-lg text-white" @click="clearForm">
        Clear Form
      </span>
    </div>
  </form>
</template>

<script>
export default{
	props:{
		counties: Object | Array,
		specialists: Object | Array
	},
  data(){
    return{
      form:{},
      minDate: new Date().toJSON().substr(0,10)
    }
  },
  methods:{
    clearForm(){
      this.form = {}
    },
    findSpecialist(){
      const payload = `${this.form.county}/${this.form.specialist}`

      location = `/doctors/listing/${payload}`
    }
  }
}
</script>
