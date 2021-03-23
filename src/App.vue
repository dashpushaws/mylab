<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-img
        src="../logo/logo.png" max-height="100" max-width="100" @click="navigateTo(test)"
      ></v-img>
      <!-- <v-avatar tile color="blue" width="100">UPSE.GG</v-avatar> -->

      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="(link, i) in links" :key="i" @click="navigateTo(link)">
          {{ link.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    // links: ["커뮤니티", "스토어", "랭킹"],
    test: { path: "/"},
    links: [
      { text: "커뮤니티", path: "/todo" },
      { text: "스토어", path: "/contacts" },
      { text: "전적검색", path: "/feeds" },
    ],
  }),

  methods: {
    navigateTo(item) {
      /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
      // 현재 경로와 다르면
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        this.$router.push(item.path);
      }
    },
  },
};
</script>