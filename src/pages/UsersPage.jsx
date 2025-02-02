import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from 'framer-motion';
import { UserCheck, UserIcon, UserPlus, UserX } from "lucide-react";
import UsersTable from "../components/users/UsersTable";

import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

function UsersPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 text-white'>
      <Header title="Users" />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        {/* STATS */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard title='Total Users' icon={UserIcon} value='1234' color='#6366F1' />
          <StatCard title='New Users Today' icon={UserPlus} value='89' color='#10B981' />
          <StatCard title='Active Users' icon={UserCheck} value='23' color='#B8860B' />
          <StatCard title='Churn Rate' icon={UserX} value='5%' color='#EF4444' />
        </motion.div>

        <UsersTable />

        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
        </div>
        <div className="mt-8">
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
}

export default UsersPage;
