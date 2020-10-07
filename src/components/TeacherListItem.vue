<template>
  <article class="teacher-item">
    <header>
      <img :src="teacher.avatar" :alt="teacher.name" />
      <div>
        <strong>{{ teacher.name }}</strong>
        <span>{{ teacher.subject }}</span>
      </div>
    </header>

    <p>{{ teacher.bio }}</p>

    <footer>
      <p>
        Preço/hora
        <strong>{{ `R$ ${teacher.cost},00` }}</strong>
      </p>
      <button type="button">
        <img src="@/assets/images/icons/whatsapp.svg" alt="contato" />
        Entrar em contato
      </button>
    </footer>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TeacherListItem extends Vue {
  @Prop() private teacher!: {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    sbject: string;
    whatsapp: string;
  };
}
</script>

<style>
.teacher-item {
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
}

.teacher-item header {
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;
}

.teacher-item header img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}

.teacher-item header div {
  margin-left: 2.4rem;
}

.teacher-item header div strong {
  font: 700 2.4rem Archivo;
  display: block;
  color: var(--color-text-title);
}

.teacher-item header div span {
  font-size: 1.6rem;
  display: block;
  margin-top: 0.4rem;
}

.teacher-item > p {
  padding: 0 2rem;
  font-size: 1.6rem;
  line-height: 2.8rem;
}

.teacher-item footer {
  padding: 3.2rem 2rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.teacher-item footer p strong {
  color: var(--color-primary);
  font-size: 1.6rem;
  display: block;
}

.teacher-item footer button {
  width: 20rem;
  height: 5.6rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem Archivo;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;
}

.teacher-item footer button:hover {
  background: var(--color-secondary-dark);
}

@media (min-width: 700px) {
  .teacher-item header,
  .teacher-item footer {
    padding: 3.2rem;
  }

  .teacher-item > p {
    padding: 0 3.2rem;
  }

  .teacher-item footer p strong {
    display: initial;
    margin-left: 1.6rem;
  }

  .teacher-item footer button {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;
  }

  .teacher-item footer button img {
    margin-right: 1.6rem;
  }
}
</style>
