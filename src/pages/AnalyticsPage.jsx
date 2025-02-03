import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import RevenueChart from "../components/analytics/RevenueChart";
import ChannelPerformanceChart from "../components/analytics/ChannelPerformanceChart";
import ProductPerformanceChart from "../components/analytics/ProductPerformanceChart";
import UserRetentionChart from "../components/analytics/UserRetentionChart";
import CustomerSegmentationChart from "../components/analytics/CustomerSegmentationChart";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10 text-white">
      <Header title="Analytics" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard title="Total Revenue" icon={DollarSign} value="$89,420" color="#6366F1" />
          <StatCard title="Active Users" icon={Users} value="1,234" color="#10B981" />
          <StatCard title="Total Sales" icon={ShoppingBag} value="567" color="#F59E0B" />
          <StatCard title="Growth Rate" icon={TrendingUp} value="12.5%" color="#EC4899" />
        </motion.div>

        {/* REVENUE CHART */}
        <RevenueChart />

        {/* CHARTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <ChannelPerformanceChart />
          <ProductPerformanceChart />
          <UserRetentionChart />
          <CustomerSegmentationChart />
        </div>
      </main>
    </div>
  );
}

export default AnalyticsPage;