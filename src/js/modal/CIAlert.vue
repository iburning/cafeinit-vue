<template>
  <ci-modal v-bind:is-show.sync="isShow" v-bind:is-close-via-dimmer="isCloseViaDimmer">
    <div class="am-modal-hd" slot="header" v-if="title">{{title}}</div>
    <div class="am-modal-bd" slot="body"><slot>{{{content}}}</slot></div>
    <div class="am-modal-footer" slot="footer">
      <span class="am-modal-btn" v-on:click="ok">{{okText}}</span>
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

    isCloseViaDimmer: {     // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: '确认'
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
    }
  }
}
</script>
