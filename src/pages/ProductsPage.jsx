import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import ProductsTable from "../components/products/ProductsTable";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";



import { AlertTriangle, BoxIcon, DollarSign, TrendingUp } from "lucide-react";
import { motion } from 'framer-motion';

function productsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 text-white'>
      <Header title="Products" />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        {/* STATS */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard title='Total Products' icon={BoxIcon} value='1234' color='#6366F1' />
          <StatCard title='Top Selling' icon={TrendingUp} value='89' color='#10B981' />
          <StatCard title='Low Stock' icon={AlertTriangle} value='23' color='#B8860B' />
          <StatCard title='Total Revenue' icon={DollarSign} value='$543,210' color='#EC4899' />
        </motion.div>

        <ProductsTable />

        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>

      </main>
    </div>
  )
}

export default productsPage;