<template>
<div>
      <Todo v-for="todo in todos"
          :key="todo.id" 
          :todo="todo"
          @toggle-checkBox="toggleCheckBox"
          @click-delete="clickDelete"
    />
</div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
    components:{
        Todo
    },
    computed:{
        todos(){
            return this.$store.state.todos;
        }
    },
    methods:{
        //현재 최하위 컴포넌트인 Todo.vue에서 $emit을 사용해 올려준 값(value와 todoid)를 각각 받아서
        //다시 $emit을 이용해 App.vue로 올려준다 
        toggleCheckBox(value){
            this.$emit('toggle-checkBox',value)
        },
        clickDelete(todoId){
            this.$emit('click-delete', todoId);
        }
    }
}
</script>

<style>

</style>