<template>
  <div class="home-page">
    <h1>Contacts</h1>
    <div class="contacts-list">
      <div v-for="contact in contacts" :key="contact.id" class="contact-card">
        <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
        <p>Email: {{ contact.email }}</p>
        <p>Phone: {{ contact.phoneNumber }}</p>  <!-- Displaying Phone Number -->
        <div class="actions">
          <button class="edit-btn" @click="editContact(contact.id)">Edit</button>  <!-- Edit Button -->
          <button class="delete-btn" @click="deleteContact(contact.id)">Delete</button>  <!-- Delete Button -->
        </div>
      </div>
    </div>
    <!-- Edit Contact Form -->
    <div v-if="isEditFormVisible" class="edit-form">
      <h2>Edit Contact</h2>
      <form @submit.prevent="updateContact">
        <label for="firstName">First Name</label>
        <input v-model="editContactData.firstName" type="text" id="firstName" required />
        
        <label for="lastName">Last Name</label>
        <input v-model="editContactData.lastName" type="text" id="lastName" required />
        
        <label for="phoneNumber">Phone Number</label>
        <input v-model="editContactData.phoneNumber" type="text" id="phoneNumber" required />
        
        <label for="email">Email</label>
        <input v-model="editContactData.email" type="email" id="email" required />
        
        <button type="submit">Update Contact</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
      isEditFormVisible: false,
      editContactData: {
        id: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      },
    };
  },
  
  methods: {
    deleteContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    },
    editContact(id) {
      const contactToEdit = this.contacts.find(contact => contact.id === id);
      if (contactToEdit) {
        this.editContactData = { ...contactToEdit };
        this.isEditFormVisible = true;
      }
    },
    updateContact() {
      const index = this.contacts.findIndex(contact => contact.id === this.editContactData.id);
      if (index !== -1) {
        this.contacts.splice(index, 1, this.editContactData);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        this.isEditFormVisible = false;
      }
    },
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #eef2f6; /* Soft light background */
  margin: 0;
  padding: 0;
  color: #333; /* Neutral text color */
  line-height: 1.6;
}

.home-page {
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50; /* Darker header color */
  font-weight: 700;
}

/* Contacts Container */
.contacts-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 40px;
  justify-items: center;
  margin-bottom: 30px;
}

.contact-card {
  background: #ffffff; /* Clean white background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Softer shadow */
  text-align: center;
  width: 100%;
  max-width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.contact-card h3 {
  font-size: 1.6rem;
  color: #34495e;
  margin-bottom: 12px;
  font-weight: 600;
}

.contact-card p {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 12px;
}

.contact-card .phone-number {
  font-size: 1rem;
  font-weight: 500;
  color: #27ae60; /* Emphasize phone numbers with green */
  margin-bottom: 18px;
}

/* Actions */
.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

button {
  padding: 10px 18px;
  font-size: 0.95rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.edit-btn {
  background-color: #0078d7; /* Modern blue */
  color: #ffffff;
  box-shadow: 0 3px 10px rgba(0, 120, 215, 0.2);
}

.edit-btn:hover {
  background-color: #005a9e;
  transform: translateY(-4px);
}

.delete-btn {
  background-color: #e63946; /* Vibrant red */
  color: #ffffff;
  box-shadow: 0 3px 10px rgba(230, 57, 70, 0.2);
}

.delete-btn:hover {
  background-color: #d62839;
  transform: translateY(-4px);
}

/* Edit Form */
.edit-form {
  background: #ffffff;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

.edit-form h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #34495e;
  display: block;
  margin-bottom: 6px;
}

input {
  padding: 12px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #ccd1d9;
  border-radius: 8px;
  background-color: #f9fbfd;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

input:focus {
  border-color: #0078d7;
  background-color: #ffffff;
  outline: none;
}

button[type="submit"] {
  background-color: #0078d7;
  color: white;
  font-weight: 600;
  padding: 12px;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #005a9e;
  transform: translateY(-4px);
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-page {
    padding: 20px 15px;
  }

  .contacts-list {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  .edit-form {
    padding: 20px;
  }

  h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .contact-card {
    max-width: 100%;
    padding: 15px;
  }

  button {
    padding: 8px 12px;
    font-size: 0.9rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  .edit-form h2 {
    font-size: 1.8rem;
  }
}


</style>
