<template>
  <div v-show="isShow">
    <div class="am-modal-actions am-modal-active">
      <div class="am-modal-actions-group">
        <ul class="am-list">
          <li v-for="(index, item) in items"
            v-bind:class="[item.className, {'ci-selected': selectedIndex == index}]"
            v-on:click="clickItem(index, item)">
            <a v-if="item.path" v-link="{path: item.path}">{{item.text}}</a>
            <a v-else href="javascritp:;">{{item.text}}</a>
          </li>
        </ul>
      </div>

      <div class="am-modal-actions-group">
        <button class="am-btn am-btn-secondary am-btn-block"
          v-on:click="close">{{cancelText}}</button>
      </div>
    </div>

    <div class="am-dimmer"
      v-bind:class="{'am-active': isShow}"
      v-on:click="closeViaDimmer"></div>
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

    isCloseViaDimmer: {     // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
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
      this.$dispatch('item-click', index, item)
    }
  }
}
</script>
