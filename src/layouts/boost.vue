<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="tertiary">
        <q-btn
          flat round dense
          size="xl"
          icon="menu"
          @click="menuClicked"
        />
        <q-toolbar-title>
          Электронный формуляр
        </q-toolbar-title>
        <q-btn flat round dense icon="mail" size="lg"/>
        <q-btn flat round dense icon="shield" size="lg" />
        <q-btn flat round dense icon="help" size="lg" />
        <q-btn flat round dense icon="settings" size="lg" />
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer
      content-class="bg-grey-3"
      side="left"
      v-model="leftDrawer">
      <q-list-link>
        <q-item>
          <q-btn
            size="lg"
            round
            label="User"
            color="tertiary"
            icon="person" />
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-title lable>Шариков П.П.</q-item-title>
          </q-item-main>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-main>
            <q-item-tile label>Password</q-item-tile>
            <q-item-tile sublabel>Require password for purchase</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>Password</q-item-tile>
            <q-item-tile sublabel>Require password for purchase</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-main>
            <q-item-tile label>Настройки</q-item-tile>
            <q-item-tile sublabel>Настройки приложения</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list-link>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { openURL } from 'quasar'

export default {
  name: 'BoostLayout',
  data () {
    return {
      leftDrawer: true
    }
  },
  methods: {
    menuClicked: function () {
      console.log('Clicked')
      this.leftDrawer = !this.leftDrawer
    }
  }
}
</script>

<style>
</style>
