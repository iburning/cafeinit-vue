<template>
  <div v-bind:class="`${ns}steps`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ci-steps',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    index: {
      type: Number,
      default: 0
    },

    canChangeByClick: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      myIndex: this.index
    }
  },

  watch: {
    index(val) {
      this.myIndex = val
      this.modifyChildren()
    }
  },

  mounted() {
    this.$children.forEach((child, index) => {
      child.$on('click', () => {
        if (this.canChangeByClick) {
          this.myIndex = index
          this.modifyChildren()
        }
        this.$emit('click-item', index)
      })
    })

    this.modifyChildren()
  },

  methods: {
    modifyChildren() {
      this.$children.forEach((child, index) => {
        child.index = index
        if (index < this.myIndex) {
          child.status = 'finish'
        }
        else if (index == this.myIndex) {
          child.status = 'active'
        }
        else if (index > this.myIndex) {
          child.status = 'wait'
        }
      })
    }
  }
}
</script>
