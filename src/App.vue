<template>
  <div id="app">
    <Header />
    <router-view :contacts="contacts" @add-contact="addContact" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { reactive } from 'vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      contacts: reactive([]), // Use a reactive array to manage the contacts list
    };
  },
  methods: {
    addContact(contact) {
      // Add the new contact to the contacts array
      this.contacts.push(contact);
    },
  },
};
</script>

<style>
/* Your global styles here */
</style>
