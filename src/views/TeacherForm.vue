<template>
  <div id="page-teacher-form" class="container">
    <PageHeader
      title="Que incrivel que você quer dar aulas."
      description="O primeiro passo é preencher esse formulário."
    />

    <main>
      <form @submit.prevent="handleCreateClass">
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" v-model="teacherForm.name" />
          <Input name="avatar" label="Avatar" v-model="teacherForm.avatar" />
          <Input
            name="whatsapp"
            label="Whatsapp"
            v-model="teacherForm.whatsapp"
          />
          <Textarea name="bio" label="Biografia" v-model="teacherForm.bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            v-model="teacherForm.subject"
            :options="[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciẽncias', label: 'Ciẽncias' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' }
            ]"
          />

          <Input
            name="cost"
            label="Custo da sua hora por aula"
            v-model="teacherForm.cost"
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button" @click="addNewScheduleItem">
              + Novo Horário
            </button>
          </legend>

          <div
            class="schedule-item"
            v-for="(scheduleItem, index) in scheduleItems"
            :key="index"
          >
            <Select
              name="week_day"
              label="Dia da Semana"
              v-model="scheduleItem.week_day"
              :options="[
                { value: 0, label: 'Domingo' },
                { value: 1, label: 'Segunda-feira' },
                { value: 2, label: 'Terça-feira' },
                { value: 3, label: 'Quarta-feira' },
                { value: 4, label: 'Quinta-feira' },
                { value: 5, label: 'Sexta-feira' },
                { value: 6, label: 'Sábado' }
              ]"
            />

            <Input
              name="from"
              label="Das"
              type="time"
              v-model="scheduleItem.from"
            />

            <Input
              name="to"
              label="Até"
              type="time"
              v-model="scheduleItem.to"
            />
          </div>
        </fieldset>

        <footer>
          <p>
            <img
              src="@/assets/images/icons/warning.svg"
              alt="Aviso importante"
            />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="submit">Salvar Cadastro</button>
        </footer>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PageHeader from "@/components/PageHeader.vue";
import Input from "@/components/Input.vue";
import Textarea from "@/components/Textarea.vue";
import Select from "@/components/Select.vue";
import api from "@/services/api";

@Component({
  components: {
    PageHeader,
    Input,
    Textarea,
    Select
  }
})
export default class TeacherForm extends Vue {
  scheduleItems: Array<{
    week_day: number | null;
    from: string;
    to: string;
  }> = [{ week_day: null, from: "", to: "" }];

  private teacherForm: any = {
    name: "",
    avatar: "",
    whatsapp: "",
    bio: "",
    subject: "",
    cost: ""
  };

  addNewScheduleItem() {
    this.scheduleItems.push({ week_day: null, from: "", to: "" });
  }

  handleCreateClass() {
    api
      .post("classes", { ...this.teacherForm, schedule: this.scheduleItems })
      .then(() => alert("Cadastro efetuado com sucesso!"))
      .catch(() => alert("Erro no cadastro!"));
  }
}
</script>

<style>
#page-teacher-form {
  width: 100vw;
  height: 100vh;
}

#page-teacher-form .page-header .header-content {
  margin-bottom: 6.4rem;
}

#page-teacher-form main {
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
}

#page-teacher-form main fieldset {
  border: 0;
  padding: 0 2.4rem;
}

#page-teacher-form main fieldset + fieldset {
  margin-top: 6.4rem;
}

#page-teacher-form main fieldset legend {
  font: 700 2.4rem Archivo;
  color: var(--color-text-title);
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--color-line-in-white);
}

#page-teacher-form main fieldset legend button {
  background: none;
  border: 0;
  color: var(--color-primary);
  font: 700 1.6rem Archivo;
  cursor: pointer;
  transition: 0.2s;
}

#page-teacher-form main fieldset legend button:hover {
  color: var(--color-primary-dark);
}

#page-teacher-form main fieldset .input-block + .textarea-block,
#page-teacher-form main fieldset .select-block + .input-block {
  margin-top: 2.4rem;
}

#page-teacher-form main label {
  color: var(--color-text-complement);
}

#page-teacher-form main footer {
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;
}

#page-teacher-form main footer p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-text-complement);
}

#page-teacher-form main footer p img {
  margin-right: 2rem;
}

#page-teacher-form main footer button {
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

#page-teacher-form main footer button:hover {
  background: var(--color-secondary-dark);
}

@media (min-width: 700px) {
  #page-teacher-form {
    max-width: 100vw;
  }

  #page-teacher-form .page-header .header-content {
    margin-bottom: 0;
  }

  #page-teacher-form main fieldset {
    padding: 0 6.4rem;
  }

  #page-teacher-form main .schedule-item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }

  #page-teacher-form main .schedule-item .input-block {
    margin-top: 0 !important;
  }

  #page-teacher-form main footer {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #page-teacher-form main footer p {
    justify-content: space-between;
  }

  #page-teacher-form main footer button {
    width: 20rem;
    margin-top: 0;
  }
}
</style>
