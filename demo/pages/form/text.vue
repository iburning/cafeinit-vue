<template>
  <div id="page-text">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="用户名" title-width="4em">
          <ci-text v-model="username"></ci-text>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-group title="密码" title-width="4em">
          <ci-text v-model="password" type="password"></ci-text>
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <ci-list>
      <ci-list-cell>
        <ci-text v-model="username" placeholder="Username"></ci-text>
      </ci-list-cell>

      <ci-list-cell>
        <ci-text v-model="email" type="email" placeholder="abc@company.com"></ci-text>
      </ci-list-cell>

      <ci-list-cell>
        <ci-text v-model="password" type="password" placeholder="Password"></ci-text>
      </ci-list-cell>
    </ci-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-text',

  data() {
    return {
      username: 'burning',
      password: '',
      email: ''
    }
  },

  methods: {
    submit() {
      __alert('username: ' + this.username)
    }
  }
}
</script>
