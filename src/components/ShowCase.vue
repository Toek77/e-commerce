<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  if (email.value) {
    alert(`Thank you! Subscribed with: ${email.value}`)
    email.value = ''
  }
}
</script>

<template>
  <div class="showcase">
    <div class="content">
      <h1>Don't miss amazing<br>grocery deals</h1>
      <p>Sign up for the daily newsletter</p>
      <form @submit.prevent="subscribe" class="newsletter-form">
        <input
          v-model="email"
          type="email"
          placeholder="Your email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div class="image">
      <img src="/apples-bag.jpg" alt="Fresh groceries" />
    </div>
  </div>
</template>

<style scoped>
.showcase {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff8e1;
  border: 4px solid #8d6e63;
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0;
  padding: 40px;
  gap: 40px;
}
.content h1 {
  font-size: 3rem;
  color: #333;
  line-height: 1.2;
  margin-bottom: 16px;
}
.content p {
  color: #666;
  margin-bottom: 24px;
}
.newsletter-form {
  display: flex;
  gap: 10px;
  max-width: 400px;
}
.newsletter-form input {
  flex: 1;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}
.newsletter-form button {
  padding: 14px 30px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.newsletter-form button:hover {
  background: #388e3c;
}
.image img {
  max-width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .showcase {
    flex-direction: column;
    text-align: center;
  }
  .content h1 { font-size: 2.2rem; }
}
</style>