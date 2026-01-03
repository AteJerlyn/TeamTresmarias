<template>
  <div class="about-page">
    <h1>About Our Team</h1>

    <div class="intro">
      <p>
        We are Senior High School students from <strong>Computer System Institute</strong>,
        driven by curiosity and a passion for technology.
      </p>
      <p>
        As aspiring developers, we work together to create functional and visually
        appealing web applications while sharpening our skills in coding,
        collaboration, and problem-solving.
      </p>
    </div>

    <h2>Meet the Team</h2>

    <div class="team">
      <div class="team-card">
        <router-link to="/profile" class="label link">
            Jerlyn Naz
        </router-link>
      </div>
      <div class="team-card">
        <span class="name">James Errol Bas</span>
      </div>
      <div class="team-card">
        <span class="name">Emerald Doploso</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TeamView'
    }
</script>

<style scoped>
    .about-page {
    padding: 4rem 2rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    }

    h1 {
    font-size: 2.6rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 1.5rem;
    }

    h2 {
    margin-top: 3rem;
    font-size: 1.8rem;
    color: #1f2937;
    }

    .intro {
    background: #f9fafb;
    padding: 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4b5563;
    }

    .intro p {
    margin-bottom: 1rem;
    }

    .team {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
    }

    .team-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2563eb;
    }
    .link {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
    }

    .link:hover {
    text-decoration: underline;
    }

</style>
