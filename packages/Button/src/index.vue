<template>
  <button ref="RButton" class="r-button" @click="$emit('click', $event)">
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { hachureFill, svgNode } from '../../lib'

defineEmits(['click'])
const RButton = ref<null | HTMLElement>(null)

nextTick(() => {
  if (RButton.value) {
    const s = {
      width: RButton.value.offsetWidth,
      height: RButton.value.offsetHeight,
    }
    const svg: SVGElement = svgNode('svg')
    const fillNode = hachureFill(
      [
        [2, 2],
        [s.width - 4, 2],
        [s.width - 2, s.height - 4],
        [2, s.height - 4],
      ],
      1,
    )
    fillNode.classList.add('btn-fill')
    fillNode.style.setProperty('--r-button-background-fill', '#fc0')
    svg.append(fillNode)
    // RButton.value.append(svg)
    let svgStr = new XMLSerializer().serializeToString(svg)
    let svgSrc = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' })
    let DOMURL = self.URL || self.webkitURL || self
    let url = DOMURL.createObjectURL(svgSrc)
    RButton.value.style.backgroundImage = `url("${url}")`
    RButton.value.style.backgroundSize = '100%'
  }
})
</script>

<style scoped>
.r-button {
  border: 0;
  box-shadow: 0px 0px 5px #666;
  transition: all 0.2s ease;
  color: white;
  background-color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 10px;
  text-shadow: #999 1px 0 10px;
  border-radius: 5px;
}
.r-button:active {
  padding: 4px 9px;
  box-shadow: 0px 0px 1px #666;
}
/* .r-button > span {
  background-color: #fff;
} */
.btn-fill {
  stroke-width: 3.5;
  stroke: var(--r-button-background-fill);
}
path {
  stroke: var(--r-button-background-fill, currentColor);
}
</style>
