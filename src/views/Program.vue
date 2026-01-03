<template>
  <div class="program-page">
    <div class="hero">
      <h1>Our Program</h1>
      <p>Building the future of web applications with Vue.js</p>
    </div>
    <div class="features">
      <div class="feature-card">
        <h3>Innovation</h3>
        <p>Using the latest technologies to solve real-world problems.</p>
      </div>
      <div class="feature-card">
        <h3>Performance</h3>
        <p>Optimized for speed and efficiency across all devices.</p>
      </div>
      <div class="feature-card">
        <h3>Scalability</h3>
        <p>Designed to grow with your needs from day one.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramView'
}
</script>

<style scoped>
.program-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
  border-radius: 20px;
}

.hero h1 {
  font-size: 3rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  color: #6b7280;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #2563eb;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: #4b5563;
  line-height: 1.6;
}
</style>
