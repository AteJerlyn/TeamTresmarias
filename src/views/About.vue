<template>
  <div class="about-page">
    <h1>About Us</h1>
    <div class="content">
      <p>We are a dedicated team of developers passionate about creating amazing web experiences.</p>
      <p>Our mission is to simplify complex problems through elegant code and intuitive design.</p>
      <div class="stats">
        <div class="stat-item">
          <span class="number">5+</span>
          <span class="label">Years Experience</span>
        </div>
        <div class="stat-item">
          <span class="number">100+</span>
          <span class="label">Projects Delivered</span>
        </div>
        <div class="stat-item">
          <span class="number">15</span>
          <span class="label">Team Members</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-page {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 2rem;
}

.content {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
}

.content p {
  margin-bottom: 1.5rem;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #e5e7eb;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.label {
  font-size: 0.9rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
