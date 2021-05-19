<!-- K.vue의 부모컴포넌트 -->

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <K>
    
    <!-- 이 사이에 작성하는 코드가 자식컴포넌트의 slot 안에 들어간다 원래는 # 대신 v-slot:header가 원칙-->
    <!--
    <template #header="props">
       <p>!header! {{props.K}}</p>
      -->
    <template #header="{K}">  
      <p>!header! {{K}}</p>
    </template>

    <!-- 이렇게 해주면 따로 name을 지정하지 않은 slot에 들어간다-->
    <template #default>
        !hello!
    </template>
    </K>
  </div>
</template>

<script>
import K from '@/components/K.vue';

export default {
  components:{
    K
  }
}
</script>
