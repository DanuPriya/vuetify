<template>
  <div class="text-md-center">
    <h2>Register</h2>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <v-card>
          <v-card-text>
            <v-text-field v-model="register.username" label="Username" required></v-text-field>
            <v-text-field v-model="register.email" label="Email" required></v-text-field>
            <v-text-field v-model="register.password" label="Password" required></v-text-field>
          </v-card-text>
          <v-btn class="mb-3" color="green" @click="registerBtn">Register</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      register: {
        uername: "",
        email: "",
        password: "",

        error: false
      }
    };
  },
  methods: {
    registerBtn() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          let contacts = response.data;
          console.log(contacts);
          this.$router.push("/contact");
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        });
    }
  }
};
</script>