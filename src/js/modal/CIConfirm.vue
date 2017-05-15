<template>
  <transition name="ci">
    <div v-bind:class="[
        ns + 'modal',
        ns + 'modal-confirm'
      ]">
      <div v-bind:class="ns + 'modal-dialog'">
        <div v-bind:class="ns + 'modal-header'" v-if="title">{{title}}</div>
        <div v-bind:class="ns + 'modal-body'" v-if="content">{{content}}</div>
        <div v-bind:class="ns + 'modal-body'" v-else><slot>Are you sure?</slot></div>
        <div v-bind:class="ns + 'modal-footer'">
          <a v-bind:class="ns + 'modal-btn'" href="javascript:;"
            v-on:click="cancel">{{cancelText}}</a>
          <a v-bind:class="ns + 'modal-btn'" href="javascript:;"
            v-on:click="ok">{{okText}}</a>
        </div>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
</template>

<script src="./_confirm.js"></script>
