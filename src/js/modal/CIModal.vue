<template>
  <transition name="ci">
    <div v-bind:class="ns + 'modal'">
      <div v-bind:class="ns + 'modal-container'">
        <slot></slot>
      </div>

      <div v-bind:class="ns + 'dimmer'" v-on:click="modalOnClick"></div>
    </div>
  </transition>
</template>

<script src="./_modal.js"></script>
