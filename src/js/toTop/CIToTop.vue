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

    this.check()
    window.addEventListener('scroll', function (evt) {
      that.check()
    })
  },

  methods: {
    onClick() {
      this.scrollToTop()
    },

    check() {
      if (window.scrollY > window.screen.height) {
        this.isShow = true
      }
      else {
        this.isShow = false
      }
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
