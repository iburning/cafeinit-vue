<template>
  <ci-tab-bar v-ref:my-tab-bar></ci-tab-bar>
</template>


<script>
export default {
  data() {
    return {
      // tabBarItems: [
      //   { text: 'Tab A' },
      //   { text: 'Tab B', path: '/home' },
      //   { text: 'Tab C', path: '//user' }
      // ]
      tabBarItems: [
        { className: 'btn-shares', text: 'Shares' },
        { className: 'btn-items', text: 'Items' },
        { className: 'btn-friends', text: 'Friends' }
      ]
    }
  },

  ready() {
    this.$refs.myTabBar.items = this.tabBarItems
    this.$refs.myTabBar.selectedIndex = 1
    this.$refs.myTabBar.$on('item-click', function (index) {
      console.log('myTabBar item-click', index)
    })
  }
}
</script>
