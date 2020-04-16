import { Component, Element, Prop, h } from '@stencil/core';
import Chart from "chart.js";

@Component({
  tag: 'nwc-progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: false
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
    var test = new Chart(canvas, {
      type: 'horizontalBar',
      data: {
        labels: [],
        datasets: [{
          data: [value],
          backgroundColor: "rgba(51,230,125,1)"
        }, {
          data: [maxvalue - value],
          backgroundColor: "lightgrey",
        }, ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            display: false,
            stacked: true
          }],
          yAxes: [{
            display: false,
            stacked: true
          }],
        } // scales
      } // options
    });
    console.log(canvas)
    console.log(test)
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
      <div class="canvas-container">
        <canvas></canvas>
      </div>
    );
  }
}
