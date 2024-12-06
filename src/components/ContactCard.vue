<template>
  <div class="contact-card">
    <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
    <p>Email: {{ contact.email }}</p>
    <button @click="deleteContact" class="delete-button">Delete Contact</button>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object
  },
  methods: {
    deleteContact() {
      // Get contacts from localStorage
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

      // Filter out the contact to be deleted by its ID
      const updatedContacts = contacts.filter(c => c.id !== this.contact.id);

      // Save the updated contacts back to localStorage
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // After deleting, redirect to the home page to show updated contacts
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style scoped>
.contact-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
}

.delete-button {
  background-color: #BDE038; /* Red color */
  color: black;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #D6D58E; /* Darker red on hover */
}
</style>
