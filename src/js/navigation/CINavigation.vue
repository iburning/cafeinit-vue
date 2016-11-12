<template>
  <div class="ci-navigation">
    <div class="ci-navigation-left-item"><slot name="left-item"></slot></div>
    <div class="ci-navigation-title">{{title}}</div>
    <div class="ci-navigation-right-item"><slot name="right-item"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'ci-navigation',

  props: {
    title: String
  }
}
</script>
