interface Bundle {
  id: string;
  name: string;
  items: string[];
  originalPrice: number;
  bundlePrice: number;
  savings: number;
}

interface BundleOfferProps {
  bundle: Bundle;
  onSelect: (bundleId: string) => void;
  isSelected: boolean;
}

export function BundleOffer({
  bundle,
  onSelect,
  isSelected,
}: BundleOfferProps) {
  return (
    <div className="p-4 bg-[#F8F9FF] rounded-lg border border-blue-100">
      <div className="flex items-start space-x-4">
        <label className="flex items-center h-full cursor-pointer">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300"
            checked={isSelected}
            onChange={() => onSelect(bundle.id)}
          />
        </label>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{bundle.name}</h3>
          <ul className="mt-2 space-y-1">
            {bundle.items.map((item, index) => (
              <li key={index} className="text-sm text-gray-600">
                • {item}
              </li>
            ))}
          </ul>
          <div className="mt-3 space-y-1">
            <p className="text-sm text-gray-500 line-through">
              Original: £{bundle.originalPrice.toFixed(2)}
            </p>
            <p className="text-lg font-semibold text-blue-600">
              Bundle Price: £{bundle.bundlePrice.toFixed(2)}
            </p>
            <p className="text-sm font-medium text-green-600">
              Save £{bundle.savings.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
