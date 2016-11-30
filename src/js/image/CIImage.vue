<template>
  <div class="ci-image" v-bind:style="{
      position: 'release',
      overflow: 'hidden',
      width: width + 'px',
      height: height + 'px',
      'border-radius': radius + 'px'
    }"
    v-on:click="onClick">

    <img v-if="status == STATUS.WILL_LOAD || status == STATUS.LOADING" class="ci-image-loading"
      src="data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    <img v-if="status == STATUS.DID_LOAD" v-bind:src="src" v-bind:style="imageStyle" />
  </div>
</template>

<script>
export default {
  name: 'ci-image',

  props: {
    src: String,
    mode: {
      type: String,
      default: 'aspect-fill'
    },

    width: {
      type: [Number, String],
      default: 100
    },

    height: {
      type: [Number, String],
      default: 100
    },

    radius: {
      type: [Number, String],
      default: 0
    },

    isLazy: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      STATUS: {
        WILL_LOAD: 0,
        ON_LOAD: 1,
        DID_LOAD: 2
      },
      status: 0,

      imageWidth: 0,
      imageHeight: 0,
      imageLeft: 0,
      imageTop: 0,
      imageRatio: 1
    }
  },

  computed: {
    imageStyle() {
      return {
        'width': this.imageWidth + 'px',
        'height': this.imageHeight + 'px',
        'margin-left': this.imageLeft + 'px',
        'margin-top': this.imageTop + 'px',
        'border-radius': this.radius + 'px'
      }
    }
  },

  mounted() {
    if (this.isLazy) {
      if (window.scrollY >= this.$el.offsetTop - window.screen.height) {
        this.loadImage(this.src)
      }

      window.addEventListener('scroll', this.windowScrollHandler)
    }
    else {
      this.loadImage(this.src)
    }
  },

  methods: {
    windowScrollHandler(evt) {
      if (window.scrollY >= this.$el.offsetTop - window.screen.height) {
        this.loadImage(this.src)
      }
    },

    loadImage(src) {
      if (this.status == this.STATUS.ON_LOAD
        || this.status == this.STATUS.DID_LOAD) {
        return
      }

      const that = this
      const image = new Image()

      this.status = this.STATUS.ON_LOAD

      console.log('CIImage.loadImage', this.status, src)

      image.onload = function (evt) {
        window.removeEventListener('scroll', this.windowScrollHandler)
        that.imageRatio = image.width / image.height
        that.resetImage()
        that.status = that.STATUS.DID_LOAD
      }

      image.src = src
    },

    resetImage() {
      if (this.mode == 'aspect-fill') {
        if (this.width / this.height > this.imageRatio) {
          this.imageWidth = this.width
          this.imageHeight = parseInt(this.imageWidth / this.imageRatio)
          this.imageTop = -parseInt((this.imageHeight - this.height) / 2)
        }
        else {
          this.imageHeight = this.height
          this.imageWidth = parseInt(this.imageHeight * this.imageRatio)
          this.imageLeft = -parseInt((this.imageWidth - this.width) / 2)
        }
      }
      else if (this.mode == 'aspect-fit') {
        if (this.width / this.height > this.imageRatio) {
          this.imageHeight = this.height
          this.imageWidth = parseInt(this.imageHeight * this.imageRatio)
          this.imageLeft = -parseInt((this.imageWidth - this.width) / 2)
        }
        else {
          this.imageWidth = this.width
          this.imageHeight = parseInt(this.imageWidth / this.imageRatio)
          this.imageTop = -parseInt((this.imageHeight - this.height) / 2)
        }
      }
    },

    onClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
