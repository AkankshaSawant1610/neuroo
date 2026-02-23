export const ProgressBar = ({ current, total, color }) => (
  <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-8 p-1">
    <div 
      className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out`}
      style={{ width: `${(current / total) * 100}%` }}
    />
  </div>
);