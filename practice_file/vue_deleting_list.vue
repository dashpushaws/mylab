<!-- SFC에서 UI구조는 <template> -->
<!-- template의 최상위 요소는 한개만 가능하다 -->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="del(index)">{{ item.memo }}</li>
      <!--key: 반복요소간의 구분값, 변경에 따른 다시 그리기 추적값-->
    </ul>
    <div>
    </div>
  </div>
</template>
<!-- scoped -> 현재 컴포넌트에서만 스타일 작동 -->
<style scoped>
  li:hover {cursor: pointer;background-color: grey; text-decoration: line-through;}
</style>
<script>
  module.exports = {
      props: ['list'],  // 속성: 다른 컴포넌트로부터 속성을 내려 받음     
      methods: {
        del: function(index){
          const deletedItem = this.list.splice(index, 1);
          // 커스텀 이벤트 올리기(호출)
          // this.$emit('이벤트명', 매개변수);
          this.$emit('item-deleted', deletedItem);
        }        
      }
  }
</script>
