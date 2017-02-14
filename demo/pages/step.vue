<template>
  <div class="page-step">
    <ci-step v-bind:current="3">
      <ci-step-item index="1" title="Buy"></ci-step-item>
      <ci-step-item index="2" title="Pay"></ci-step-item>
      <ci-step-item index="3" title="Send"></ci-step-item>
      <ci-step-item index="4" title="Recive"></ci-step-item>
      <ci-step-item index="5" title="Comment"></ci-step-item>
    </ci-step>
  </div>
</template>

<script>
import CIStep from '../components/CIStep'
import CIStepItem from '../components/CIStepItem'

export default {
  name: 'page-step',

  components: {
    'ci-step': CIStep,
    'ci-step-item': CIStepItem
  },

  data() {
    return {
    }
  },

  methods: {
  }
}
</script>
