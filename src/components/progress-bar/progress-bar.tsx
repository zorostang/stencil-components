import { Component, Element, Prop, h } from "@stencil/core";
import Chart from "chart.js";

@Component({
  tag: "nwc-progress-bar",
  styleUrl: "progress-bar.css",
  shadow: false,
})
export class DrawingPad {
  @Prop() value;
  @Element() el: HTMLElement;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  maxvalue = 100;
  componentDidLoad() {
    const value = this.value;
    const maxvalue = this.maxvalue;
    const canvas = this.el.querySelector("canvas");
    canvas.height = 20;
    new Chart(canvas, {
      type: "horizontalBar",
      data: {
        labels: [],
        datasets: [
          {
            data: [value],
            backgroundColor: "#7500c0",
          },
          {
            data: [maxvalue - value],
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
      </div>
    );
  }
}
