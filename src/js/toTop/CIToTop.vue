<template>
  <div v-if="isShow" v-bind:class="ns + 'to-top'"
    v-on:click="onClick">
    <slot>
      <i class="fa fa-chevron-up"></i>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ci-to-top',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    duration: {
      type: [Number, String],
      default: 1000 / 36
    }
  },

  data() {
    return {
      isShow: false
    }
  },

  mounted() {
    const that = this
    const screenHeight = window.screen.height

    window.addEventListener('scroll', function (evt) {
      if (window.scrollY > screenHeight) {
        that.isShow = true
      }
      else {
        that.isShow = false
      }
    })
  },

  methods: {
    onClick() {
      this.scrollToTop()
    },

    scrollToTop() {
      const that = this
      let top = window.scrollY

      this.timer = setTimeout(function () {
        window.scrollTo(0, top * 0.75)
        if (top > 0) {
          that.scrollToTop()
        }
        else {
          clearTimeout(that.timer)
          that.isShow = false
        }
      }, this.duration)
    }
  }
}
</script>
