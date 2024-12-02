const puppeteer = require("puppeteer");
// const avatar = require("./avatar.png");

const max = 37;
const min = 22;

const html = `
  <!DOCTYPE html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0">
  <script src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></script>
    <div style="height: 630px; width: 1200px; background: white; display: flex; flex-flow: column">
      <div style="height: 52px; width: 1200px; display: flex; padding-left: 42px; align-items: center; background: #406EC7">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
          <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5ZM12.0001 23.7703C18.2246 23.7703 23.2704 18.7244 23.2704 12.5C23.2704 6.27558 18.2246 1.22968 12.0001 1.22968C5.7757 1.22968 0.729811 6.27558 0.729811 12.5C0.729811 18.7244 5.7757 23.7703 12.0001 23.7703Z" fill="white"/>
          <path id="s" d="M9.38911 16.3231C9.68789 16.5052 10.039 16.6646 10.4423 16.8013C10.8606 16.9227 11.2864 16.9835 11.7196 16.9835C12.2126 16.9835 12.6309 16.862 12.9745 16.6191C13.3181 16.361 13.4899 15.9511 13.4899 15.3894C13.4899 14.9188 13.3853 14.5317 13.1762 14.2281C12.967 13.9245 12.6981 13.6512 12.3695 13.4083C12.0557 13.1654 11.7121 12.9453 11.3387 12.7479C10.9652 12.5354 10.6141 12.2849 10.2855 11.9965C9.97173 11.708 9.7103 11.3664 9.50115 10.9717C9.292 10.577 9.18743 10.076 9.18743 9.4688C9.18743 8.49721 9.44139 7.76851 9.94932 7.28272C10.4722 6.78174 11.2042 6.53125 12.1454 6.53125C12.7579 6.53125 13.2882 6.59197 13.7364 6.71342C14.1845 6.81969 14.573 6.9715 14.9016 7.16886L14.4759 8.53516C14.192 8.38335 13.8634 8.2619 13.4899 8.17081C13.1164 8.06454 12.7355 8.01141 12.347 8.01141C11.8092 8.01141 11.4134 8.12527 11.1594 8.35298C10.9204 8.5807 10.8008 8.93746 10.8008 9.42325C10.8008 9.80278 10.9054 10.1292 11.1146 10.4024C11.3237 10.6605 11.5851 10.9034 11.8989 11.1311C12.2275 11.3437 12.5786 11.5638 12.9521 11.7915C13.3256 12.0192 13.6691 12.2925 13.9829 12.6113C14.3115 12.9149 14.5804 13.2868 14.7896 13.7271C14.9987 14.1522 15.1033 14.6911 15.1033 15.3439C15.1033 15.769 15.0361 16.1713 14.9016 16.5508C14.7672 16.9303 14.558 17.2643 14.2742 17.5527C14.0053 17.826 13.6617 18.0461 13.2434 18.2131C12.84 18.3801 12.362 18.4636 11.8092 18.4636C11.1519 18.4636 10.5842 18.3953 10.1062 18.2587C9.62813 18.1372 9.22478 17.9702 8.89612 17.7577L9.38911 16.3231Z" fill="white"/>
          <ellipse id="Ellipse 6" cx="4.76064" cy="12.3826" rx="1.29909" ry="1.32014" fill="white"/>
          <ellipse id="Ellipse 7" cx="19.2392" cy="12.3826" rx="1.29909" ry="1.32014" fill="white"/>
          </g>
        </svg>
        <span style="font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 800; line-height: 26.825px; color: #FFF; margin: 0 9px 0">Sanr</span>
        <span style="font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 800; line-height: 26.825px; color: #FFF;">Crypto price prediction market</span>
      </div>
      <div style="display: flex; justify-content: center; gap: 70px; margin-top: 24px;">
        <div style="height: 530px; width: 340px; display: flex; flex-flow: column">
          <div style="display: flex; align-items: center; gap: 14px;">
            <img src="https://avatars.githubusercontent.com/u/105372239?v=4" style="height: 50px; width: 50px; border-radius: 50%"/>
            <div style="width: 100%; display: flex; flex-flow: column; gap: 2px">
              <div style="font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 600; line-height: normal; color: #313141;">Signalizat0r</div>
              <div style="font-family: Poppins; font-size: 18px; font-style: normal; font-weight: 400; line-height: normal; color: #6E778D;">May 1 ‘22 13:45 - May 2 ‘22 13:45</div>
            </div>
          </div>
          <div style="margin-top: 24px; font-family: Poppins; font-size: 18px; font-style: normal; font-weight: 400; line-height: normal; color: #6E778D;">Signal details</div>
          <div style="margin-top: 16px; display: flex; align-items: center; gap: 16px">
            <img src="https://avatars.githubusercontent.com/u/35343640?s=64&v=4" style="height: 50px; width: 50px; border-radius: 50%"/>
            <div style="font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal; color: #313141;">BTC/USD</div>
            <div style="display: flex; width: 105px; height: 28px; padding: 2px 6px; justify-content: center; align-items: center; gap: 6px; border-radius: 3px; border: 2px solid var(--Light-success-normal, #28A138);">
              <span style="font-family: Poppins; font-size: 14px; font-style: normal; font-weight: 600; line-height: 20px; color: #28A138">SanRise</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4693 6.53069C17.8436 6.90494 17.8436 7.51172 17.4693 7.88598L7.88598 17.4693C7.51172 17.8436 6.90494 17.8436 6.53069 17.4693C6.15644 17.0951 6.15644 16.4883 6.53069 16.114L16.114 6.53069C16.4883 6.15644 17.0951 6.15644 17.4693 6.53069Z" fill="#28A138"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 7.20833C6.25 6.67906 6.67906 6.25 7.20833 6.25H16.7917C17.3209 6.25 17.75 6.67906 17.75 7.20833V16.7917C17.75 17.3209 17.3209 17.75 16.7917 17.75C16.2624 17.75 15.8333 17.3209 15.8333 16.7917V8.16667H7.20833C6.67906 8.16667 6.25 7.73761 6.25 7.20833Z" fill="#28A138"/>
              </svg>
            </div>
          </div>
          <div style="margin-top: 16px; font-family: Poppins; font-size: 18px; font-style: normal; font-weight: 400; line-height: normal; color: #6E778D;">Perfomance</div>
          <div style="margin-top: 2px; font-family: Poppins; font-size: 28px; font-style: normal; font-weight: 600; line-height: normal; color: #28A138;">25%</div>
          <div style="margin-top: 16px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; flex-flow: column; gap: 2px;">
              <div style="font-family: Poppins; font-size: 18px; font-style: normal; font-weight: 400; line-height: normal; color: #6E778D;">Opening price</div>
              <div style="font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 600; line-height: normal; color: #313141;">33000.00</div>
            </div>
            <div style="width: 1px; height: 46px; background: #E3E5EE;"></div>
            <div style="display: flex; flex-flow: column; gap: 2px;">
              <div style="font-family: Poppins; font-size: 18px; font-style: normal; font-weight: 400; line-height: normal; color: #6E778D;">Closing price</div>
              <div style="font-family: Poppins; font-size: 24px; font-style: normal; font-weight: 600; line-height: normal; color: #313141;">35000.00</div>
            </div>
          </div>
          <div style="margin-top: 16px; font-family: Poppins; font-size: 18px; font-style: normal; font-weight: 400; line-height: normal; color: #6E778D;">Leverage performance</div>
          <div style="margin-top: 2px; font-family: Poppins; font-size: 28px; font-style: normal; font-weight: 600; line-height: normal; color: #28A138;">250% (10x)</div>
          <div style="margin-top: 16px; font-family: Poppins; font-size: 18px; font-style: normal; font-weight: 400; line-height: normal; color: #6E778D;">Status</div>
          <div style="margin-top: 2px; font-family: Poppins; font-size: 28px; font-style: normal; font-weight: 600; line-height: normal; color: #28A138;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="8" fill="#D21C1C"/>
            </svg>
            Closed by take profit</div>
        </div>
        <div style="height: 500px; width: 700px; font-family: Poppins;" id="firstContainer"></div>
      </div>
</body>
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
    { time: "2018-12-22", value: ${max}},
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: ${min}},
  ]);
  </script>
</html>
  `;

let browser;

exports.getChart = async () => {
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1,
    });
    await page.setContent(html);
    const picture = await page.screenshot({
      path: "screen.png",
    });
    await browser.close();
    return picture;
  } catch {
    (err) => console.error(err);
  } finally {
    () => browser?.close();
  }
};
