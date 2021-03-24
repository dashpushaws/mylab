<template>
  <v-app>
    <v-app-bar app color="blue" flat>
      <v-img
        src="../logo/logo.png"
        max-height="70"
        max-width="100"
        @click="navigateTo(home)"
      ></v-img>

      <!-- <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="31"
      ></v-avatar> -->
      <v-tabs fixed-tabs centered color="white">
        <!-- <v-tabs fixed-tabs background-color="indigo" dark> -->
        <v-tab v-for="(link, i) in links" :key="i" @click="navigateTo(link)">
          {{ link.text }}
        </v-tab>
        <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      <v-text-field
        color="deep-purple"
        counter="6"
        label="Password"
        style="min-height: 5px"
        type="password"
      ></v-text-field>
      <v-text-field
        color="deep-purple"
        label="Phone number"
      ></v-text-field>
        </v-form>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    // links: ["커뮤니티", "스토어", "랭킹"],
    home: { path: "/" },
    links: [
      { text: "게시판", path: "/board" },
      { text: "스토어", path: "/store" },
      { text: "랭킹", path: "/feeds" },
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