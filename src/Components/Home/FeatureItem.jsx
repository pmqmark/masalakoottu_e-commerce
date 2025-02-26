export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-3 lg:whitespace-nowrap lg:px-0 md:px-2">
      {/* Increased icon size */}
      <Icon className="text-orange-500 lg:text-[54px] text-[44px]" />
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-[#1B421E] text-[18px] mb-1">{title}</span>
        <span className="text-gray-500 text-[16px]">{description}</span>
      </div>
    </div>
  );
}
