import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    menu: [
      {
        id: 'home',
        active: false,
        text: 'menu.home',
        path: '/',
        hash: '#home'
      },
      {
        id: 'about',
        text: 'menu.about',
        path: '/',
        hash: '#about'
      },
      {
        id: 'education',
        active: false,
        text: 'menu.education',
        path: '/',
        hash: '#education'
      },
      {
        id: 'work',
        active: false,
        text: 'menu.work',
        path: '/',
        hash: '#work'
      },
      {
        id: 'skills',
        active: false,
        text: 'menu.skills',
        path: '/',
        hash: '#skills'
      },
      {
        id: 'portfolio',
        active: false,
        text: 'menu.portfolio',
        path: '/',
        hash: '#portfolio'
      }
    ]
  }),
  actions: {
    toggleMenu (i) {
      this.menu[i].showGroup = !this.menu[i].showGroup
    },
    highlightMenuItem (id) {
      this.menu.forEach(item => item.active = false)
      const menuItem = this.menu.find(el => el.id === id)
      if (menuItem) {
        menuItem.active = true
      }
    }
  }
})
