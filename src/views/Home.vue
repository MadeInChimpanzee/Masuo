<template>
<div>
  <v-row justify="center">
    <v-col cols="2">
      <div id="title">ますお</div>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="2">
      <v-chip class="ma-2" color="red">View</v-chip>
    </v-col>
    <v-col cols="6">
      <math-field id="formula" virtual-keyboard-mode=manual style="font-size: 32px;">
        {{inputText}}
      </math-field>
    </v-col>
  </v-row>
  <v-row justify="center" v-show="false">
    <v-col cols="6">
      <textarea id="latex"></textarea>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="2">
      <v-chip class="ma-2" color="red">Text</v-chip>
    </v-col>
    <v-col cols="6">
      <div>
        {{inputText}}
      </div>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="6">
      <v-btn color="primary" @click="copyText">Copy the text</v-btn>
    </v-col>
  </v-row>
</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return { inputText: 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}' };
  },
  mounted() {
    const mf = document.querySelector('#formula');
    const latexField = document.querySelector('#latex');
    latexField.addEventListener('input', () => mf.setValue(latexField.value));
    mf.addEventListener('input', this.updateLatex);
  },
  methods: {
    updateLatex() {
      const mf = document.querySelector('#formula');
      document.querySelector('#latex').value = mf.value;
      this.inputText = mf.value;
    },
    copyText() {
      navigator.clipboard.writeText(this.inputText);
    },
  },
};
</script>

<style scoped>
#title {
   font-family: 'Noto Serif JP', serif;
   font-size:50px;
}
</style>
