<template>
  <header class="header">
    <!-- TOP BAR -->
    <div class="top-bar">
      <div class="logo">
        <img
          src="/logo.png"
          alt="Melon Mart"
        />
      </div>

      <SearchBox class="search-section" />

      <div class="top-icons">
  
        <RouterLink to="/account" class="icon-link">👤Account</RouterLink>
        <RouterLink to="/compare" class="icon-link">🗘 Compare</RouterLink>
        <RouterLink to="/wishlist" class="icon-link">❤ Wishlist</RouterLink>
        <RouterLink to="/cart" class="icon-link">🛒Cart</RouterLink>
      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="bottom-bar">
      <button class="browse-btn">☐ Browse All</button>

      <nav class="menu-nav">
        <MenuItem label="Hot Deals" />
        <MenuItem label="Home" />
        <MenuItem label="Food" :hasDropdown="true" />
        <MenuItem label="Vegetables" :hasDropdown="true"  />
        <MenuItem label="Drink" />
        <MenuItem label="Cookies" />
        <MenuItem label="Meat & Seafood" />
        <MenuItem label="Bakery" />
      </nav>


      <div class= "support-info">
          <img src ="/phone.png" alt="Support" />
        <div>
           <div class="phone">1900-8888</div>
           <div class="support-text">24/7 Support</div>
        </div>
       
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import MenuItem from '@/components/MenuItem.vue'
</script>

<style scoped>
.header {
  width: 100%;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* shared row */
.top-bar,
.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 32px;
}

/* logo */
.logo img {
  height: 48px;
}

/* search */
.search-section {
  flex: 1;
  max-width: 600px;
  margin: 0 32px;
}

/* icons */
.top-icons {
  display: flex;
  gap: 24px;
}

.icon-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.icon-link:hover {
  color:green;
}

/* bottom bar */
.browse-btn {
  background: #e8f5e9;
  color:white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #4CAF50;
}

.menu-nav {
  display: flex;
  gap: 24px;
  flex: 1;
  justify-content: center;
  white-space: nowrap;
}

.support-info {
  display: flex;
  flex-direction: row;
  text-align: right;
  color:#333;
  align-items: center;
}

.support-info img {
  width: 32px;
  height: 32px;
  margin-right: 8px;

}

.phone {
  font-size: 18px;
  font-weight: 600;
  color:#4CAF50;
}

.support-text {
  font-size: 12px;
}
</style>
