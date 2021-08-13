import MetricCard from "./MetricCard";
import { getWindSpeed, getTime, degToCompass } from "../utils/utils";

const Metrics = ({ data }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
      <MetricCard
        title="Độ ẩm"
        iconSrc="/icons/025-humidity.png"
        metric={data.main.humidity}
        unit="%"
      />

      <MetricCard
        title="Gió"
        iconSrc={"/icons/017-wind.png"}
        metric={getWindSpeed(data.wind.speed)}
        unit="km/h"
      />

      <MetricCard
        title="Hướng gió"
        iconSrc="/icons/014-compass.png"
        metric={degToCompass(data.wind.deg)}
      />

      <MetricCard
        title="Tầm nhìn"
        iconSrc="/icons/binocular.png"
        metric={data.visibility / 1000}
        unit="km"
      />

      <MetricCard
        title="Mặt trời mọc"
        iconSrc="/icons/040-sunrise.png"
        metric={getTime(data.sys.sunrise, data.timezone)}
      />

      <MetricCard
        title="Mặt trời lặn"
        iconSrc="/icons/041-sunset.png"
        metric={getTime(data.sys.sunset, data.timezone)}
      />
    </div>
  );
};

export default Metrics;
