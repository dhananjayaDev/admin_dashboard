import Header from "../components/common/Header";
import { motion } from 'framer-motion';

import StatCard from "../components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 text-white'>
      <Header title="Overview" />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        {/* STATS */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard title='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
          <StatCard title='New Users' icon={Users} value='1,234' color='#8B5CF6' />
          <StatCard title='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
          <StatCard title='Conversation Rate' icon={BarChart2} value='12.5%' color='#10B981' />
        </motion.div>

        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />

        </div>
      </main>
    </div>
  )
}

export default OverviewPage;
