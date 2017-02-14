<template>
  <div v-bind:class="ns + 'step'">
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
      console.log('CIStep.current', val)
      this.modifyChildren()
    }
  },

  mounted() {
    console.log('CIStep.mounted', this.current, this.$children.length)
    this.modifyChildren()
  },

  methods: {
    modifyChildren() {
      this.$children.forEach((child, index) => {
        console.log(index, child.myStatus, child)
        if (index < this.current) {
          child.myStatus = 'finish'
        }
        else if (index == this.current) {
          child.myStatus = 'process'
        }
        else if (index > this.current) {
          child.myStatus = 'wait'
        }
      })
    }
  }
}
</script>
