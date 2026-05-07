<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第二章 2-1</div>
    <h2 class="slide-title">📋 專題怎麼選老師？</h2>
    <table>
      <thead>
        <tr><th style="width:8%">#</th><th style="width:22%">重點</th><th>說明</th></tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in topicTips" :key="i">
          <td>{{ i + 1 }}</td>
          <td><strong>{{ item.title }}</strong></td>
          <td>{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>
    <div class="callout orange">
      <strong>專題 ＝ 你大學四年最重要的作品 ＝ 履歷上的第一個代表作。</strong><br>
      認真做，找工作時它會幫你一把。
    </div>
  </div>
</template>

<script setup>
const topicTips = [
  { title: '老師帶法', desc: '放養型 vs 手把手？先了解自己適合哪種，問現任學生最準。' },
  { title: '學長姐評價', desc: '問過來人最準，不要只看表面，看最終成果與就業連結。' },
  { title: '專題方向', desc: '是否跟你想走的職涯路線有關？專題作品將是面試時的加分。' },
]
</script>
