<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第二章 2-2</div>
    <h2 class="slide-title">🎓 升學三條路</h2>
    <div class="cards">
      <div v-for="(path, i) in studyPaths" :key="i" class="card" :class="{ best: path.best }">
        <h4>{{ path.title }}</h4>
        <ul><li v-for="(point, j) in path.points" :key="j">{{ point }}</li></ul>
      </div>
    </div>
    <table>
      <thead>
        <tr><th>方式</th><th>時間成本</th><th>學校選擇</th><th>壓力</th><th>適合誰</th></tr>
      </thead>
      <tbody>
        <tr v-for="row in compareTable" :key="row.method">
          <td>{{ row.method }}</td><td>{{ row.time }}</td><td>{{ row.school }}</td>
          <td>{{ row.pressure }}</td><td>{{ row.fit }}</td>
        </tr>
      </tbody>
    </table>
    <div class="callout">
      碩士學歷在業界有明確加分，起薪差距約 <strong>10-20 萬 / 年</strong>。<br>
      如果時間和經濟允許，值得認真考慮。
    </div>
  </div>
</template>

<script setup>
const studyPaths = [
  { title: '① 五年一貫', best: true,
    points: ['最快：1 年拿碩士', '壓力最小、確定性高', '限定本校碩班', '適合：求穩定、重效率'] },
  { title: '② 推甄', best: false,
    points: ['成績前三名有機會', '可推甄雲科、北科', '名額少、需書審面試', '適合：成績好、有作品'] },
  { title: '③ 考試入學', best: false,
    points: ['最公平、選擇最多', '雲科北科中科都可拼', '中字輩（中央、中山）不是問題', '適合：目標遠大、願意衝'] },
]
const compareTable = [
  { method: '五年一貫', time: '⭐ 最短', school: '僅本校', pressure: '低', fit: '求穩定、重效率的人' },
  { method: '推甄', time: '⭐⭐ 中等', school: '雲科 / 北科', pressure: '中', fit: '成績好、有作品的人' },
  { method: '考試', time: '⭐⭐⭐ 較長', school: '中字輩以上', pressure: '高', fit: '目標遠大、願意拼的人' },
]
</script>
