<template>
  <div class="select-block">
    <label :for="name">{{ label }}</label>
    <select
      :id="name"
      v-bind="$attrs"
      :value="value"
      @change="$emit('input', $event.target.value)"
    >
      <option value="" disabled selected hidden>Selecione uma opção</option>
      <option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Select extends Vue {
  inheritAttrs!: false;

  @Prop() private label!: string;
  @Prop() private value!: any;
  @Prop() private name!: string;
  @Prop() private options!: Array<{ value: string; label: string }>;
}
</script>

<style>
.select-block {
  position: relative;
}

.select-block + .select-block {
  margin-top: 1.4rem;
}

.select-block label {
  font-size: 1.4rem;
}

.select-block select {
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
}

.select-block:focus-within::after {
  width: calc(100% - 3.2rem);
  height: 2px;
  content: "";
  background: var(--color-primary-light);
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 0;
}
</style>
