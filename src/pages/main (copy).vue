<template>
  <q-page class="row">
    <q-list no-border class="center">
      <q-list-header inset>Объекты учета</q-list-header>
      <q-item>
        <q-item-side icon="class" inverted color="orange" />
        <q-item-main>
          <q-item-tile label>Подразделения........................................ </q-item-tile>
          <q-item-tile sublabel>Последние изменение: 22.07.2019</q-item-tile>
        </q-item-main>
        <q-item-side right icon="class" color="green" />
      </q-item>
      <q-item>
        <q-item-side icon="class" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Photos</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="class" color="green" />
      </q-item>
      <q-item>
        <q-item-side icon="class" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Photos</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="green" />
      </q-item>
      <q-item>
        <q-item-side icon="folder" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Photos</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="green" />
      </q-item>
      <q-item-separator inset />
      <q-list-header inset>Files</q-list-header>
      <q-item>
        <q-item-side icon="assignment" inverted color="grey-6" />
        <q-item-main>
          <q-item-tile label>Expenses spreadsheet</q-item-tile>
          <q-item-tile sublabel>March 2nd, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" />
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
  .center {
    margin-left: auto;
      margin-right: auto;
      width: 80%
}
</style>

<script>
export default {
  name: 'PageContents'
}
</script>
