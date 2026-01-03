<template>
  <div class="profile-page">
    <div class="profile-card">
      <img
        src="@/assets/jerlyn.jpg"
        alt="Jerlyn Naz"
        class="profile-img"
      />

      <h1>Jerlyn Naz</h1>
      <p class="subtitle">Senior High School Student</p>

      <ul class="info">
        <li><strong>Age:</strong> 17</li>
        <li><strong>Sex:</strong> Female</li>
        <li><strong>Birthday:</strong> March 29, 2008</li>
        <li><strong>Religion:</strong> Roman Catholic</li>
        <li><strong>Address:</strong> Zone 3, Bitano Legazpi City</li>
        <li><strong>School:</strong> Computer System Institute</li>
        <li><strong>Strand:</strong> TVL</li>
        <li>
          <strong>Hobbies:</strong>
          Drawing, Crocheting, Nail Art, Cooking, Sewing
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'ProfileView'
    }
</script>

<style scoped>
    .profile-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fafb;
    padding: 2rem;
    }

    .profile-card {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }

    .profile-img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 4px solid #2563eb;
    }

    h1 {
    margin: 0.5rem 0;
    color: #111827;
    }

    .subtitle {
    color: #6b7280;
    margin-bottom: 1.5rem;
    }

    .info {
    list-style: none;
    padding: 0;
    text-align: left;
    }

    .info li {
    margin-bottom: 0.6rem;
    color: #374151;
    }
</style>
