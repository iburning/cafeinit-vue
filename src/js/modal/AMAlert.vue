<template>
  <transition name="ci">
    <div v-bind:class="[
        ns + 'modal',
        ns + 'modal-alert'
      ]">
      <div v-bind:class="ns + 'modal-dialog'">
        <div v-bind:class="ns + 'modal-hd'" v-if="title">{{title}}</div>
        <div v-bind:class="ns + 'modal-bd'" v-if="content">{{content}}</div>
        <div v-bind:class="ns + 'modal-bd'" v-else><slot>Hello CafeInit</slot></div>
        <div v-bind:class="ns + 'modal-footer'">
          <span v-bind:class="ns + 'modal-btn'"
            v-on:click="buttonOnClick">{{okText}}</span>
        </div>
      </div>

      <div v-bind:class="ns + 'dimmer'" v-on:click="modalOnClick"></div>
    </div>
  </transition>
</template>

<script>
import config from './_alert.js'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>

<style lang="less" src="../../less/am-modal.less" scoped></style>
