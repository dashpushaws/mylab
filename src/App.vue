<template>
  <v-app>
    <router-view />
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

  created() {
    // vuex관련 코드, 프로젝트에는 사용x
    console.log(this.$store.state.count)
    console.log('hi', this.$store.commit('increment'))
    console.log(this.$store.state.count)
  }
  

};
</script>