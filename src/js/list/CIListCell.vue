<template>
  <router-link v-if="to" v-bind:to="to" tag="li" class="ci-list-cell">
    <div class="ci-list-cell-body" v-on:click="$emit('click')">
      <slot></slot>
    </div>
    <div class="ci-list-cell-accessory" v-if="accessory">
      <i v-bind:class="['iconfont', accessoryIcon]"></i>
    </div>
  </router-link>

  <li v-else class="ci-list-cell" v-on:click="$emit('click')">
    <div class="ci-list-cell-body">
      <slot></slot>
    </div>
    <div class="ci-list-cell-accessory" v-if="accessory">
      <i v-bind:class="['iconfont', accessoryIcon]"></i>
    </div>
  </li>
</template>


<script>
export default {
  name: 'ci-list-cell',

  props: {
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
      let icon = ''

      switch (this.accessory) {
        case 'link':
          // icon = 'chevron-right'
          icon = 'icon-right'
          break

        case 'detail':
          // icon = 'info-circle'
          icon = 'icon-info'
          break

        case 'check':
          // icon = 'check'
          icon = 'icon-check'
          break

        default:
          icon = ''
      }

      return icon
    }
  }
}
</script>
