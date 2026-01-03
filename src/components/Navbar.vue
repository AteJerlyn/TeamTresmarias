<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <span class="system-name">Team Tresmarias</span>
    </div>
    <div class="navbar-menu">
      <router-link to="/" class="nav-item">Program</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      
      <div class="dropdown" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
        <button class="nav-item dropdown-toggle">
          Developers
          <span class="arrow" :class="{ 'rotated': isDropdownOpen }">▼</span>
        </button>
        <transition name="fade">
          <ul v-if="isDropdownOpen" class="dropdown-menu">
            <li><router-link to="/profile" class="dropdown-item">Jerlyn Naz</router-link></li>
            <li><router-link to="/developers/backend" class="dropdown-item">James Errol Bas</router-link></li>
            <li><router-link to="/developers/devops" class="dropdown-item">Emerald Doploso</router-link></li>
          </ul>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isDropdownOpen: false
    }
  }
}
</script>

<style scoped>
/* Core Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar-brand .system-name {
  font-family: 'Inter', sans-serif; /* Modern font */
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #2563eb, #7c3aed); /* Vibrant gradient text */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.nav-item:hover, .nav-item:focus {
  color: #2563eb;
}

/* Underline animation for links */
.nav-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #2563eb;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

/* Dropdown Styles */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  min-width: 180px;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin-top: 0.5rem;
  border: 1px solid rgba(0,0,0,0.05);
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  color: #374151;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.dropdown-item:hover {
  background-color: #eff6ff;
  color: #2563eb;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
