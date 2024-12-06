<template>
  <div>
    <h2>Edit Contact</h2>
    <form @submit.prevent="editContact">
      <input v-model="contact.firstName" placeholder="First Name" />
      <input v-model="contact.lastName" placeholder="Last Name" />
      <input v-model="contact.email" placeholder="Email" />
      <button type="submit">Update Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
  data() {
    return {
      contact: { ...this.contact }, // Create a copy to avoid mutating the prop directly
    };
  },
  methods: {
    editContact() {
      this.$emit('edit-contact', this.contact); // Emit the edited contact back to the parent
      this.$router.push('/'); // Navigate back to the homepage
    },
  },
};
</script>
