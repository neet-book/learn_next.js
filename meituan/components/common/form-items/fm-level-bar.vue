<template>
  <div class="fm-level-bar clear-fix">
      <div
        class="clear-fix pw-strangth-bar"
        :class="{ 'pw-weak': level == 1 , 'pw-normal': level == 2, 'pw-strong': level == 3 }"
      >
      </div>
      <div class="pw-level-container">
        <div class="level">弱</div>
        <div class="level">中</div>
        <div class="level">强</div>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'

@Component
export default class FmLevelBar extends Vue {
    @Prop(String)
    pw: string | undefined
    level: number = 0

    @Watch('pw')
    changeLevel(pw: string): void {
        if (!pw) {
            this.level = 0
            return
        }
        
        let grade: number = 0
        if (pw.length > 8) grade += 1
        if (pw.length > 10) grade += 1
        if (/[A-Za-z]+/.test(pw)) grade += 1
        if (/[0-9]+/.test(pw)) grade += 1
        if (/\W/.test(pw)) grade += 1

        if (grade < 3) {
            this.level = 1
            return
        }
        
        if (grade < 4 ) {
            this.level = 2
            return
        }

        if (grade >= 4) {
            this.level = 3
            return
        }
    }
}
</script>

<style scoped>
.fm-level-bar {
    width: 250px;
    background: rgb(230, 230, 230);
    position: relative;
}

.pw-strangth-bar {
    width: 0;
    height: 21px;
    transition: width ease 0.5s;
}
.pw-level-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.level {
    float: left;
    width: 33%;
    font-size: 12px;
    color: white;
    text-align: center;
    padding: 4px 0;
    background-size: 0%;
    
}

.level:nth-child(2) {
    border-left: 1px solid white;
    border-right: 1px solid white;
}

.pw-weak {
    width: 33%;
    background: #f76120;
}

.pw-normal {
    width: 66%;
    background: #f76120;
}

.pw-strong {
    width: 100%;
    background: #8bd245;
}


</style>