<template>
  <ci-modal
    v-bind:is-show.sync="isShow"
    v-bind:is-close-via-dimmer="isCloseViaDimmer"
    v-bind:is-fead="isFead"
    v-bind:size="size">
    <div class="modal-header" slot="header" v-if="title">
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body" slot="body">
      <slot>
        <ci-list>
          <ci-list-cell v-for="(index, item) in items">
            <ci-link-button block="block"
              v-bind:class="[item.className, {'ci-selected': selectedIndex === index}]"
              v-on:click="clickItem(index, item)"
              v-link="item.link">{{item.text}}</ci-link-button>
          </ci-list-cell>
        </ci-list>
      </slot>
    </div>
    <div class="modal-footer" slot="footer">
      <ci-link-button v-on:click="close">{{cancelText}}</ci-link-button>
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
      default: true
    },

    isFead: {       // 是否使用淡入淡出效果
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: 'sm'       // sm / lg
    },

    cancelText: {
      type: String,
      default: '取消'
    },

    items: {
      type: Array,
      default: function () {
        return []
      }
    },

    selectedIndex: {
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

      beforeLeave: function (el) {
        // ...
      },

      leave: function (el) {
        // ...
      },

      afterLeave: function (el) {
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
    },

    clickItem(index, item) {
      this.selectedIndex = index
      this.isShow = false
      this.$dispatch('click-item', index, item)
    }
  }
}
</script>


<style scoped>
.ci-list {
  margin-bottom: 0;
  border: none;
}

.ci-list-cell:before {
  border: none;
}

.ci-list-cell {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}
</style>
