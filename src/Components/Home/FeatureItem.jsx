export default function FeatureItem({ icon: Icon, title, description }) {
    return (
      <div className="flex items-center gap-6">
        <div className="text-orange-500 text-5xl bg-orange-100 p-4 rounded-full">
          <Icon />
        </div>
        <div>
          <h3 className="text-green-900 font-bold text-lg">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  