// import {
//   type Ref,
//   shallowRef,
//   unref,
//   onMounted,
//   onDeactivated,
//   onBeforeUnmount,
// } from "vue";
//
// // import echarts from "@/constants/Echarts";
// import * as echarts from 'echarts'
// export type EChartsCoreOption = echarts.EChartsCoreOption;
//
// const useEcharts = (elRef: Ref<HTMLDivElement>, options: EChartsCoreOption) => {
//   const charts = shallowRef<echarts.ECharts>();
//
//   const setOptions = (options: EChartsCoreOption,notMerge?: boolean | undefined,lazyUpdate?: boolean | undefined) => {
//     charts.value && charts.value.setOption(options, notMerge, lazyUpdate);
//   };
//
//   // 初始化
//   const initCharts = (themeColor?: Array<string>) => {
//     const el = unref(elRef);
//     if (!el || !unref(el)) {
//       return;
//     }
//     charts.value = echarts.init(el);
//     if (themeColor) {
//       options.color = themeColor;
//     }
//     setOptions(options);
//   };
//
//   // 重新窗口变化时，重新计算
//   const resize = () => {
//     charts.value && charts.value.resize({animation: {duration: 500}});
//   };
//
//   onMounted(() => {
//     window.addEventListener("resize", resize);
//   });
//
//   // 页面keepAlive时，不监听页面
//   onDeactivated(() => {
//     window.removeEventListener("resize", resize);
//   });
//
//   onBeforeUnmount(() => {
//     window.removeEventListener("resize", resize);
//   });
//
//   return {
//     initCharts,
//     setOptions,
//     resize,
//   };
// };
//
// export { useEcharts };
