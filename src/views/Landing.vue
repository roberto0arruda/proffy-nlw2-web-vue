<template>
  <div id="page-landing">
    <div id="page-landing-content" class="container">
      <div class="logo-container">
        <img src="@/assets/images/logo.svg" alt="proffy" />
        <h2>Sua plataforma de estudos online.</h2>
      </div>

      <img
        src="@/assets/images/landing.svg"
        alt="landingImg"
        class="hero-image"
      />

      <div class="buttons-container">
        <router-link :to="{ name: 'Study' }" class="study">
          <img src="@/assets/images/icons/study.svg" alt="Estudar" />
          Estudar
        </router-link>

        <router-link :to="{ name: 'GiveClasses' }" class="give-classes">
          <img src="@/assets/images/icons/give-classes.svg" alt="Dar Aulas" />
          Dar Aulas
        </router-link>
      </div>

      <span class="total-connections">
        Total de {{ totalConnections }} conexões ja realizadas
        <img src="@/assets/images/icons/purple-heart.svg" alt="heart" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import api from "@/services/api";

@Component
export default class Landing extends Vue {
  totalConnections = 0;

  created() {
    api.get("/connections").then(response => {
      this.totalConnections = response.data.total;
    });
  }
}
</script>

<style>
#page-landing {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
}

.logo-container img {
  height: 10rem;
}

.hero-image {
  width: 100%;
}

.logo-container {
  text-align: center;
  margin-bottom: 3.2rem;
}

.logo-container h2 {
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
}

.buttons-container {
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
}

.buttons-container a {
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  margin-right: 1.6rem;
  font: 700 2rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  transition: background-color 0.2s;
}

.buttons-container a:first-child {
  margin-right: 1.6rem;
}

.buttons-container a img {
  width: 4rem;
}

.buttons-container a.study {
  background: var(--color-primary-lighter);
}

.buttons-container a.give-classes {
  background: var(--color-secondary);
}

.buttons-container a.study:hover {
  background: var(--color-primary-light);
}

.buttons-container a.give-classes:hover {
  background: var(--color-secondary-dark);
}

.buttons-container a img {
  margin-right: 2.4rem;
}

.total-connections {
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.total-connections img {
  margin-left: 0.8rem;
}

@media (min-width: 1000px) {
  #page-landing-content {
    max-width: 1000px;

    display: grid;
    grid-template-rows: 360px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
  }

  .logo-container {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
  }

  .logo-container h2 {
    text-align: initial;
    font-size: 3.5rem;
  }

  .logo-container image {
    height: 100%;
  }

  .hero-image {
    grid-area: hero;
    justify-self: end;
  }

  .buttons-container {
    grid-area: buttons;
    justify-content: flex-start;
  }

  .buttons-container a {
    font-size: 2.4rem;
  }

  .total-connections {
    grid-area: total;
    justify-self: end;
  }
}
</style>
