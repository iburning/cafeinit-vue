<template>
  <div v-bind:class="[`${ns}tabs`, `${ns}tabs-${mode}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ci-tabs',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    index: {
      type: Number,
      default: 0
    },

    mode: {
      type: String,
      default: 'default'    // bar colume
    }
  },

  data() {
    return {
      myIndex: this.index
    }
  },

  watch: {
    index(val) {
      this.modifyChildren()
    }
  },

  mounted() {
    this.$children.forEach((child, index) => {
      child.$on('click', () => {
        this.myIndex = index
        this.modifyChildren()
        this.$emit('click-item', index)
      })
    })

    this.modifyChildren()
  },

  methods: {
    modifyChildren() {
      this.$children.forEach((child, index) => {
        child.isActive = (index === this.myIndex)
      })
    }
  }
}
</script>
