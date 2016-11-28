<template>
  <transition name="ci-modal">
    <div v-bind:class="ns + 'modal'" v-on:click="onClick">
      <div v-bind:class="ns + 'modal-container'">
        <slot></slot>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ci-modal',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    }
  },

  methods: {
    onClick(evt) {
      this.$emit('close')
    }
  }
}
</script>
