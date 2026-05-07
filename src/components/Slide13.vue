<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第一章 1-2</div>
    <h2 class="slide-title">畢業薪水落在哪裡</h2>
    <div class="position-track">
      <div
        v-for="(pos, i) in positions"
        :key="i"
        class="pos-item"
        :class="pos.cls"
      >
        <div class="pos-years">{{ pos.years }}</div>
        <div class="pos-title">{{ pos.title }}</div>
        <div class="pos-salary">{{ pos.salary }}</div>
        <div class="pos-decile">{{ pos.decile }}</div>
      </div>
    </div>
    <div class="callout green">
      資工系初階工程師起薪（約 55–70 萬）即已超越
      <strong>全國薪資中位數（D5 = 54.6 萬）</strong>。 隨著年資增長，可穩步進入
      D7→D8→D9，遠超多數科系的薪資天花板。
    </div>
    <table>
      <thead>
        <tr>
          <th>年資</th>
          <th>職稱</th>
          <th>年薪範圍</th>
          <th>十分位</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pos, i) in positions" :key="i">
          <td>{{ pos.years }}</td>
          <td>{{ pos.title }}</td>
          <td>{{ pos.salary }}</td>
          <td>{{ pos.decile }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const positions = [
  {
    years: "0–2 年",
    title: "初階工程師",
    salary: "55–70 萬",
    decile: "≈ D5–D6",
    cls: "pos-entry",
  },
  {
    years: "3–5 年",
    title: "中階工程師",
    salary: "70–100 萬",
    decile: "≈ D6–D8",
    cls: "pos-mid",
  },
  {
    years: "5–8 年",
    title: "資深工程師",
    salary: "100–150 萬",
    decile: "≈ D8–D9+",
    cls: "pos-senior",
  },
  {
    years: "8 年+",
    title: "技術主管 / 架構師",
    salary: "150–200 萬+",
    decile: "Top 5%",
    cls: "pos-lead",
  },
];
</script>

<style scoped>
table {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
th {
  padding: 0.75rem 1rem;
}
td {
  padding: 0.7rem 1rem;
}
</style>
