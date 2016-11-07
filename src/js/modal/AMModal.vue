<template>
  <div v-show="isActive" v-bind:is-close-via-dimmer="isCloseViaDimmer">
    <div tabindex="-1"
      v-bind:class="[
        'am-modal',
        isShowButton ? '' : 'am-modal-no-btn',
        isActive ? 'am-modal-active' : '',
        size ? ('am-modal-' + size) : ''
      ]"
      v-on:click="closeViaDimmer">
      <div class="am-modal-dialog" v-on:click="onClick">
        <slot></slot>
      </div>
    </div>

    <div v-bind:class="{
        'am-dimmer': true,
        'am-active': isActive
      }"
      transition="modal-fade"></div>
  </div>
</template>

<script>
export default {
  name: 'ci-modal',

  props: {
    isShow: {
      type: Boolean,
      default: false
    },

    isCloseViaDimmer: {     // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },

    isShowButton: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''       // lg
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
      // console.log('modal close')
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
