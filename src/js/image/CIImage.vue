<template>
  <div class="ci-image" v-bind:style="{
      position: 'release',
      overflow: 'hidden',
      width: width + 'px',
      height: height + 'px',
      'border-radius': radius + 'px'
    }">
    <img v-bind:src="src" v-bind:style="{
      'margin-left': imageLeft + 'px',
      'margin-top': imageTop + 'px',
      width: imageWidth + 'px',
      height: imageHeight + 'px',
      'border-radius': radius + 'px'
    }" />
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
      type: String,
      default: ''
    }
  },

  data() {
    return {
      imageWidth: 0,
      imageHeight: 0,
      imageLeft: 0,
      imageTop: 0,
      imageRatio: 1
    }
  },

  mounted() {
    this.getImage()
  },

  methods: {
    getImage() {
      var that = this
      var image = new Image()
      image.src = this.src

      image.onload = function () {
        that.imageRatio = image.width / image.height
        that.resetImage()
      }
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
    }
  }
}
</script>
