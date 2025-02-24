export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap">
      {/* Increased icon size */}
      <Icon className="text-orange-500 text-[54px]" />
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-[#1B421E] text-[18px]">{title}</span>
        <span className="text-gray-500 text-[16px]">{description}</span>
      </div>
    </div>
  );
}
