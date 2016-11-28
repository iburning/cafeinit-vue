<template>
  <transition name="ci">
    <div v-bind:class="ns + 'modal'" v-on:click="modalOnClick">
      <div v-bind:class="ns + 'modal-actions'">
        <div class="ci-modal-actions-group">
          <ci-list>
            <ci-list-cell v-for="(item, index) in items"
              v-bind:class="[
                item.className,
                (selectedIndex == index) ? 'am-active': ''
              ]"
              v-on:click="itemOnClick(index, item)">
              <router-link v-if="item.to" v-bind:to="item.to">{{item.text}}</router-link>
              <a v-else href="javascritp:;">{{item.text}}</a>
            </ci-list-cell>
          </ci>
        </div>

        <div class="ci-modal-actions-group">
          <a class="ci-btn ci-btn-default ci-btn-block" href="javasrcript:;"
            v-on:click="cancelButtonOnClick">{{cancelText}}</a>
        </div>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
</template>

<script src="./_actions.js"></script>
