<template>
  <div>

          <input v-model="todoText"
           type="text"
           class="w-100 p-2" 
           placeholder="Type todo"
           @keyup.enter="addTodo"
    >

  </div>
</template>

<script>
export default {
    data(){
      return {
        todoText:''
        }
    },
    methods:{
        addTodo(e){
           // 이제 데이터를 부모컴포넌트가 아니라 store에서 가지고 있으니
           // 데이터를 올리지 않고 mutations를 사용한다
           // this.$emit("add-todo",e.target.value);

           //mutations 접근법
           this.$store.commit('ADD_TODO', e.target.value);
           this.todoText='';
        }
    }
}
</script>

<style>

</style>