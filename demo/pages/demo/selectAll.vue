<template>
  <div id="page-select-all">
    <ci-list>
      <ci-list-cell>
        <ci-checkbox name="all" v-bind:item="{ title: 'Select All' }"
          v-model="isSelectAll"
          v-on:click.native="silent = false"></ci-checkbox>
      </ci-list-cell>
    </ci-list>

    <ci-block v-for="(book, index) in books">
      <ci-block-header>
        <ci-checkbox name="book" v-model="selectedBookIds"
          v-bind:item="{ title: book.name, value: book.id }"></ci-checkbox>
      </ci-block-header>
      <ci-block-body>
      </ci-block-body>
    </ci-block>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page--all',

  data() {
    return {
      isSelectAll: false,
      books: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'HTML' },
        { id: 3, name: 'CSS' }
      ],
      edBookIds: [2],
      silent: false,
    }
  },

  watch: {
    isSelectAll(val) {
      console.log('isSelectAll', val)
      if (val) {
        let ids = []
        for (let i = 0; i < this.books.length; i++) {
          ids.push(this.books[i].id)
        }
        this.selectedBookIds = ids
      }
      else {
        if (!this.silent) {
          this.selectedBookIds = []
        }
      }
    },

    selectedBookIds(val) {
      if (val.length < this.books.length) {
        this.silent = true
        this.isSelectAll = false
      }

      if (val.length == this.books.length) {
        this.silent = true
        this.isSelectAll = true
      }
    }
  },

  methods: {
    submit() {
      __alert('selectedBookIds: ' + this.selectedBookIds.join(', '))
    }
  }
}
</script>
