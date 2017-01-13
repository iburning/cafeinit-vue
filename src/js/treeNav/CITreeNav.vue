<template>
  <ul class="ci-tree-nav">
    <li class="ci-tree-nav-item" v-for="(item, index) in items"
      v-bind:class="[item.className, {'ci-active': activeIndex === index}]"
      v-on:click="clickItem(index, item)">
      <router-link to="item.to">
        <i v-if="item.icon" v-bind:class="[fa, 'fa-' + item.icon]"></i>
        {{item.text}}
      </router-link>
      <ci-tree-nav class="ci-tree-nav-sub"
        v-if="item.subItems && item.subItems.length"
        v-bind:active-index="item.subItemsActiveIndex"
        v-bind:items="item.subItems"></ci-tree-nav>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'ci-tree-vue',

  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },

    activeIndex: {
      type: Number,
      default: -1
    }
  },

  methods: {
    clickItem(index, item) {
      this.activeIndex = index
      this.$emit('click-item', index, item)
    }
  }
}
</script>
