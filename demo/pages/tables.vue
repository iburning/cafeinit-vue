<template>
  <ci-block>
    <ci-block-header><h4>Table Title</h4></ci-block-header>
    <ci-block-body>
      <ci-table class="users" v-ref:my-table></ci-table>
    </ci-block-body>
  </ci-block>

  <ci-block>
    <ci-block-header><h4>Table Title</h4></ci-block-header>
    <ci-block-body>
      <ci-table class="users" striped="striped" v-ref:my-table-a></ci-table>
    </ci-block-body>
  </ci-block>

  <ci-block>
    <ci-block-header><h4>Table Title</h4></ci-block-header>
    <ci-block-body>
      <ci-table class="users" bordered="bordered"
        v-bind:headers="[
          { name: '#', className: 'no'},
          { name: 'First Name', className: 'first-name'},
          { name: 'Last Name' },
          { name: 'Username' }
        ]"
        v-bind:data="[
          [ 1, 'Mark', 'Otto', '@mdo' ],
          [ 2, 'Jacob', 'Thornton', '@fat' ],
          [ 3, 'Larry', 'the Bird', '@twitter' ]
        ]">
      </ci-table>
    </ci-block-body>
  </ci-block>

  <ci-block>
    <ci-block-header><h4>Table Title</h4></ci-block-header>
    <ci-block-body>
      <table class="table users">
        <thead>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{user[0]}}</td>
            <td><a v-link="{path: '/user/' + user[0]}">{{user[1]}}</td>
            <td>{{user[2]}}</td>
            <td>{{user[3]}}</td>
          </tr>
        </tbody>
      </table>
    </ci-block-body>
  </ci-block>
</template>


<script>
export default {
  data() {
    return {
      users: [
        [ 1, 'Mark', 'Otto', '@mdo' ],
        [ 2, 'Jacob', 'Thornton', '@fat' ],
        [ 3, 'Larry', 'the Bird', '@twitter' ]
      ]
    }
  },

  ready() {
    let headers = [
      { name: '#', className: 'no'},
      { name: 'First Name', className: 'first-name'},
      { name: 'Last Name' },
      { name: 'Username' }
    ]

    let data = this.users

    this.$refs.myTable.headers = headers
    this.$refs.myTable.data = data
    this.$refs.myTable.itemsClassName = [ 'no', 'first-name', '', 'username']

    this.$refs.myTableA.headers = headers
    this.$refs.myTableA.data = data

    // this.$refs.myTableB.headers = headers
    // this.$refs.myTableB.data = data

    // this.initTable()
  },

  methods: {
    initTable: function () {
      let CITableBody = Vue.component('ci-table-body')
      // let tableBody = CITableBody({
      //   props: {
      //     text: 'TEXT'
      //   },
      //
      //   ready() {
      //     console.log('tableBody ready');
      //   }
      // })


      console.log('tableBody', CITableBody, tableBody)
    }
  }
}
</script>
