'use client';

import { Settings, Bell, Globe, Eye } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';

export function SettingsSection() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-[#182235]/90 p-6 md:p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Configuration</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">Settings</h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300">Customize your experience and preferences.</p>
      </section>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <h2 className="text-2xl font-semibold text-white mb-6">Notifications</h2>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Bell size={18} className="text-yellow-400" />
                Email Notifications
              </h3>
              <p className="text-sm text-slate-400 mt-1">Receive email updates about your account</p>
            </div>
            <Switch defaultChecked className="flex-shrink-0" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Bell size={18} className="text-blue-400" />
                Security Alerts
              </h3>
              <p className="text-sm text-slate-400 mt-1">Get notified of suspicious activity</p>
            </div>
            <Switch defaultChecked className="flex-shrink-0" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Bell size={18} className="text-green-400" />
                Marketing Emails
              </h3>
              <p className="text-sm text-slate-400 mt-1">Receive updates about new features</p>
            </div>
            <Switch className="flex-shrink-0" />
          </div>
        </div>
      </Card>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <h2 className="text-2xl font-semibold text-white mb-6">Privacy</h2>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Eye size={18} className="text-purple-400" />
                Profile Visibility
              </h3>
              <p className="text-sm text-slate-400 mt-1">Make your profile visible to others</p>
            </div>
            <Switch defaultChecked className="flex-shrink-0" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Globe size={18} className="text-cyan-400" />
                Analytics
              </h3>
              <p className="text-sm text-slate-400 mt-1">Allow us to collect usage data</p>
            </div>
            <Switch defaultChecked className="flex-shrink-0" />
          </div>
        </div>
      </Card>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <h2 className="text-2xl font-semibold text-white mb-6">Appearance</h2>

        <div className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
          <label className="block text-sm font-medium text-slate-300 mb-3">Theme</label>
          <select className="w-full rounded-[16px] border border-white/10 bg-[#111827] px-4 py-3 text-white focus:outline-none focus:border-blue-500">
            <option>Dark Mode</option>
            <option>Light Mode</option>
            <option>Auto</option>
          </select>
        </div>
      </Card>
    </div>
  );
}
