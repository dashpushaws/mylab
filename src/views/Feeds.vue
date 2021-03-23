<template>
  <div>
    <!--반응형 grid layout 컨테이너-->
    <v-container>
      <v-row>
        <!-- 왼쪽 프로필 영역 -->
        <!-- default cols 12, md or higher 3 -->
        <v-col cols="12" md="3">
          left
        </v-col>
        <!-- 가운데 포스트/피드 영역 -->
        <v-col cols="12" md="6">
          content
        </v-col>
        <!-- 오른쪽 부가 기능 영역 -->
        <v-col cols="12" md="3">
          right
        </v-col>                
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  
}
</script>