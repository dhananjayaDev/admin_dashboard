import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import SalesTrendChart from '../components/products/SalesTrendChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import { DollarSign, TrendingUp, CreditCard, ShoppingCart } from 'lucide-react';
import SalesOverviewChart from '../components/sales/SalesOverviewChart';
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart';
import DailySalesTrend from '../components/sales/DailySalesTrend';

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Sales' />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        {/* SALES STATS */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard title='Total Revenue' icon={DollarSign} value='1234' color='#6366F1' />
          <StatCard title='Avg. Order Value' icon={ShoppingCart} value='89' color='#10B981' />
          <StatCard title='Conversion Rate' icon={TrendingUp} value='23' color='#B8860B' />
          <StatCard title='Sales Growth' icon={CreditCard} value='$543,210' color='#EC4899' />
        </motion.div>

        {/* SALES OVERVIEW CHART */}
        <SalesOverviewChart />

        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
            <SalesByCategoryChart />
            <DailySalesTrend />
        </div>   
      </main>
    </div>
  );
}

export default SalesPage;
 