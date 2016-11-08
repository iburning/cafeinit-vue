<template>
  <div id="form">
    <ci-form class="my-form" horizontal="horizontal">
      <ci-block>
        <ci-block-body>
          <ci-input class="my-email" title="电子邮箱" type="email" name="email" placeholder="请输入邮箱"
            v-model="email"></ci-input>

          <ci-input title="密码" type="password" name="password" placeholder="6-18位字母数字"
            title-width="4em" v-model="password"></ci-input>
        </ci-block-body>

        <ci-block-footer>
          <ci-button style="primary" block="block" v-on:click="save">保存</ci-button>
        </ci-block-footer>
      </ci-block>
    </ci-form>

    <ci-form>
      <ci-block>
        <ci-block-body>
          <!-- <ci-select title="商品分类" name="category" v-bind:items="[
              {title: 'Category 01', value: '1'},
              {title: 'Category 02', value: '2'},
              {title: 'Category 03', value: '3'}
            ]"
            v-bind:model.sync="category"></ci-select> -->

          <ci-input title="电子邮箱" type="email" name="email" placeholder="请输入邮箱"
            v-model="email"></ci-input>

          <ci-input title="密码" type="password" name="password" placeholder="6-18位字母数字"
            title-width="4em" v-model="password"></ci-input>

          <ci-checkbox inline="inline" title="技能" title-width="4em" name="skills"
            v-bind:items="[
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JavaScript', value: 'javascript'}
            ]"
            v-model="skills"></ci-checkbox>

          <!-- <ci-checkbox title="技能" name="skills"
            v-bind:items="[
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JavaScript', value: 'javascript'}
            ]"
            v-bind:model="skills"></ci-checkbox> -->

          <!-- <ci-radio inline="inline" title="性别" title-width="4em" name="gender"
            v-bind:items="[
              {title: 'Male', value: 'male'},
              {title: 'Female', value: 'female'}
            ]"
            v-bind:model.sync="gender"></ci-radio>

          <ci-radio title="商家类型" name="type"
            v-bind:items="[
              {title: 'Personal', value: '1'},
              {title: 'Bussiness', value: '2'}
            ]"
            v-bind:model.sync="type"></ci-radio> -->
        </ci-block-body>
      </ci-block>

      <div class="ci-btn-area">
        <ci-button style="primary" block="block" v-on:click="save">保存</ci-button>
      </div>
    </ci-form>
  </div>
</template>

<script>
export default {
  name: 'form',

  data() {
    return {
      test: 'TEST',
      email: 'iburning@live.cn',
      password: '',
      category: '1',
      skills: ['html', 'javascript'],
      gender: 'female',
      type: '1'
    }
  },

  watch: {
    category: function (val, oldVal) {
      console.log('category', val, oldVal)
    }
  },

  methods: {
    save() {
      console.log('save', this.$data.email)
    }
  }
}
</script>
