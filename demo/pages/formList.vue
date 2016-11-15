<template>
  <div id="form-list">
    <ci-form class="my-form">
      <ci-list>
        <ci-list-cell>
          <ci-select title="商品分类" name="category" v-bind:items="[
              {title: 'Category 01', value: '1'},
              {title: 'Category 02', value: '2'},
              {title: 'Category 03', value: '3'}
            ]"
            v-bind:model.sync="category"></ci-select>
        </ci-list-cell>

        <ci-list-cell>
          <ci-input title="电子邮箱" type="email" name="email" placeholder="请输入邮箱"
            v-model="email"></ci-input>
        </ci-list-cell>

        <ci-list-cell>
          <ci-input title="密码" type="password" name="password" placeholder="6-18位字母数字"
            title-width="4em" v-model="password"></ci-input>
        </ci-list-cell>

        <ci-list-cell>
          <ci-number title="数量" name="count" placeholder="0"
            title-width="4em" v-model="count"
            v-bind:step="5" v-bind:min="0" v-bind:max="20"></ci-number>
        </ci-list-cell>
      </ci-list>

      <ci-list-checkbox title="技能" name="skills"
        v-bind:items="[
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JavaScript', value: 'javascript'}
        ]"
        v-model="skills"></ci-list-checkbox>

      <ci-list-radio title="商家类型" name="type"
        v-bind:items="[
          {title: 'Personal', value: 1},
          {title: 'Bussiness', value: 2}
        ]"
        v-model="type"></ci-list-radio>

      <ci-list-switch title="技能" name="skills"
        v-bind:items="[
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JavaScript', value: 'javascript'}
        ]"
        v-model="skills"></ci-list-switch>

      <div class="ci-btn-area">
        <ci-button style="primary" block="block" v-on:click="save">保存</ci-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-list',

  data() {
    return {
      count: 5,
      category: 1,
      email: 'iburning@live.cn',
      password: '',
      skills: ['html', 'javascript'],
      type: 1
    }
  },

  methods: {
    save() {
      console.log('save', this.$data)
    }
  }
}
</script>
