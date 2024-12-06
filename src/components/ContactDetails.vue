<template>
  <div class="contact-details">
    <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
    <p>Email: {{ contact.email }}</p>
    <p>Phone: {{ contact.phone }}</p>
    <router-link :to="'/edit/' + contact.id">Edit Contact</router-link>
    <button @click="deleteContact">Delete Contact</button>
  </div>
</template>

<script>
export default {
  props: ['contact'],
  methods: {
    deleteContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts'));
      contacts = contacts.filter((c) => c.id !== this.contact.id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push('/');
    },
  },
};
</script>

<style>
.contact-details {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  background: #e91e63;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #f44336;
}
</style>
