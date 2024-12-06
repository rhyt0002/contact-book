<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/add">Add Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #e05138;
  padding: 25px;
  text-align: center;
}

nav ul {
  list-style-type: none;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a {
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
   font-size: 30px;
  text-decoration: none;
  font-weight: bold;
}
</style>
