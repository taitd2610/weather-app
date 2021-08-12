import Image from "next/image";

const MetricCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <p className="text-right">{title}</p>
      <div className="flex mt-2 justify-between">
        <Image alt="weatherIcon" width={100} height={100} src={iconSrc} />
        <div className="text-right ml-8">
          <h1 className="text-3xl font-bold">{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
