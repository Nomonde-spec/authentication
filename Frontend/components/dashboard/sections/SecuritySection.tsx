'use client';

import { Shield, Lock, Smartphone, Eye, EyeOff, Trash2 } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { useState } from 'react';

export function SecuritySection() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-[#182235]/90 p-6 md:p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Protection</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">Security</h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300">Manage your account security and privacy settings.</p>
      </section>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <h2 className="text-2xl font-semibold text-white mb-6">Password & Authentication</h2>

        <div className="space-y-6">
          <div className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Lock size={20} className="text-blue-400" />
                  Password
                </h3>
                <p className="text-sm text-slate-400 mt-1">Last changed 30 days ago</p>
              </div>
              <Button className="w-full md:w-auto">Change Password</Button>
            </div>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Smartphone size={20} className="text-purple-400" />
                  Two-Factor Authentication
                </h3>
                <p className="text-sm text-slate-400 mt-1">Add an extra layer of security</p>
              </div>
              <Button className="w-full md:w-auto">Enable 2FA</Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <h2 className="text-2xl font-semibold text-white mb-6">Active Sessions</h2>

        <div className="space-y-4">
          <div className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">Windows - Chrome</h3>
                <p className="text-sm text-slate-400 mt-1">Last active: Just now</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300 w-fit">
                Active
              </span>
            </div>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">iPhone - Safari</h3>
                <p className="text-sm text-slate-400 mt-1">Last active: 2 hours ago</p>
              </div>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Trash2 size={16} className="mr-1" /> Logout
              </Button>
            </div>
          </div>
        </div>

        <Button variant="outline" className="w-full mt-6">Logout All Other Devices</Button>
      </Card>

      <Card className="rounded-[28px] border border-red-500/20 bg-red-500/10 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(239,68,68,0.2)]">
        <h2 className="text-2xl font-semibold text-white mb-4">Danger Zone</h2>
        <p className="text-slate-400 mb-6">Irreversible actions</p>
        <Button variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/20">
          Delete Account
        </Button>
      </Card>
    </div>
  );
}
