<template>
  <div id="app">
    <div id="nav">
      <!--뷰 라우터를 사용할 때는 a 태그 대신 router-link를 사용하면 된다-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <!-- 이 태그를 사용하면 라우터가 경로에 따라 컴포넌트를 바꿔치기 해서 여기에 렌더링 해준다
      그래서 페이지가 바뀌는 것 같아도 HOME도 ABOUT도 index.html 안에서 일어날 수 있는 것
      home컴포넌트는 views 폴더 밑의 Home.vue 파일 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
