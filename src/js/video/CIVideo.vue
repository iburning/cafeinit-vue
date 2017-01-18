<template>
  <div class="ci-video">
    <video v-if="mySrc" ref="myVideo" autoplay="autoplay"
      v-bind:src="mySrc"
      v-bind:preload="preload"
      v-bind:width="width"
      v-bind:height="height"
      v-on:ended="onEnded"
      v-on:error="onError"
      v-on:loadstart="onLoadstart"
      v-on:loadeddata="onLoadeddata"
      v-on:pause="onPause"
      v-on:play="onPlay"
      v-on:playing="onPlaying"
      v-on:progress="onProgress"></video>
    <div class="ci-video-poster" v-else v-bind:style="{
        width: width + 'px',
        height: height + 'px',
        'background-image': 'url(' + poster + ')'
      }"></div>

    <!-- <div class="ci-video-loading" v-if="status === STATUS.ON_LOADING" href="javascript:;" v-on:click="play">
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </div> -->
    <div class="ci-video-play" v-if="status !== STATUS.ON_PLAYING && status !== STATUS.ON_LOADING" v-on:click="play">
      <slot name="btn-play"><i class="fa fa-play-circle-o"></i></slot>
    </div>
    <div class="ci-video-pause" v-if="status === STATUS.ON_PLAYING" href="javascript:;" v-on:click="pause">
      <slot name="btn-pause"><i class="fa fa-pause-circle-o"></i></slot>
    </div>
  </div>
</template>

<script>
// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

export default {
  name: 'ci-video',

  props: {
    src: String,

    poster: {
      type: String,
      default: ''
    },

    width: {
      type: [Number, String],
      default: 300
    },

    height: {
      type: [Number, String],
      default: 200
    },

    radius: {
      type: [Number, String],
      default: 0
    },

    preload: {
      type: String,
      default: 'none'
    },

    controls: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      STATUS: {
        ON_ERROR: 0,
        ON_LOADING: 1,
        ON_PLAYING: 2,
        ON_PAUSE: 3,
        ON_END: 4
      },
      status: 0,
      mySrc: ''
    }
  },

  mounted() {

  },

  methods: {
    play() {
      if (!this.mySrc) {
        this.mySrc = this.src
      }

      setTimeout(() => {
        this.status = this.STATUS.ON_PLAYING
        this.$refs.myVideo.play()
      }, 0)
    },

    pause() {
      this.status = this.STATUS.ON_PAUSE
      this.$refs.myVideo.pause()
    },

    // Sent when loading of the media begins.
    onEnded(evt) {
      console.log('onEnd', evt)
      this.status = this.STATUS.ON_END
      this.mySrc = ''
    },

    // Sent when an error occurs.  The element's error attribute contains more
    // information. See Error handling for details.
    onError(evt) {
      console.log('onError', evt)
      this.status = this.STATUS.ON_ERROR
      this.mySrc = ''
    },

    // Sent when loading of the media begins.
    onLoadstart(evt) {
      console.log('onLoadstart', evt)
    },

    // The first frame of the media has finished loading.
    onLoadeddata(evt) {
      // this.$refs.myVideo.play()
      console.log('onLoadeddata', evt)
    },

    // Sent when playback is paused.
    onPause(evt) {
      console.log('onPause', evt)
      this.status = this.STATUS.ON_PAUSE
    },

    // Sent when playback of the media starts after having been paused; that is,
    // when playback is resumed after a prior pause event.
    onPlay(evt) {
      console.log('onPlay', evt)
    },

    // Sent when the media begins to play (either for the first time, after
    // having been paused, or after ending and then restarting).
    onPlaying(evt) {
      console.log('onPlaying', evt)
      this.status = this.STATUS.ON_PLAYING
    },

    // Sent periodically to inform interested parties of progress downloading the media.
    // Information about the current amount of the media that has been downloaded
    // is available in the media element's buffered attribute.
    onProgress(evt) {
      console.log('onProgress', evt)
      this.status = this.STATUS.ON_LOADING
    }
  }
}
</script>
