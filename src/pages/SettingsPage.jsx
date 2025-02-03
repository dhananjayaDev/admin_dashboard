import Header from "../components/common/Header";
import Section from "../components/settings/Section";
import ToggleSwitch from "../components/common/ToggleSwitch";
import { motion } from "framer-motion";
import { 
  User, Bell, Lock, Globe, CreditCard, Github, Twitter, Trash2, 
  LogOut, Mail, MessageSquare, Shield, AlertTriangle 
} from "lucide-react";
import { useState } from "react";

function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });

  const [twoFactor, setTwoFactor] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex-1 overflow-auto relative z-10 text-white">
      <Header title="Settings" />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* PROFILE SECTION */}
        <Section icon={User} title="Profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-2xl">JD</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-400">john.doe@example.com</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700">
              Edit Profile
            </button>
          </motion.div>
        </Section>

        {/* NOTIFICATIONS */}
        <Section icon={Bell} title="Notifications">
          <div className="space-y-4">
            <ToggleSwitch 
              label="Email Notifications" 
              icon={Mail}
              isOn={notifications.email} 
              onToggle={() => setNotifications({...notifications, email: !notifications.email})}
            />
            <ToggleSwitch 
              label="Push Notifications" 
              icon={MessageSquare}
              isOn={notifications.push} 
              onToggle={() => setNotifications({...notifications, push: !notifications.push})}
            />
            <ToggleSwitch 
              label="SMS Notifications" 
              icon={Shield}
              isOn={notifications.sms} 
              onToggle={() => setNotifications({...notifications, sms: !notifications.sms})}
            />
          </div>
        </Section>

        {/* SECURITY */}
        <Section icon={Lock} title="Security">
          <div className="space-y-4">
            <ToggleSwitch
              label="Two-Factor Authentication"
              isOn={twoFactor}
              onToggle={() => setTwoFactor(!twoFactor)}
            />
            <button className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400">
              <LogOut size={18} />
              Change Password
            </button>
          </div>
        </Section>

        {/* LANGUAGE & REGION */}
        <Section icon={Globe} title="Language & Region">
          <div className="flex items-center gap-4">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </Section>

        {/* BILLING */}
        <Section icon={CreditCard} title="Billing">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Current Plan</h4>
              <p className="text-gray-400">Pro Plan - $29/month</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700">
              Manage Billing
            </button>
          </div>
        </Section>

        {/* CONNECTED ACCOUNTS */}
        <Section icon={User} title="Connected Accounts">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github size={20} />
                <span>GitHub</span>
              </div>
              <button className="text-red-500 hover:text-red-400">
                Disconnect
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Twitter size={20} />
                <span>Twitter</span>
              </div>
              <button className="text-red-500 hover:text-red-400">
                Disconnect
              </button>
            </div>
          </div>
        </Section>

        {/* DANGER ZONE */}
        <Section icon={AlertTriangle} title="Danger Zone" borderColor="red">
          <div className="space-y-4">
            <button className="flex items-center gap-2 text-red-500 hover:text-red-400">
              <Trash2 size={18} />
              Delete Account
            </button>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default SettingsPage;