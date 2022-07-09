<template>
	<div :class="`grid grid-cols-1 md:grid-cols-${testimonial_videos.length} gap-7 mt-4`" v-if="testimonial_videos[0]">
    <div class="bg-white p-2 shadow-md rounded-md" v-for="video in testimonial_videos">
      <video class="w-full h-44" controls :poster="`${url}assets/${video.poster}`">
         <source :src="`${url}assets/${video.video}`" type='video/mp4' />
      </video>
    </div>
  </div>
</template>

<script>
export default{
	props:{
		testimonial_videos: Array | Object,
		url: String
	}
}
</script>
