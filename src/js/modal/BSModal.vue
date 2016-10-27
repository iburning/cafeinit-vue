<template>
  <div v-show="isShow">
    <div class="modal" tabindex="-1" role="dialog"
      v-bind:class="{'in': isShow, 'fade': isFead}"
      v-on:click="closeViaDimmer">
      <div class="modal-dialog"
        v-bind:class="{'modal-lg': size === 'lg', 'modal-sm': size === 'sm'}"
        v-bind:style="{'margin-top-x': marginTop + 'px'}">
        <div class="modal-content">
          <slot name="header"></slot>
          <slot name="body"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>

    <div class="modal-backdrop"
      v-bind:class="{'in': isShow, 'fade': isFead}"
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

    isFead: {       // 是否使用淡入淡出效果
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: ''       // sm / lg
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
        var dialog = this.$el.querySelector('.modal-dialog')
        // this.marginTop = - parseInt(dialog.offsetHeight / 2)
        this.marginTop = 200;
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


<style>
.modal {
  display: block;
}
</style>
