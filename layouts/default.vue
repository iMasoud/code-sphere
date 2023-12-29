<template>
  <div id="root">
    <header>
      <div class="blog-name">
        <NuxtLink to="/"><h1>Code Sphere</h1></NuxtLink>
      </div>
    </header>
    <a-row class="main">
      <a-col
        :span="24"
        :lg="{ span: 12, offset: 6 }"
        :xs="{ span: 22, offset: 1 }"
      >
        <Nuxt />
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&display=swap');

body {
  background-color: #efeff3;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  #root {
    header {
      background: #ff4444;
      height: 200px;
      border-top: 20px solid #cc0000;
      .blog-name {
        width: 760px;
        margin: 38px auto 0 auto;
        h1 {
          font-size: 48px;
          color: #fff;
          font-weight: 400;
        }
      }
    }
    .main {
      margin-top: -40px;
    }
  }
}
</style>
