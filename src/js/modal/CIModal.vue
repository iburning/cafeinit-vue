<template>
  <div v-show="isShow">
    <div class="am-modal" tabindex="-1"
      v-bind:class="{'am-modal-active': isShow, 'am-modal-lg': lg}"
      v-bind:style="{'margin-top': marginTop + 'px'}">
      <div class="am-modal-dialog">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>

    <div class="am-dimmer"
      v-bind:class="{'am-active': isShow}"
      v-on:click="closeViaDimmer"
      transition="modal-fade"></div>
  </div>
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

    lg: {
      type: Boolean,
      default: false
    },

    marginTop: {
      type: Number,
      default: 0
    }
  },

  transitions: {
    'modal-fade': {
      beforeEnter(el) {
        // ...
      },

      enter(el) {
        // ...
      },

      afterEnter(el) {
        // ...
      },

      enterCancelled(el) {
        // ...
      },

      beforeLeave(el) {
        // ...
      },

      leave(el) {
        // ...
      },

      afterLeave(el) {
        // ...
      },

      leaveCancelled(el) {
        // ...
      }
    }
  },

  ready() {
    // ...
  },

  watch: {
    isShow(val, oldVal) {
      // console.log('modal', this.$el, this)
      if (val) {
        var dialog = this.$el.querySelector('.am-modal')
        this.marginTop = - parseInt(dialog.offsetHeight / 2)
      }
    }
  },

  methods: {
    show() {
      this.isShow = true
    },

    close() {
      this.isShow = false
    },

    closeViaDimmer() {
      if (this.isCloseViaDimmer) {
        this.isShow = false
      }
    }
  }
}
</script>
