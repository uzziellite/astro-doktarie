<template>
	<button @click="bookAppointment(specialist)" class="bg-doktarie-blue text-white px-2 py-1 rounded-full">
		Book Practitioner
	</button>
</template>

<script>
export default{
	props:{
		specialist: String
	},
	methods:{
		bookAppointment(specialist){
			location = `/doctors/book/${this.specialist}`
		}
	}
}
</script>
