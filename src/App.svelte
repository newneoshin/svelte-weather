<script lang="ts">
  import {
    getCurrentWeather,
    getHourlyForecast,
    getWeeklyForecast,
  } from "./lib/api/weather";

  const lat = 37.5665;
  const lon = 126.978;

  async function testApis() {
    try {
      const current = await getCurrentWeather(lat, lon);
      console.log("현재 날씨: ", current);

      const hourly = await getHourlyForecast(lat, lon);
      console.log("시간별 예보 개수: ", hourly.items.length);
      console.log("시간별 예보: ", hourly.items);

      const weekly = await getWeeklyForecast(lat, lon);
      console.log("주간 예보 개수: ", weekly.items.length);
      console.log("주간 예보: ", weekly.items);
    } catch (error) {
      console.log("에러 발생: ", error);
    }
  }

  testApis();
</script>

<div>
  <h1>API 테스트 중... 콘솔을 확인하세요.</h1>
</div>
