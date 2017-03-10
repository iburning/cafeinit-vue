<template>
  <div class="scroll-list">
    <ci-list>
      <ci-list-cell v-for="(item, index) in items" v-bind:key="index"
        accessory="link">
        {{item.title}}
      </ci-list-cell>
    </ci-list>

    <ci-loading v-show="isLoading"></ci-loading>
  </div>
</template>


<script>
import CafeinitVue from 'cafeinit-vue'
var CIScrollHelper = CafeinitVue.utils.CIScrollHelper

export default {
  name: 'croll-list',

  data() {
    return {
      items: [],
      page: 1,
      isLoading: false
    }
  },

  mounted() {
    this.getData(this.page, (items) => {
      this.items = items
    })

    var scroll = new CIScrollHelper({
      container: $(window),
      content: $('body'),
      leadEnd: 100,
      willScrollToEndHandler: () => {
        scroll.isListenScrollToEnd = false
        this.getData(++this.page, (items) => {
          scroll.isListenScrollToEnd = true
          this.items = this.items.concat(items)
        })
      }
    })
  },

  methods: {
    getData(page, callback) {
      console.log('getData', page)
      this.isLoading = true

      var delay = setTimeout(() => {
        page = page - 1
        page = (page < 0) ? 0 : page
        var pageSize = 20
        var items = []
        for (var i = pageSize * page; i < pageSize * (page + 1); i++) {
          items.push({ title: 'title ' + i })
        }

        this.isLoading = false
        callback(items)
        clearTimeout(delay)
      }, Math.random() * 1000)
    }
  }
}
</script>
