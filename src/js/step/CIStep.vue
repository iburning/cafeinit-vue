<template>
  <div v-bind:class="`${ns}step`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ci-step',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    current: {
      type: Number,
      default: 0
    }
  },

  watch: {
    current(val) {
      this.modifyChildren()
    }
  },

  mounted() {
    this.modifyChildren()
  },

  methods: {
    modifyChildren() {
      this.$children.forEach((child, index) => {
        child.index = index
        if (index < this.current) {
          child.myStatus = 'finish'
        }
        else if (index == this.current) {
          child.myStatus = 'active'
        }
        else if (index > this.current) {
          child.myStatus = 'wait'
        }
      })
    }
  }
}
</script>
