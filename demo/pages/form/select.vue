<template>
  <div id="page-select">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Skill">
          <ci-select name="skill" v-model="skill"
            v-bind:options="skillOptions"
            v-on:change="onSkillChange"></ci-select>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-select name="skill" v-model="skill"
          v-bind:options="skillOptions"></ci-select>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-group title="Category">
          <ci-select name="category" v-model="category"
            v-bind:options="categoryOptions"></ci-select>
          {{category}}
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-group title="Category">
          <ci-select name="category" v-model="category"
            v-bind:groups="categoryGroups"></ci-select>
          {{category}}
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-select',

  data() {
    return {
      skillOptions: [
        { value: 'javascript', title: 'Javascript' },
        { value: 'html', title: 'HTML' },
        { value: 'css', title: 'CSS' },
        { value: 'oc', title: 'Objective-C', disabled: true },
        { value: 'swift', title: 'Swift' }
      ],
      skill: 'javascript',

      categoryOptions: [
        { title: 'Javascript', value: 1 },
        { title: 'CSS', value: 2 },
        { title: 'HTML', value: 3 },
      ],
      category: 3,

      categoryGroups: [
        {
          title: 'Develop',
          options: [
            { title: 'Javascript', value: 1 },
            { title: 'CSS', value: 2 },
            { title: 'HTML', value: 3 }
          ]
        },

        {
          title: 'Design',
          options: [
            { title: 'Web', value: 1 },
            { title: 'App', value: 2 }
          ]
        }
      ]
    }
  },

  methods: {
    onSkillChange(obj) {
      console.log('onSkillChange', obj)
    },

    submit() {
      __alert('skill: ' + this.skill)
    }
  }
}
</script>
