<template>
  <div class="fm-level-bar clear-fix">
      <div
        class="clear-fix"
        :class="{ 'pw-weak': level == 1 , 'pw-normal': level == 2, 'pw-strong': level == 3 }"
      >
      </div>
      <div class="level">弱</div>
      <div class="level">中</div>
      <div class="level">强</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FmLevelBar extends Vue {
    level: number = 3
}
</script>

<style scoped>
.fm-level-bar {
    width: 250px;
    background: rgb(230, 230, 230);
}
.level {
    float: left;
    width: 30%;
    font-size: 12px;
    color: white;
    text-align: center;
    padding: 4px;
    background-size: 0%;
    transition: ease 0.4s;
}

.level:nth-child(3) {
    border-left: 1px solid white;
    border-right: 1px solid white;
}

/* .level:hover {
    background-size: 100%;
    background: #f76120;
} */

.pw-weak {
    width: 33%;
    background: #f76120;
}

.pw-normal {
    width: 33%;
    background: #f76120;
}

.pw-strong {
    width: 33%;
    background: #8bd245;
}


</style>