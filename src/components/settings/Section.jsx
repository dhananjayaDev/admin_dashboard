import { motion } from 'framer-motion';

export default function Section({ icon: Icon, title, children, borderColor = 'indigo' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-8 pb-8 ${
        borderColor === 'red' 
          ? 'border-b border-red-500/20' 
          : 'border-b border-indigo-500/20'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className={`text-${borderColor}-500`} size={24} />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </motion.div>
  );
}