<template>
  <div class="ci-image" v-bind:style="viweStyle" v-on:click="onClick">
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
      default: 'aspect-fill'    // aspect-fill, aspect-fit, auto-height, auto-width
    },

    width: {
      type: [Number, String],
      default: 100
    },

    height: {
      type: [Number, String],
      default: 100
    },

    border: {
      type: [Number, String],
      default: 0
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

      myWidth: this.width,
      myHeight: this.height,

      imageWidth: 0,
      imageHeight: 0,
      imageLeft: 0,
      imageTop: 0,
      imageRatio: 1
    }
  },

  watch: {
    src(val, oldVal) {
      if (val != oldVal && !this.isLazy) {
        this.status = this.STATUS.WILL_LOAD
        this.loadImage(val)
      }
    },

    width(val, oldVal) {
      if (val != oldVal) {
        this.myWidth = val
      }
    },

    height(val, oldVal) {
      if (val != oldVal) {
        this.myHeight = val
      }
    }
  },

  computed: {
    viweStyle() {
      return {
        position: 'release',
        overflow: 'hidden',
        width: this.myWidth + 'px',
        height: this.myHeight + 'px',
        'border-style': 'solid',
        'border-width': this.border + 'px',
        'border-radius': this.radius + 'px'
      }
    },

    imageStyle() {
      return {
        'width': this.imageWidth + 'px',
        'height': this.imageHeight + 'px',
        'margin-left': this.imageLeft - this.border + 'px',
        'margin-top': this.imageTop - this.border + 'px',
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

      this.status = this.STATUS.ON_LOAD

      let image = new Image()

      image.onload = (evt) => {
        window.removeEventListener('scroll', this.windowScrollHandler)
        this.imageRatio = image.width / image.height
        this.resetImage()
        this.status = this.STATUS.DID_LOAD
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
      else if (this.mode === 'aspect-fit') {
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
      else if (this.mode === 'auto-height') {
        this.imageWidth = this.width
        this.imageHeight = parseInt(this.imageWidth / this.imageRatio)
        this.myHeight = parseInt(this.width / this.imageRatio)
      }
      else if (this.mode === 'auto-width') {
        this.imageHeight = this.height
        this.imageWidth = parseInt(this.imageHeight * this.imageRatio)
        this.myWidth = parseInt(this.height * this.imageRatio)
      }
    },

    onClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
