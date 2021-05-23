import Vue from 'vue';
import Vuex from 'vuex';

//vue에 vuex 플러그인을 사용하겠다는 뜻
Vue.use(Vuex);

//store안에 네 개의 객체가 들어간다
//state: 데이터가 들어감(컴포넌트 내부의 data와 비슷)
//actions: 함수가 들어감(비동기적인 작업들은 여기서 처리된다), 데이터를 바꿔달라고 mutations에게  요청
//mutations: 실질적으로 데이터가 변경되는 곳 이곳을 통해 데이터를 변경할 수 있다
//getters: vue 컴포넌트 내부의  computed와 비슷하다

export default new Vuex.Store({
    state:{

        todos:[
            { id: 1, text:'Vue 강의 듣기', checked:false},
             { id: 2, text:'rest controller 공부하기', checked:false}
          ]
        
    },
    mutations:{

        //mutations 안의 인자로는 보통 state와 넘어오는 데이터 등을 넣어준다
        ADD_TODO(state, value){
            console.log(value)
                state.todos.push({
                id:Math.random(),
                text: value,
                checked:false
            });
        },
        TOGGLE_TODO(state,{id,checked}){

            console.log(id,checked);

            const index = state.todos.findIndex(todo => {
              return todo.id === id;
            });
    
            state.todos[index].checked = checked;

        },
        DELETE_TODO(state, todoId){
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        }

    },
    actions:{

    },
    getters:{

    }
});