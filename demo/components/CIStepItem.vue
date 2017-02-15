<template>
  <div v-bind:class="[`${ns}step-item`, `${ns}step-item-${myStatus}`]">
    <slot>
      <em v-if="index" v-bind:class="`${ns}step-item-index`">{{index}}</em>
    </slot>
    <strong v-if="title" v-bind:class="`${ns}step-item-title`">{{title}}</strong>
    <span v-if="desc" v-bind:class="`${ns}step-item-desc`">{{desc}}</span>
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

    status: {
      type: String,
      default: 'wait'   // wait process finish
    },

    index: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    desc: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      myStatus: this.status
    }
  },

  watch: {
    status(val) {
      this.myStatus = val
    }
  }
}
</script>
