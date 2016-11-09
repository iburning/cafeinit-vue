<template>
  <ci-modal v-bind:is-show="isActive"
    v-bind:is-show-button="true">
    <div class="am-modal-hd" v-if="title">{{title}}</div>
    <div class="am-modal-bd"><slot>Hello CafeInit</slot></div>
    <div class="am-modal-footer">
      <span class="am-modal-btn" v-on:click="close">{{okText}}</span>
    </div>
  </ci-modal>
</template>

<script>
export default {
  name: 'ci-alert',

  props: {
    isShow: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''       // lg
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

  mounted() {
    //
  },

  methods: {
    show() {
      this.isActive = true
    },

    close() {
      this.isActive = false
      this.$emit('close', 'button')
    },

    onClick(evt) {
      evt.stopPropagation();
    },

    closeViaDimmer() {
      if (this.isCloseViaDimmer) {
        this.isActive = false
        this.$emit('close', 'dimmer')
      }
    }
  }
}
</script>
