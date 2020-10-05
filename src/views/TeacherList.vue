<template>
  <div id="page-teacher-list" class="container">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form id="search-teachers">
        <Select
          name="subject"
          label="Matéria"
          :options="[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Ciẽncias', label: 'Ciẽncias' },
            { value: 'Física', label: 'Física' },
            { value: 'Geografia', label: 'Geografia' }
          ]"
        />

        <Select
          name="week_day"
          label="Dia da Semana"
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

import PageHeader from "@/components/PageHeader.vue";
import TeacherListItem from "@/components/TeacherListItem.vue";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";

@Component({
  components: {
    PageHeader,
    TeacherListItem,
    Input,
    Select
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
