import { SimpleChanges } from "@angular/core";
import { Chart, ChartObject, ChartOptions } from "highcharts";
import { LoanData } from "../model/loan-data";

/**
 * Common parent class for all Highcharts components
 */
export abstract class GenericCurveComponent {

  public options: ChartOptions;
  public chart: ChartObject;

  /**
   * Method for saving Highcharts object for Angular use.
   * 
   * @param ch 
   */
  public saveChartInstance(ch: ChartObject) {
      this.chart = ch;
  }

  /**
   * Generates base Highcharts graph option structure
   */
  protected generateGraphOptions(title: string, xTitle: string, yTitle: string, animation: boolean) {
      return {
          title : { text : title },
          xAxis: {
            title: {
              text: xTitle
            }
          },
          yAxis: {
            title: {
              text: yTitle
            }
          },
          chart: {
              animation: animation
          },
          tooltip: {
            valueDecimals: 2,
            headerFormat: "<span style='font-size: 10px'>Year {point.key}</span><br/>"
          },
          series: []
      } as ChartOptions;
  }

  /**
   * Updates chart data
   * 
   * @param chartIdx 
   * @param chartData 
   */
  protected updateChartData(chartIdx: number, chartData: number[]) {
      if (this.chart && this.chart.series && chartIdx < this.chart.series.length) {
        this.chart.series[chartIdx].setData(chartData);
      }
  }

  public abstract updateCharts(data: LoanData);
}
