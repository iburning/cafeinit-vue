<template>
  <div v-bind:class="ns + 'sticky-holder'"><slot></slot></div>
</template>

<script>
export default {
  name: 'ci-sticky',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    }
  },

  data() {
    return {
      isFixed: false
    }
  },

  mounted() {
    const that = this
    const top = this.$el.offsetTop

    window.addEventListener('scroll', function (evt) {
      if (window.scrollY >= top) {
        that.setSticky()
      }
      else {
        that.unsetSticky()
      }
    })
  },

  methods: {
    setSticky() {
      if (this.isFixed) {
        return
      }
      else {
        this.isFixed = true
      }

      let className = this.$el.className
      if (className) {
        this.$el.className = className + ' ' + 'ci-sticky'
      }
      else {
        this.$el.className = 'ci-sticky'
      }

      this.$emit('sticky')
    },

    unsetSticky() {
      if (!this.isFixed) {
        return
      }
      else {
        this.isFixed = false
      }

      let classNames = this.$el.className.split(' ')
      classNames.splice(classNames.indexOf('ci-sticky'), 1)
      this.$el.className = classNames.join(' ')
      this.$emit('unsticky')
    }
  }
}
</script>


<style>
.ci-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
