<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input v-model="todoText"
           type="text"
           class="w-100 p-2" 
           placeholder="Type todo"
           @keyup.enter="addTodo"
    >
    <hr>

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
    data(){
      return {
        todoText:'',
        todos:[
          { id: 1, text:'Vue 강의 듣기', checked:false},
           { id: 2, text:'rest controller 공부하기', checked:false}
        ]
      }
    },
    methods:{
      addTodo(e){
        console.log(e.target.value)
        this.todos.push({
          id:Math.random(),
          text:e.target.value,
          checked:false
        });
        this.todoText='';
      },
      //자식 컴포넌트에서 보낸 값을 부모 컴포넌트에서 아래처럼 받을 수 있다(구조분해 할당)
      toggleCheckBox({id,checked}){
        console.log(id,checked)

        //findIndex 함수를 사용하면 v-for문의 todo가 todos를 돌면서
        //사용자가 선택한 id와 일치하는 todo.id의 index를 찾는다 그걸 변수에 담고
        const index = this.todos.findIndex(todo => {
          return todo.id === id;
        });

        // 해당하는 index의 todo.checked를 함수가 인자로 받은 checked로 업데이트 해준다
        // 여기의 checked는 자식컴포넌트에서 보낸 e.target.checked 
        this.todos[index].checked = checked;
      },

      clickDelete(id){
        // const index = this.todos.findIndex(todo =>{
        //   return todo.id === id;
        // });
        // this.todos.splice(index,1);

        //위의 방법 대신 필터를 사용할 수도 있다

        //인자로 받은 id와 id가 일치하는 항목을 제외한 나머지 항목만 걸러내서
        //다시 todos에 할당하는 방식
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    }
}

</script>
