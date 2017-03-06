<template>
  <div v-if="isShow" v-bind:class="ns + 'to-top'"
    v-on:click="onClick">
    <slot>
      <i class="iconfont icon-top"></i>
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
    this.check()
    window.addEventListener('scroll', (evt) => {
      this.check()
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
      let top = window.scrollY

      this.timer = setTimeout(() => {
        window.scrollTo(0, top * 0.75)
        if (top > 0) {
          this.scrollToTop()
        }
        else {
          clearTimeout(this.timer)
          this.isShow = false
        }
      }, this.duration)
    }
  }
}
</script>
