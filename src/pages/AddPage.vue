<template>
  <div>
    
    <AddContactForm @add-contact="handleAddContact" />
  </div>
</template>

<script>
import AddContactForm from '../components/AddContactForm.vue';

export default {
  components: {
    AddContactForm
  },
  methods: {
    handleAddContact(contact) {
      // Pass the contact to the parent (e.g., HomePage.vue or App.vue)
      this.$emit('add-contact', contact);
      // Optionally, redirect to the homepage after adding the contact
      this.$router.push('/');
    }
  }
};
</script>
