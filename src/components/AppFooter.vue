<template>
  <footer class="container">
    <section class="copyright">
      <font-awesome-icon icon="fa-solid fa-copyright"/>
      2022 Winder
    </section>
    <section class="links">
      <p class="link-text">About Us</p>
      |
      <p to="/" class="link-text">Contact Us</p>
      |
      <p class="link-text">Directions</p>
    </section>
    <section class="social-media-icons">
      Follow Us&nbsp;
      <p
      >
        <font-awesome-icon
            icon="fa-brands fa-square-twitter"
            size="lg"
        />
      <p
      >&nbsp;
      <p
      >
        <font-awesome-icon
            icon="fa-brands fa-square-facebook"
            size="lg"
        />
      <p
      >&nbsp;
      <p
      >
        <font-awesome-icon icon="fa-brands fa-square-instagram" size="lg"/>
      <p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
footer {
  color: white;
  background: rgba(59, 130, 215, 0.99);
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Monda;
  font-size: 20px;
  gap: 6px;
  padding: 0.25rem;
}

.copyright,
links,
social-media-icons {
  padding: 0.25rem;
  /*border: 2px solid #009688;*/
}

.link-text {
  text-decoration: none;
}

.link-text:hover {
  text-decoration: underline 1.5px;
}
</style>