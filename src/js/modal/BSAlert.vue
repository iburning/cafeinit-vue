<template>
  <transition name="ci">
    <div v-bind:class="[
        ns + 'modal',
        ns + 'modal-alert'
      ]">
      <div v-bind:class="ns + 'modal-dialog'">
        <div v-bind:class="ns + 'modal-content'">
          <div v-bind:class="ns + 'modal-header'" v-if="title"><h4>{{title}}</h4></div>
          <div v-bind:class="ns + 'modal-body'" v-if="content">{{content}}</div>
          <div v-bind:class="ns + 'modal-body'" v-else><slot>Hello CafeInit</slot></div>
          <div v-bind:class="ns + 'modal-footer'">
            <ci-button type="link" style="primary" v-on:click="buttonOnClick">{{okText}}</ci-button>
          </div>
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
  default: ''
}

export default config
</script>
