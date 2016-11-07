<template>
  <div v-show="isActive">
    <div tabindex="-1"
      v-bind:class="[
        'am-modal-actions',
        isActive ? 'am-modal-active' : ''
      ]">
      <div class="am-modal-actions-group">
        <ul class="am-list">
          <li v-for="(item, index) in items"
            v-bind:class="[
              item.className,
              (selectedIndex == index) ? 'am-active': ''
            ]"
            v-on:click="onClickItem(index, item)">
            <router-link v-if="item.to" v-bind:to="item.to">{{item.text}}</router-link>
            <a v-else href="javascritp:;">{{item.text}}</a>
          </li>
        </ul>
      </div>

      <div class="am-modal-actions-group">
        <a class="am-btn am-btn-secondary am-btn-block" href="javasrcript:;"
          v-on:click="close">{{cancelText}}</a>
      </div>
    </div>

    <div v-bind:class="{
        'am-dimmer': true,
        'am-active': isActive
      }"
      v-on:click="closeViaDimmer"
      transition="modal-fade"></div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
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

    index: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      isActive: this.isShow,
      selectedIndex: this.index
    }
  },

  watch: {
    isShow(val) {
      this.isActive = val
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

  mounted() {
    //
  },

  methods: {
    show() {
      this.isActive = true
    },

    close() {
      this.isActive = false
      this.$emit('cancel', 'button')
    },

    closeViaDimmer() {
      if (this.isCloseViaDimmer) {
        this.isActive = false
        this.$emit('cancel', 'dimmer')
      }
    },

    onClickItem(index, item) {
      this.selectedIndex = index
      this.isActive = false
      this.$emit('click-item', index, item)
    }
  }
}
</script>
