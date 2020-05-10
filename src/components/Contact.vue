<template>
  <div>
    <h1>Contacts</h1>
    <p
      v-if="error"
    >We're sorry, we're not able to retrieve this information at the moment, please try back later</p>

    <table v-if="!error" class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.id }}</td>

          <td>{{ contact.name }}</td>

          <td>{{ contact.username }}</td>

          <td>{{ contact.email }}</td>

          <td>{{ contact.address.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Contact",

  data() {
    return {
      contacts: null,
      error: false
    };
  },

  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.contacts = response.data))
      .catch(error => {
        console.log(error);
        this.error = true;
      });
  }
};
</script>