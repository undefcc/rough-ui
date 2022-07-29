<template>
  <div class="RoughPage">
    <nav-bar />
    <aside class="RoughSidebar">
      <router-link
        v-for="(link, index) in data.links"
        :key="index"
        :to="link.path"
      >
        {{ link.name }}
      </router-link>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import ComponentList from '@pack/list.json'
import NavBar from './components/NavBar/index.vue'
import { reactive } from 'vue'

const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
})
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.RoughPage {
  display: flex;
  min-height: 100vh;
}

.RoughPage > aside {
  width: 200px;
  padding: 15px;
  border-right: 1px solid #ccc;
}
.RoughPage > main {
  width: 100%;
  flex: 1;
  padding: 15px;
}
</style>
