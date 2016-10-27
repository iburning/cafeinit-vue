<template>
  <ul class="ci-tree-nav">
    <li class="ci-tree-nav-item" v-for="(index, item) in items"
      v-bind:class="[item.className, {'ci-active': activeIndex === index}]"
      v-on:click="clickItem(index, item)">
      <a v-link="item.link">
        <i v-if="item.icon" class="fa fa-{{item.icon}}"></i>
        {{item.text}}
      </a>
      <ci-tree-nav class="ci-tree-nav-sub"
        v-if="item.subItems && item.subItems.length"
        v-bind:active-index="item.subItemsActiveIndex"
        v-bind:items="item.subItems"></ci-tree-nav>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      }
    },

    activeIndex: {
      type: Number,
      default: -1
    }
  },

  ready() {
    // ...
  },

  methods: {
    clickItem(index, item) {
      this.activeIndex = index
      this.$emit('click-item', index, item)
    }
  }
}
</script>
