<template>
  <div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <p>Phone: {{ contact.phone }}</p>
    <router-link :to="'/edit/' + contact.id">Edit Contact</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contactId = this.$route.params.id;
    this.contact = this.$store.getters.getContactById(contactId); // You can also replace it with your own state management
  },
};
</script>
