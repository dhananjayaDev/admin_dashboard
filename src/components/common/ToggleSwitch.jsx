export default function ToggleSwitch({ label, icon: Icon, isOn, onToggle }) {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={18} className="text-gray-400" />}
          <span>{label}</span>
        </div>
        <button
          onClick={onToggle}
          className={`w-11 h-6 rounded-full relative transition-colors ${
            isOn ? "bg-indigo-600" : "bg-gray-600"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
              isOn ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    );
  }