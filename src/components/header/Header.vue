<template>
  <header>
    <h1>
      <router-link to="/">Office dam</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li>
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 70px;
  background: orange;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

h1 {
  display: flex;
  align-items: center;
  padding-left: 10%;
  cursor: pointer;
  border: none;
}

h1 a {
  text-decoration: none;
  color: white;
}
nav {
  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
nav ul {
  cursor: pointer;
  display: flex;
  list-style: none;
}
nav li {
  padding: 15px;
}
nav li a {
  color: white;
  text-decoration: none;
}
nav li a:hover {
  color: lightcoral;
}
</style>