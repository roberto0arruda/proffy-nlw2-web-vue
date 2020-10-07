<template>
  <div id="page-teacher-list" class="container">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form id="search-teachers" @submit.prevent="searchTeachers">
        <Select
          name="subject"
          label="Matéria"
          v-model="searchTeachersForm.subject"
          :options="[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Ciẽncias', label: 'Ciẽncias' },
            { value: 'Física', label: 'Física' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'Matematica', label: 'Matematica' }
          ]"
        />

        <Select
          name="week_day"
          label="Dia da Semana"
          v-model="searchTeachersForm.week_day"
          :options="[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' }
          ]"
        />

        <Input
          type="time"
          name="time"
          label="Hora"
          v-model="searchTeachersForm.time"
        />

        <button type="submit">Buscar</button>
      </form>
    </PageHeader>

    <main>
      <TeacherListItem
        v-for="item in teachers"
        :key="item.id"
        :teacher="item"
      />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PageHeader from "@/components/PageHeader.vue";
import TeacherListItem from "@/components/TeacherListItem.vue";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";
import api from "@/services/api";

@Component({
  components: {
    PageHeader,
    TeacherListItem,
    Input,
    Select
  }
})
export default class TeacherList extends Vue {
  private searchTeachersForm: {
    subject: string;
    week_day: string;
    time: string;
  } = { subject: "", week_day: "", time: "" };

  private teachers: Array<[]> = [];

  searchTeachers() {
    api
      .get("classes", {
        params: {
          ...this.searchTeachersForm
        }
      })
      .then((response: { data: any }) => {
        this.teachers = response.data;
      })
      .catch();
  }
}
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

#search-teachers button {
  width: 100%;
  height: 5.6rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;
}

#search-teachers button:hover {
  background: var(--color-secondary-dark);
}

#page-teacher-list main {
  margin: 3.2rem auto;
  width: 90%;
}

@media (min-width: 700px) {
  #page-teacher-list {
    max-width: 100vw;
  }

  #search-teachers {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }

  #search-teachers .input-block + .input-block,
  #search-teachers .select-block + .select-block {
    margin-top: 0;
  }

  #page-teacher-list main {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
}
</style>
