<template>
  <div class="add-contact-container">
    <div class="add-contact-card">
      <h1>Add New Contact</h1>
      <form @submit.prevent="addContact">
        <input
          v-model="newContact.firstName"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          v-model="newContact.lastName"
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          v-model="newContact.phoneNumber"
          type="text"
          placeholder="Phone Number"
          required
        />
        <input
          v-model="newContact.email"
          type="email"
          placeholder="Email"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      },
    };
  },
  methods: {
    addContact() {
      const contactId = Date.now().toString(); // Generate unique ID
      const contact = { id: contactId, ...this.newContact };

      // Retrieve contacts from localStorage
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

      // Add the new contact
      contacts.push(contact);

      // Save to localStorage
      localStorage.setItem('contacts', JSON.stringify(contacts));

      // Clear the form
      this.newContact = { firstName: '', lastName: '', phoneNumber: '', email: '' };

      // Redirect to Home Page
      this.$router.push('/');
    },
  },
};
</script>



<style scoped>
.add-contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.add-contact-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.add-contact-card h1 {
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #444;
  margin-bottom: 20px;
}

.add-contact-card form {
  display: flex;
  flex-direction: column;
}

.add-contact-card input {
  font-size: 16px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-contact-card input:focus {
  border-color: #8bc34a;
  outline: none;
}

.add-contact-card button {
  background-color: #00c9ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.add-contact-card button:hover {
  background-color: #0080ff;
}

footer {
  text-align: center;
  margin-top: 30px;
  font-size: 12px;
  color: #444;
}

</style>
