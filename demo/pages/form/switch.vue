<template>
  <div id="page-switch">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Active" title-width="4em" align="right">
          <ci-switch v-model="isActived"></ci-switch>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-group title="Unactive" title-width="4em" align="right">
          <ci-switch v-model="isUnactived"></ci-switch>
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <ci-switch-list title="Skills" name="skills" v-model="skills"
      v-bind:options="skillOptions"></ci-switch-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      isActived: true,

      skillOptions: [
        { value: 'javascript', title: 'Javascript' },
        { value: 'html', title: 'HTML' },
        { value: 'css', title: 'CSS' },
        { value: 'oc', title: 'Objective-C', disabled: true },
        { value: 'swift', title: 'Swift' }
      ],
      skills: ['javascript', 'swift']
    }
  },

  computed: {
    isUnactived() {
      return !this.isActived
    }
  },

  methods: {
    submit() {
      let info = [];
      info.push('isActived: ' + this.isActived)
      info.push('skills: ' + this.skills)
      __alert(info.join('\n'))
    }
  }
}
</script>
