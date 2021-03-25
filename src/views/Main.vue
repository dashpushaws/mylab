<template>
  <v-main class="grey lighten-3">
    <Header />
    <v-container>
      <v-row>
        <v-col cols="3" />
        <v-col cols="6">
          <v-autocomplete auto-select-first clearable solo></v-autocomplete>
          <v-btn>dd</v-btn>
        </v-col>
        <v-col cols="3" />
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="1" />
        <v-col cols="10">
          <v-sheet min-height="50vh" rounded="lg"> </v-sheet>
        </v-col>
        <v-col cols="1" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
};
</script>
