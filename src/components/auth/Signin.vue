<template>
  <div class="signup-form">
    <h3>User Sign In</h3>
    <form @submit.prevent="onSubmit">
      <div class="input">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="submit">
        <button type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);

      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password
      });
    }
  }
};
</script>

<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid orange;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 1px 2px orange;
}

h3 {
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid orange;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 7px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.center {
  text-align: center;
  margin-top: 30px;
}
.input.inline label {
  display: inline;
  margin-left: 10px;
}
.input.inline input {
  width: auto;
}
.submit {
  margin-top: 20px;
  text-align: center;
}
.submit button {
  border: 1px solid orange;
  color: orange;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover {
  background: orange;
  color: white;
}
</style>
