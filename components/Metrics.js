import MetricCard from "./MetricCard";

const Metrics = ({ data }) => {
  return (
    <div className="grid grid-cols-3 mt-4 gap-6">
      <MetricCard
        title="Độ ẩm"
        iconSrc="/icons/025-humidity.png"
        metric={data.main.humidity}
        unit="%"
      />

      <MetricCard
        title="Gió"
        iconSrc={"/icons/017-wind.png"}
        metric={data.wind.speed}
        unit="m/s"
      />

      <MetricCard
        title="Hướng gió"
        iconSrc="/icons/014-compass.png"
        metric={data.wind.deg}
      />

      <MetricCard
        title="Tầm nhìn"
        iconSrc="/icons/binocular.png"
        metric={data.visibility}
      />

      <MetricCard
        title="Mặt trời mọc"
        iconSrc="/icons/040-sunrise.png"
        metric={data.sys.sunrise}
      />

      <MetricCard
        title="Mặt trời lặn"
        iconSrc="/icons/041-sunset.png"
        metric={data.sys.sunset}
      />
    </div>
  );
};

export default Metrics;
