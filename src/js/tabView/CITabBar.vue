<template>
  <div class="ci-tab-bar">
    <ul class="ci-tab-bar-items">
      <li class="ci-tab-bar-item" v-for="(index, item) in items"
        v-bind:class="[item.className, {'ci-selected': selectedIndex == index}]"
        v-on:click="clickItem(index, item)">
        <a v-if="item.path" v-link="{path: item.path}">{{item.text}}</a>
        <a v-else href="javascritp:;">{{item.text}}</a>
      </li>
    </ul>
  </div>
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

    selectedIndex: {
      type: Number,
      default: 0
    }
  },

  ready() {
    // ...
  },

  methods: {
    clickItem(index, item) {
      this.selectedIndex = index
      this.$dispatch('click-item', index, item)
    }
  }
}
</script>
