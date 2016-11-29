<template>
  <transition name="ci">
    <div v-bind:class="[
        ns + 'modal',
        ns + 'modal-alert'
      ]">
      <div v-bind:class="ns + 'modal-dialog'">
        <div v-bind:class="ns + 'modal-header'" v-if="title">{{title}}</div>
        <div v-bind:class="ns + 'modal-body'" v-if="content">{{content}}</div>
        <div v-bind:class="ns + 'modal-body'" v-else><slot>Hello CafeInit</slot></div>
        <div v-bind:class="ns + 'modal-footer'">
          <a v-bind:class="ns + 'modal-btn'" href="javascript:;"
            v-on:click="buttonOnClick">{{okText}}</a>
        </div>
      </div>

      <div v-bind:class="ns + 'dimmer'" v-on:click="modalOnClick"></div>
    </div>
  </transition>
</template>

<script src="./_alert.js"></script>
