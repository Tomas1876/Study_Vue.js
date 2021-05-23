<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>

    <CompletedTodo />
    <AddTodo />

    <hr>

    <TodoList />

  </div>
</template>

<script>

import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import CompletedTodo from "@/components/CompletedTodo.vue";


export default {
    components:{
        TodoList,
        AddTodo,
        CompletedTodo
    },
    data(){
      return {
        todoText:'',
//        아래의 데이터를 store의 state로 옮긴다        
//        todos:[
//          { id: 1, text:'Vue 강의 듣기', checked:false},
//           { id: 2, text:'rest controller 공부하기', checked:false}
//        ]
      }
    },
    methods:{
      //이 함수들은 이제 store의 mutatinos에서 처리해준다
      /* 
      addTodo(value){
        
        console.log(value)
        this.todos.push({
          id:Math.random(),
          text: value,
          checked:false
        });
        
        this.todoText='';
      },
      //자식 컴포넌트에서 보낸 값을 부모 컴포넌트에서 아래처럼 받을 수 있다(구조분해 할당)
      toggleCheckBox({id,checked}){
        console.log(id,checked)

        const index = this.todos.findIndex(todo => {
          return todo.id === id;
        });

        this.todos[index].checked = checked;
      },
      
      clickDelete(id){

        this.todos = this.todos.filter(todo => todo.id !== id);
      }
      */
    }
}

</script>
