<template>
  <div v-bind:class="[`${ns}step`, `${ns}step-${status}`]"
    v-on:click="$emit('click')">
    <slot name="title">
      <strong v-bind:class="`${ns}step-title`">{{title}}</strong>
    </slot>
    <slot name="tip">
      <span v-if="tip" v-bind:class="`${ns}step-tip`">{{tip}}</span>
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

    // status: {
    //   type: String,
    //   default: 'wait'   // wait active finish
    // },

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
      status: 'active'
    }
  }
}
</script>
