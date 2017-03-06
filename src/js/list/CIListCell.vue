<template>
  <router-link v-if="to" v-bind:to="to" tag="li" class="ci-list-cell">
    <div class="ci-list-cell-body" v-on:click="$emit('click')">
      <slot></slot>
    </div>
    <div class="ci-list-cell-accessory" v-if="accessory">
      <i v-bind:class="accessoryIcon"></i>
    </div>
  </router-link>

  <li v-else class="ci-list-cell" v-on:click="$emit('click')">
    <div class="ci-list-cell-body">
      <slot></slot>
    </div>
    <div class="ci-list-cell-accessory" v-if="accessory">
      <i v-bind:class="accessoryIcon"></i>
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
