<template>
<div v-bind:class="{
    'am-offcanvas': true,
    'am-active': isActive
  }"
  v-on:click="onClick">
  <div v-bind:class="{
    'am-offcanvas-bar': true,
    'am-offcanvas-bar-active': isActive
  }">
    <div class="am-offcanvas-content">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ci-offcanvas',

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isActive: this.value,
      body: document.getElementsByTagName('body')[0]
    }
  },

  watch: {
    value(val) {
      this.isActive = val
    },

    isActive(val) {
      let className = this.body.className
      if (val) {
        if (className) {
          this.body.className += ' am-offcanvas-page'
        }
        else {
          this.body.className += 'am-offcanvas-page'
        }
      }
      else {
        this.body.className = className.replace('am-offcanvas-page', '')
      }
    }
  },

  // mounted() {
  //
  // },

  methods: {
    onClick(evt) {
      // console.log('onClick')
      this.isActive = false
      this.$emit('input', this.isActive)
    }
  }
}
</script>
