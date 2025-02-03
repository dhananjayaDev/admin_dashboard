import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import OrdersTable from "../components/orders/OrdersTable";
import DailyOrdersChart from "../components/orders/DailyOrdersChart";
import OrderDistributionChart from "../components/orders/OrderDistributionChart";
import { ShoppingBag, Clock, CheckCircle2, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

function OrdersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10 text-white">
      <Header title="Orders" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard title="Total Orders" icon={ShoppingBag} value="1,892" color="#6366F1" />
          <StatCard title="Pending Orders" icon={Clock} value="156" color="#F59E0B" />
          <StatCard title="Completed Orders" icon={CheckCircle2} value="1,736" color="#10B981" />
          <StatCard title="Total Revenue" icon={DollarSign} value="$89,420" color="#EC4899" />
        </motion.div>

        {/* ORDERS TABLE */}
        <OrdersTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <DailyOrdersChart />
          <OrderDistributionChart />
        </div>
      </main>
    </div>
  );
}

export default OrdersPage;