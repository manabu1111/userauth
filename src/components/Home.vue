<template>
  <div id="home">
    <h1>Home</h1>
    <p>Please Sign Up or Sign In first</p>
    <div class="cta">
      <router-link to="/signup">Sign up</router-link>
      <router-link to="/signin">Sign in</router-link>
    </div>
  </div>
</template>

<style scoped>
#home {
  width: 80%;
  margin: auto;
}

h1 {
  text-align: center;
  margin: 30px;
}

p {
  text-align: center;
  margin-bottom: 30px;
}

.cta {
  width: 300px;
  margin: auto;
  text-align: center;
}

.cta a {
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid orange;
  border-radius: 3px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: orange;
}
.cta a:hover {
  background: orange;
  color: white;
}
</style>
