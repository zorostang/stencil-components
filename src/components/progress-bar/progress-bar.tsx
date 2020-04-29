import { Component, Element, Prop, h } from "@stencil/core";
import Chart from "chart.js";

@Component({
  tag: "nwc-progress-bar",
  styleUrl: "progress-bar.css",
  shadow: false,
})
export class DrawingPad {
  @Prop() value;
  @Prop() maxvalue;
  @Element() el: HTMLElement;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  chart: Chart;

  componentWillUpdate() {
    // colored bar
    this.chart.data.datasets[0].data.pop();
    this.chart.data.datasets[0].data.push(this.value)

    // grey bar
    this.chart.data.datasets[1].data.pop();
    this.chart.data.datasets[1].data.push(this.maxvalue - this.value)
    console.log('this.value: ', this.value)
    console.log('this.maxvalue: ', this.maxvalue);
    this.chart.update(0); // animation duration = 0. todo: can we leverage chart.js animations within a component lifecycle hook?
  }
  // render initial chart here (only once)
  // update the chart with chart.js api inside addData
  componentDidLoad() {
    const value = this.value;
    const maxvalue = this.maxvalue;
    const canvas = this.el.querySelector("canvas");
    canvas.height = 15;
    this.chart = new Chart(canvas, {
      type: "horizontalBar",
      data: {
        labels: [],
        datasets: [
          {
            data: [value], // the positive results
            backgroundColor: "#7500c0",
          },
          {
            data: [maxvalue - value], // the inverse of above
            backgroundColor: "lightgrey",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        scales: {
          xAxes: [
            {
              display: false,
              stacked: true,
            },
          ],
          yAxes: [
            {
              display: false,
              stacked: true,
            },
          ],
        }, // scales
      }, // options
    });
  }

  // render() {
  //   return (
  //     <div class="canvas-container">
  //       <canvas class="wr-canvas"
  //         onMouseDown={() => { this.onMouseDown(); }}
  //         onMouseUp={() => { this.onMouseUp(); }}
  //         onMouseMove={(e: MouseEvent) => { this.onMouseMove(e); }}
  //       ></canvas>
  //     </div>
  //   );
  // }

  render() {
    return (
      // todo: figure out why container was needed. component didnt render wo it
      <div class="canvas-container">
        <canvas></canvas>
        <span>({this.value}/{this.maxvalue})</span>
      </div>
    );
  }
}
