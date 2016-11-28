<template>
  <ci-modal
    v-bind:size="size"
    v-bind:is-close-via-dimmer="isCloseViaDimmer"
    v-bind:is-show-button="true"
    v-on:close="onCloseModal">
    <div class="am-modal-hd" v-if="title">{{title}}</div>
    <div class="am-modal-bd" v-if="content">{{content}}</div>
    <div class="am-modal-bd" v-else><slot>Hello CafeInit</slot></div>
    <div class="am-modal-footer">
      <span class="am-modal-btn" v-on:click="onClickButton">{{okText}}</span>
    </div>
  </ci-modal>
</template>

<script>
import config from './_alert'

config.props.ns = {
  type: String,
  default: 'am-'
}

export default config
</script>
