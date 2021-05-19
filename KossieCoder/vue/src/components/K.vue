<!--자식컴포넌트-->
<template>
    
    <div>
        <!--
        <h1>{{ title }}</h1>
        <p>{{ name }}</p>-->
      <!--  <button @click="updateName">Update Name</button>-->

      <p>Header</p>
                        <!--자식 컴포넌트의 데이터를 부모 컴포넌트로 올릴 수 있다-->
      <slot name="header" :K="K"></slot>
      <p>Body</p>
      <slot></slot>
      <p>Footer</p>
    </div>

</template>

<script>

    export default{

        //동일한 컴포넌트를 사용하는데 일부분만 다르게 하고 싶을 경우
        //props를 사용한다(여러 개 사용 가능)
        //[] 안에 써준 내용을 컴포넌트를 사용하는 페이지에서 태그의 attribute처럼 써준다
        props:{
            title:{
                type:String, //String 타입만 허용한다는 뜻
                //required:true //이 props를 항상 보내겠다는 뜻 만약 true인데 부모컴포넌트에서 쓰지 않으면 에러가 난다
                default: 'default title' //데이터를 안 보냈을 경우 기본적으로 보여줄 값
            },
            name:{
                type:String,
                default: 'default name'
            }
        },
        data(){
            return {
                K:'coder'
               // name: 'K'
            }           
        },
        methods:{
            //data()를 통해서가 아니라 props로 값을 정해준 경우 이렇게 자식 컴포넌트에서 직접적으로 값을 변경할 수 없다
            //변경하고 싶다면 부모 컴포넌트에 값을 변경해달라고 요청을 보내야 한다
            //updateName(){
            //    this.name='K updated';
            //}
        }
    }

</script>

<style scoped>

</style>