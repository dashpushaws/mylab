<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-subheader>MENU</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" @click="navigateTo(item)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>    
  </v-navigation-drawer>

  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>MY WORKSPACE</v-app-bar-title>
    <div style="width:100%; text-align:right;">
      <v-avatar size="28" class="mr-3">
        <v-img :src="profile.image" :alt="profile.userId"></v-img>
      </v-avatar>
      <v-icon v-if="!$vuetify.theme.dark" @click="changeTheme()">mdi-white-balance-sunny</v-icon>
    </div>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
  </v-footer>
</v-app>  
</template>
<script>

</script>