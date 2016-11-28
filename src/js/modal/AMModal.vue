<template>
  <transition name="ci">
    <div v-bind:class="ns + 'modal'" v-on:click="onClick">
      <div v-bind:class="ns + 'modal-dialog'">
        <slot></slot>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
</template>

<script>
import config from './_modal'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>

<style lang="less" scoped>
@import "../../less/varialbes.less";

.am-modal, .am-dimmer {
  display: block;
  opacity: 1;
  transform: none;
  transition: opacity .3s ease;
}

.am-modal-dialog {
  z-index: 1500;
  transition: all 0.3s ease;
}

.am-modal-btn {
  color: @color-primary;
}


.ci-enter, .ci-leave-active {
  opacity: 0;

  .am-modal-dialog {
    transform: scale(0.75);
  }
}
</style>
