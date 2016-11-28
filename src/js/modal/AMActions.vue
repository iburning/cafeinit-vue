<template>
  <transition name="ci">
    <div tabindex="-1" class="am-modal" v-on:click="modalOnClick">
      <div class="am-modal-actions">
        <div class="am-modal-actions-group">
          <ul class="am-list">
            <li v-for="(item, index) in items"
              v-bind:class="[
                item.className,
                (selectedIndex == index) ? 'am-active': ''
              ]"
              v-on:click="itemOnClick(index, item)">
              <router-link v-if="item.to" v-bind:to="item.to">{{item.text}}</router-link>
              <a v-else href="javascritp:;">{{item.text}}</a>
            </li>
          </ul>
        </div>

        <div class="am-modal-actions-group">
          <a class="am-btn am-btn-default am-btn-block" href="javasrcript:;"
            v-on:click="cancelButtonOnClick">{{cancelText}}</a>
        </div>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ci-actions',

  props: {
    ns: {
      type: String,
      default: 'am-'
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

  methods: {
    modalOnClick() {
      this.$emit('cancel', 'dimmer')
    },

    itemOnClick(index, item) {
      this.selectedIndex = index
      this.$emit('click-item', index, item)
    },

    cancelButtonOnClick() {
      this.$emit('cancel', 'button')
    }
  }
}
</script>

<style lang="less" scoped>
.am-modal, .am-dimmer {
  display: block;
  opacity: 1;
  transform: none;
  transition: opacity .3s ease;
}

.am-modal-dialog {
  z-index: 1500;
  transition: all 0.3s ease;
}

.ci-enter, .ci-leave-active {
  opacity: 0;

  .am-modal-dialog {
    transform: scale(0.75);
  }
}

.am-modal-actions {
  transform: translateY(0);
}

.ci-enter, .ci-leave-active {
  .am-modal-actions {
    transform: translateY(100%);
  }
}
</style>
