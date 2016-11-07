<template>
  <ci-modal v-bind:is-show="isActive"
    v-bind:is-close-via-dimmer="false"
    v-bind:is-show-button="true"
    >
    <div class="am-modal-hd" v-if="title">{{title}}</div>
    <div class="am-modal-bd"><slot>Are you sure?</slot></div>
    <div class="am-modal-footer">
      <span class="am-modal-btn" v-on:click="cancel">{{concelText}}</span>
      <span class="am-modal-btn" v-on:click="ok">{{okText}}</span>
    </div>
  </ci-modal>
</template>

<script>
export default {
  name: 'ci-confirm',

  props: {
    isShow: {
      type: Boolean,
      default: false
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

  data() {
    return {
      isActive: this.isShow
    }
  },

  watch: {
    isShow(val) {
      this.isActive = val
    }
  },

  methods: {
    show() {
      this.isActive = true
    },

    close() {
      // console.log('confirm close')
      this.isActive = false
    },

    cancel() {
      this.close()
      this.$emit('cancel')
    },

    ok() {
      this.close()
      this.$emit('ok')
    }
  }
}
</script>
