<template>
  <div v-bind:class="ns + 'sticky-holder'"><slot></slot></div>
</template>

<script>
import CICompnentHelper from '../utils/CICompnentHelper'

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

      CICompnentHelper.addClass(this, this.ns + 'sticky')
      this.$emit('sticky', this)
    },

    unsetSticky() {
      if (!this.isFixed) {
        return
      }
      else {
        this.isFixed = false
      }

      CICompnentHelper.removeClass(this, this.ns + 'sticky')
      this.$emit('unsticky', this)
    }
  }
}
</script>
