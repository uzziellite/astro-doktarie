<template>
	<div class="bg-cover h-96 md:h-138 relative" :style="`background-image:url(${images[index]})`">
  	<div class="h-full bg-black bg-opacity-50"></div>
    <svg @click="loadPrevBanner" class="hidden md:flex w-12 h-12 absolute left-2 text-white cursor-pointer z-10" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    <svg @click="loadNextBanner" class="hidden md:flex w-12 h-12 absolute right-2 text-white cursor-pointer z-10" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  	<div class="absolute top-12 md:top-36 grid gap-6 px-2 pt-12 sm:top-32 text-white overflow-x-hidden w-full">
  		<div class="bg-white p-2 md:p-12 shadow-md bg-opacity-10 rounded-lg w-full">
  			<template v-for="(a,b) in titles">
	    		<h1 :class="`text-xl md:text-3xl lg:text-5xl uppercase font-bold md:text-center ${b == index ? '' : 'hidden'}`">
	    			{{ titles[index] }}
	    		</h1>
  			</template>
  			<template v-for="(c,d) in texts">
	    		<p :class="`text-lg md:text-2xl mt-6 animate-text-left md:text-center ${d == index ? '' : 'hidden'}`">
	    			{{ texts[index] }}
	    		</p>
  			</template>
    		<div class="grid place-items-center">
          <a href="#form" class="mt-2 bg-doktarie-blue text-white p-2 font-semibold shadow-md rounded-full px-4 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 capitalize" v-if="index == 0">
		    		Book Appointment
          </a>
          <a href="/equipment/for-sale" v-if="index == 1" class="mt-2 bg-doktarie-blue text-white p-2 font-semibold shadow-md rounded-full px-4 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 capitalize">
            View Equipment
          </a>
          <a href="https://facilities.doktarie.com" v-if="index == 2" class="mt-2 bg-doktarie-blue text-white p-2 font-semibold shadow-md rounded-full px-4 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 capitalize">
            Find A Hospital
          </a>
    		</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default{
	data(){
		return{
			images:[
				`${import.meta.env.PUBLIC_CMS}assets/71469ea4-53ad-4f71-a15d-ba556f90a448`,
				`${import.meta.env.PUBLIC_CMS}assets/ce91f640-9494-4df5-8fad-7a722801f322`,
        `${import.meta.env.PUBLIC_CMS}assets/667b630a-dac5-4704-a9ed-37f7e25d1959`
			],
			titles:[
				'The best home based care services',
				'Medical equipment available',
        'Find Medical Facilities From Anywhere'
			],
			texts:[
				'We offer professional home based care services to all our clients',
				'We also stock medical equipment for hire and for sale.',
        'We enable you to find medical facilities from all over Kenya with ease.'
			],
			index:0,
		}
	},
	methods:{
		loadNextBanner(){
      const max = 2
      const nindex = this.index + 1
      if(nindex > max){
        this.index = 0
      }else{
        this.index += 1
      }
    },
    loadPrevBanner(){
      const min = 0
      const nindex = this.index - 1
      if(nindex < min){
        this.index = 2
      }else{
        this.index -= 1
      }
    }
	}
}
</script>

<style>
.animate-text-left {
  animation-duration: 2s;
  animation-name: slideleft;
  animation-timing-function: linear;
}

@keyframes slideleft {
  from {
    margin-right: -50%;
  }

  to {
    margin-left: 0%;
  }
}
</style>
