<template>
  <div id="page-teacher-list" class="container">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form id="search-teachers">
        <Input name="subject" label="Matéria" />
        <Input name="week_day" label="Dia da Semana" />
        <Input type="time" name="time" label="Hora" />
      </form>
    </PageHeader>

    <main>
      <TeacherListItem />
      <TeacherListItem />
      <TeacherListItem />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PageHeader from "../components/PageHeader.vue";
import TeacherListItem from "../components/TeacherListItem.vue";
import Input from "../components/Input.vue";

@Component({
  components: {
    PageHeader,
    TeacherListItem,
    Input
  }
})
export default class TeacherList extends Vue {}
</script>

<style>
#page-teacher-list {
  width: 100vw;
  height: 100vh;
}

#search-teachers {
  margin-top: 3.2rem;
}

#search-teachers label {
  color: var(--color-text-in-primary);
}

#page-teacher-list main {
  margin: 3.2rem auto;
  width: 90%;
}

@media (min-width: 700px) {
  #page-teacher-list {
    max-width: 100%;
  }

  #search-teachers {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -26px;
  }

  #search-teachers .input-block + .input-block {
    margin-top: 0;
  }

  #page-teacher-list main {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
}
</style>
