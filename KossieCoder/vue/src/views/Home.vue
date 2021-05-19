<!-- 
  vue파일의 컴포넌트는 크게 template, script의 export default, style 세 부분으로 나뉜다
  template 안에는 html 태그가 들어가게 되고
  export default 안에는 datd나 methods, computed 같은 옵션들이 들어간다
  style 안에는 html style이 들어간다
-->

<!-- K.vue의 부모컴포넌트 -->
<template>

  <!-- 컴포넌트 안의 모든 요소들을 감싸는 하나의 div -->
  <div>
      <h1>This is Home page</h1>
     <!-- <K title="Home title" name="K"/> -->

    <!-- 자식 컴포넌트의 props 변경하기 -->
    <form action="">

      <!-- 만약 아래 양식을 페이지에서 자주 사용할 것 같다면 컴포넌트로 빼는 것도 방법이다 
      <label for="">Name</label><br>
      <input type="text" v-model="name" style="padding:30px; border:2px solid green;"><br>
      -->
                              <!-- 자식컴포넌트에서 올린 이벤트와 값을 받아준다-->
      <!--<inputfield :name="name" @update-name="updateName"/>-->

      <!-- 컴포넌트에도 v-model을 사용할 수 있다-->
      <inputfield :name="name" v-model="name"/>
      <button @click="changeName">SUBMIT</button>
    </form>

    {{name}}

  </div>

</template>

<script>
  // 여기서 @는 src를 의미
  //import K from '@/components/K.vue';
  import inputfield from '@/components/inputfield.vue';

  export default{
    //import한 컴포넌트를 사용하겠다고 등록해야 한다
    components:{
      inputfield
    },
    data(){
      return {
        name:'K'
      }
    },
    methods:{
      //이렇게 작성하면 data의 name이 자식컴포넌트에서 올린 e.target.value와 같아진다
      updateName(name){
        this.name=name;
      },
      changeName(){
        this.name='hello';
      }
    },

    // vue 인스턴스의 생애주기
    beforeCreate(){
      
      console.log('beforeCreate',this.name);
      // 출력값 : beforeCreate undefined
      //생성되기 전이기 때문에 this.name으로 접근이 불가능하다
    },
    created(){
       console.log('created',this.name);
       // 출력값 : created K
       // 이때부터 Vue 인스턴스 data에 접근이 가능하다
    },
    beforeMount(){
      alert('beforeMount')
    },
    mounted(){
      alert('mounted')
      //이때부터 dom에 접근이 가능해진다
    },
    beforeUpdate(){
      alert('beforeUpdate')
    },
    updated(){
      alert('updated')
    },
    beforeDestroy(){
      alert('beforeDestroy')
      //메모리 누수를 막기위한 작업은 보통 이 단계에서 한다
    },
    destroyed(){
      alert('destroyed')
    }

  }
</script>

<!--scoped가 있어야 이 파일에만 스타일이 적용된다 
그냥 <style>이라고만 하면 vue 어플리케이션 전체에 적용됨 -->
<style scoped>
h1{
  color:red;
}
</style>