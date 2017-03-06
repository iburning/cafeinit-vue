<template>
  <div v-else class="ci-block-header">
    <div class="ci-block-header-main">
      <slot>
        <h3 class="title">{{title}}</h3>
        <span class="sub-title" v-if="subTitle">{{subTitle}}</span>
      </slot>
    </div>
    <div class="ci-block-header-accessory" v-if="accessory">
      <i v-bind:class="accessoryIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ci-block-header',

  props: {
    title: {
      type: String,
      default: 'Block Title'
    },

    subTitle: {
      type: String,
      default: ''
    },

    to: {
      type: String,
      default: ''
    },

    accessory: {
      type: String,
      default: ''
    }
  },

  computed: {
    accessoryIcon() {
      const names = {
        link: 'icon-right',
        detail: 'icon-info',
        check: 'icon-check'
      }

      let name = names[this.accessory]
      return name ? ('iconfont ' + name) : ''
    }
  }
}
</script>
