<script setup lang="ts">
</script>

<template>
  <section class="showcase">
    <div class="container">
      <div class="text">
        <h1>Don’t miss amazing grocery deals</h1>
        <p>Sign up for the daily newsletter</p>

        <div class="subscribe">
          <input type="email" placeholder=" 🖂  Your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <img src="/banner.png" alt="Grocery banner" />
    </div>
  </section>
</template>

<style scoped>
.showcase {
  width: 100%;
  background: #fff4dc;
  padding: 40px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.text {
  flex: 1;
  max-width: 50%;
  color: #333;
}

.text h1 {
  font-size: 3.5rem;
  margin-bottom: 10px;
  font-family: quicksand, sans-serif;
}

.text p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-family: quicksand, sans-serif;
}

.subscribe {
  display: flex;
  margin-top: 20px;
}

.subscribe input {
  padding: 10px;
  border-radius: 20px 0 0 20px;
  border: none;
  flex: 1;
}

.subscribe button {
  padding: 10px 20px;
  border-radius: 0 20px 20px 0;
  border: none;
  background: #15af41;
  color: white;
  cursor: pointer;
}
.subscribe button:hover {
  background: #0c9a11;
}

img {
  flex: 1;
  max-width: 50%;
  height: auto;
  border-radius: 12px;
}

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .text {
    max-width: 100%;
  }

  img {
    max-width: 100%;
  }

  .text h1 {
    font-size: 2rem;
  }

  .text p {
    font-size: 1rem;
  }
}
</style>