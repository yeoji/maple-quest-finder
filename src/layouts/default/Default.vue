<template>
  <v-app>
    <default-bar />

    <default-view />

    <v-footer class="flex-column">
      <div>If you see something wrong with the data, feel free to <a href="https://github.com/yeoji/maple-quest-finder/tree/master/data">update it here</a> 
        or <a href="https://github.com/yeoji/maple-quest-finder/issues">open an issue.</a></div>
    </v-footer>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
