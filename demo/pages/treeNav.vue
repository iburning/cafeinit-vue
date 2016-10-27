<template>
  <h2>TreeNav</h2>
  <!-- <ci-tree-nav v-bind:items="[{
      text: 'Category A',
      link: { path: '/category/a'}
    }, {
      text: 'Category B',
      link: { path: '/category/b'},
      subItems: [{
        text: 'Cat B-1',
        link: { path: '/category/b/1'}
      }, {
        text: 'Cat B-2',
        link: { path: '/category/b/2'},
        subItems: [{
          text: 'b-2-1',
          link: { path: '/category/b/2/1'}
        }, {
          text: 'b-2-2',
          link: { path: '/category/b/2/2'}
        }]
      }, {
        text: 'Cat B-3',
        link: { path: '/category/b/3'}
      }]
    }, {
      text: 'Category C',
      link: { path: '/category/c'},
      subItems: [{
        text: 'Cat C-1',
        link: { path: '/category/c/1'}
      }, {
        text: 'Cat C-2',
        link: { path: '/category/c/2'}
      }]
    }]"></ci-tree-nav> -->

    <ci-tree-nav v-bind:active-index="2" v-bind:items="[{
      text: 'Category A',
      link: { path: '/category/a'},
      icon: 'dashboard'
    }, {
      text: 'Category B',
      link: { path: '/category/b'},
      icon: 'users',
      subItems: [{
        text: 'Cat B-1',
        link: { path: '/category/b/1'}
      }, {
        text: 'Cat B-2',
        link: { path: '/category/b/2'},
      }, {
        text: 'Cat B-3',
        link: { path: '/category/b/3'}
      }]
    }, {
      text: 'Category C',
      link: { path: '/category/c'},
      icon: 'heart',
      subItemsActiveIndex: 1,
      subItems: [{
        text: 'Cat C-1',
        link: { path: '/category/c/1'}
      }, {
        text: 'Cat C-2',
        link: { path: '/category/c/2'}
      }]
    }]"></ci-tree-nav>
</template>


<script>
export default {
  ready() {
    console.log('treeNav ready')
  }
}
</script>
