
<!-- 완료된 todo의 개수를 보여주는 컴포넌트-->

<template>
  <div>

      Completed Todo : {{numberOfCompletedTodo}}

  </div>
</template>

<script>
export default {
    computed:{
       numberOfCompletedTodo(){
           //filter는 원본배열을 훼손하지 않고 새 배열을 반환하는 함수이므로
           //filter를 이용해 체크된 항목들로만 이루어진 배열을 만든 뒤 그 길이를 반환
           return this.todos.filter(todo => todo.checked).length;
       },

       //stroe의 index.js의 state에 있는 todos를 가져올 것
       //state 안의 데이터를 가져올 때는 computed에 작성한다
       //그러면 state의 값이 바뀔 때마다 computed가 업데이트 돼
       //최신값을 유지하게 된다
        todos(){
            return this.$store.state.todos;
        }

    }
}
</script>

<style>

</style>