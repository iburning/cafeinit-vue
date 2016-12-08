<template>
  <transition name="ci">
    <div v-bind:class="ns + 'modal'">
      <div v-bind:class="ns + 'modal-dialog'">
        <slot></slot>
      </div>

      <div v-bind:class="ns + 'dimmer'" v-on:click="modalOnClick"></div>
    </div>
  </transition>
</template>

<script>
import config from './_modal.js'

config.props.ns = {
  type: String,
  default: ''
}

export default config
</script>
