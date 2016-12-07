<template>
  <div id="page-text">
    <ci-list>
      <ci-list-cell>
        <ci-form-text v-model="username"
          title="用户名" title-width="3em"></ci-form-text>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-text v-model="password" type="password"
          title="密码" title-width="3em"></ci-form-text>
      </ci-list-cell>
    </ci-list>

    <ci-list>
      <ci-list-cell>
        <ci-form-text v-model="username" placeholder="Username"></ci-form-text>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-text v-model="email" type="email" placeholder="abc@company.com"></ci-form-text>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-text v-model="password" type="password" placeholder="Password"></ci-form-text>
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
      __alert(this.username)
    }
  }
}
</script>
