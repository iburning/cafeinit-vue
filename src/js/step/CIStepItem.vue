<template>
  <div v-bind:class="[`${ns}step-item`, `${ns}step-item-${myStatus}`]"
    v-on:click="$emit('click', index)">
    <slot name="title">
      <strong v-bind:class="`${ns}step-item-title`">{{title}}</strong>
    </slot>
    <slot name="tip">
      <span v-if="tip" v-bind:class="`${ns}step-item-tip`">{{tip}}</span>
    </slot>
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
      default: 'wait'   // wait active finish
    },

    title: {
      type: String,
      default: ''
    },

    tip: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      index: 0,
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
