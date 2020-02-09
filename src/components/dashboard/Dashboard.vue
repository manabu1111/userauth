<template>
  <div>
    <h1>This is the DashBoard Page</h1>
    <p>You should only get here if you're authenticated</p>
    <p>Your Email : {{ email }}</p>
    <p>Your User Name : {{ username }}</p>
  </div>
</template>
<script>
/* eslint-disable no-console */
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      username: ""
    };
  },
  created() {
    axios
      .get("/users.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        this.email = users[0].email;
        this.username = users[0].username;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 30px;
}
p {
  text-align: center;
  line-height: 1.4em;
}
</style>
