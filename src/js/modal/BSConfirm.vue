<template>
  <ci-modal
    v-bind:is-show.sync="isShow"
    v-bind:is-close-via-dimmer="false"
    v-bind:is-fead="isFead"
    v-bind:size="size">
    <div class="modal-header" slot="header" v-if="title">
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body" slot="body"><slot>Are you sure ?</slot></div>
    <div class="modal-footer" slot="footer">
      <ci-link-button v-on:click="hide">{{concelText}}</ci-link-button>
      <ci-link-button v-on:click="hide">{{okText}}</ci-link-button>
    </div>
  </ci-modal>
</template>


<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
      twoWay: true
    },

    isFead: {       // 是否使用淡入淡出效果
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: ''       // sm / lg
    },

    title: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: '确认'
    },

    concelText: {
      type: String,
      default: '取消'
    }
  },

  ready() {
    // ...
  },


  methods: {
    show() {
      this.isShow = true
    },

    hide() {
      this.isShow = false
    },

    ok() {
      this.hide()
      this.$dispatch('ok')
    },

    cancel() {
      this.hide()
      this.$dispatch('cancel')
    }
  }
}
</script>
