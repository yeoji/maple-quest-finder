<template>
  <v-app-bar flat>
    <v-app-bar-title>
      MapleLegends Quest Finder
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn @click="toggleTheme" icon="mdi-theme-light-dark"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()
    theme.global.name.value = localStorage.getItem('theme') || 'dark'

    return {
      theme,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        localStorage.setItem('theme', theme.global.name.value)
      }
    }
  }
}
</script>
