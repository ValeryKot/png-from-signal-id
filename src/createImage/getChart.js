const puppeteer = require("puppeteer");

const max = 37;
const min = 22;

const html = `
  <!DOCTYPE html>
    <script src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></script>
    <div style="height: 500px; width: 700px;" id="firstContainer"> </div>
    <script>
      const chart = LightweightCharts.createChart(document.getElementById('firstContainer'),   {
          width: 700,
          height: 500,
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
            drawTicks: false,
            rightOffset: 4,
          },
          handleScale: false,
          grid: {
            vertLines: {
              style: 3,
            },
            horzLines: {
              style: 3,
            },
          },
        }
      );
      const minPriceLog10 = ${min} // Math.log10(Math.min(...prices.map(p => p.value)));
      const precision = minPriceLog10 > 0 ? 2 : -Math.ceil(minPriceLog10) + 3;
      const minMove = 1 / 10 ** precision;

      const seriesCommonOptions = {
        lastValueVisible: false,
        priceLineVisible: false,
        lineWidth: 1.5,
        priceFormat: {
          precision,
          minMove,
        },
      };

      const series1 = chart.addLineSeries({
        ...seriesCommonOptions,
      });
      series1.setData([
        { time: "2018-12-18", value: 28.89 },
        { time: "2018-12-19", value: 25.46 },
        { time: "2018-12-20", value: 23.92 },
        { time: "2018-12-21", value: 22.68 },
        { time: "2018-12-22", value: ${max} },
        { time: "2018-12-23", value: 31.11 },
        { time: "2018-12-24", value: 27.02 },
        { time: "2018-12-25", value: 27.32 },
        { time: "2018-12-26", value: 25.17 },
        { time: "2018-12-27", value: 28.89 },
        { time: "2018-12-28", value: 25.46 },
        { time: "2018-12-29", value: 23.92 },
        { time: "2018-12-30", value: 22.68 },
        { time: "2018-12-31", value: ${min} },
      ]);
      </script>
   
  `;

let browser;

exports.getChart = async () => {
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const picture = await page.screenshot({
      path: "image.png",
    });
    await browser.close();
    return picture;
  } catch {
    (err) => console.error(err);
  } finally {
    () => browser?.close();
  }
};
