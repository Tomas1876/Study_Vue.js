<template>
      <div class="mb-2 d-flex">

        <div>
            <!--{{todo.checked}}-->
            <input type="checkbox" :checked="todo.checked" @change="toggleCheckBox">
        </div>

        <span
             class="ml-3 flex-grow-1"
             :class="todo.checked ? 'text-muted' : ''"
             :style="todo.checked ? 'text-decoration:line-through' : ''">
            {{todo.text}}
        </span>

        <button class="btn btn-danger btn-sm" @click="clickDelete">Delete</button>
    </div>
</template>

<script>
export default{
    props:{
        todo:{
            type:Object,
            required: true
        }
    },
    methods:{
        toggleCheckBox(e){
            /* vuex를 사용하기 전의 함수
            this.$emit('toggle-checkBox',{
                id:this.todo.id,
                checked:e.target.checked
            })
            */

           this.$store.commit('TOGGLE_TODO',{
                id:this.todo.id,
                checked:e.target.checked
           })

        },
        clickDelete(){
            // vuex를 사용하기 전의 함수
            // this.$emit('click-delete', this.todo.id);

            //props는 부모컴포넌트에서 자식으로 데이터를 보내기 위한 요소
            //props로 todo라는 객체를 내려보냈기 때문에 여기서 this.todo.id로 접근할 수 있다
            this.$store.commit('DELETE_TODO',this.todo.id);
        }
    }
}

</script>

<style>

</style>