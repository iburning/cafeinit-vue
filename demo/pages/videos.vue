<template>
  <div id="page-videos">
    <ci-video
      v-bind:src="videoSrc"
      v-bind:poster="videoPoster"
      v-bind:width="videoWidth"
      v-bind:height="videoHeight">
    </ci-video>
    <ci-video
      v-bind:src="videoSrc"
      v-bind:poster="videoPoster"
      v-bind:width="videoWidth"
      v-bind:height="videoHeight">
      <span slot="btn-play">PLAY</span>
    </ci-video>
  </div>
</template>

<script>
// import CIVideo from '../components/CIVideo'

export default {
  name: 'page-videos',

  // components: {
  //   'ci-video': CIVideo
  // },

  data() {
    return {
      videoSrc: '/res/ad.mp4',
      videoPoster: 'http://img12.360buyimg.com/cms/jfs/t4087/29/78270449/95294/2bf5e226/583b86e5N5886c370.jpg',
      videoWidth: window.screen.width,
      videoHeight: parseInt(window.screen.width * 2 / 3)
    }
  },

  methods: {
  }
}
</script>
