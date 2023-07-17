import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';

@Component({
  selector: 'app-option-strategy-chart',
  templateUrl: './option-strategy-chart.component.html',
  styleUrls: ['./option-strategy-chart.component.scss'],
})
export class OptionStrategyChartComponent implements OnInit {
  ngOnInit() {
    // Register the required scales and controllers
    Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

    // Sample data for Bull Call Spread
    const underlyingPrice = Array.from(Array(101).keys());
    const strikePriceBuy = 30;
    const strikePriceSell = 60;
    const premiumBuy = 2;
    const premiumSell = 1;

    // Generate data for Long Call
    const longCallPayoff = [];
    for (let i = 0; i <= 100; i++) {
      const payoff = Math.max(i - strikePriceBuy, 0) - premiumBuy;
      longCallPayoff.push(payoff);
    }

    // Generate data for Short Call
    const shortCallPayoff = [];
    for (let i = 0; i <= 100; i++) {
      const payoff = -(Math.max(i - strikePriceSell, 0) - premiumSell);
      shortCallPayoff.push(payoff);
    }

    // Generate data for Bull Call Spread
    const bullCallSpreadPayoff = [];
    for (let i = 0; i <= 100; i++) {
      const longCallPayoff = Math.max(i - strikePriceBuy, 0) - premiumBuy;
      const shortCallPayoff = -(Math.max(i - strikePriceSell, 0) - premiumSell);
      const payoff = longCallPayoff + shortCallPayoff;
      bullCallSpreadPayoff.push(payoff);
    }

    // Create chart
    const ctx = document.getElementById('payoffChart') as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: underlyingPrice.map((x) => x.toString()),
        datasets: [
          {
            label: 'Bull Call Spread Payoff',
            data: bullCallSpreadPayoff,
            borderColor: 'rgba(255, 0, 0, 1)',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderWidth: 1,
            fill: true,
            tension: 0,
            pointRadius: 0,
          },
          {
            label: 'Long Call Payoff',
            data: longCallPayoff,
            borderColor: 'rgba(0, 255, 0, 1)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderWidth: 1,
            fill: true,
            tension: 0,
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            title: {
              display: true,
              text: 'Underlying Price',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Profit/Loss',
            },
            
          },
          
        },
      },
    });
  }
}
