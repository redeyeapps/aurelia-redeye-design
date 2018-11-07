import { Chart, ChartDataSets } from 'chart.js';

export type ChartType = 'line' | 'bar' | 'pie' | undefined;

export class ChartComponent {
  private canvasEl: HTMLCanvasElement;
  private chartInstance: Chart;

  title: string = 'Chart to display data';
  type: ChartType;
  data: number[] = [];
  label: string = 'First Dataset';

  private datasets: ChartDataSets[] = [
    {
      data: this.data,
      label: this.label
    }
  ];

  attached() {
    const ctx = <CanvasRenderingContext2D>this.canvasEl.getContext('2d');
    this.chartInstance = new Chart(ctx, {
      type: this.type,
      data: {
        datasets: this.datasets
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: this.title
        }
      }
    });

  }

  detached() {
    this.chartInstance.destroy();
  }
}
