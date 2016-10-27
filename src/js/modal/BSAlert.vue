<template>
  <ci-modal
    v-bind:is-show.sync="isShow"
    v-bind:is-close-via-dimmer="isCloseViaDimmer"
    v-bind:is-fead="isFead"
    v-bind:size="size">
    <div class="modal-header" slot="header" v-if="title">
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body" slot="body"><slot>{{{content}}}</slot></div>
    <div class="modal-footer" slot="footer">
      <ci-link-button v-on:click="close">{{okText}}</ci-link-button>
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

    isCloseViaDimmer: {   // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
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

  watch: {
    isShow(val) {
      if (!val) {
        this.$dispatch('close')
      }
    }
  },

  methods: {
    show() {
      this.isShow = true
    },

    close() {
      this.isShow = false
    }
  }
}
</script>
