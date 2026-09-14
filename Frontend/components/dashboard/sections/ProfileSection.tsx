'use client';

import { User, Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

export function ProfileSection() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-[#182235]/90 p-6 md:p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Account</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">Profile</h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300">View and update your personal information.</p>
      </section>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Profile Information</h2>
          <p className="mt-1 text-slate-400">Manage your account details</p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-[#4F7BFF] to-[#8B5CF6] text-white shadow-lg">
                <User size={40} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Nomonde Mhlanga</h3>
              <p className="text-slate-400">Premium Member</p>
              <Button className="mt-4">Change Avatar</Button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#111827]/90 px-4 py-3">
                  <Mail size={18} className="text-slate-500" />
                  <input
                    type="email"
                    defaultValue="nomonde@example.com"
                    className="w-full bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#111827]/90 px-4 py-3">
                  <Phone size={18} className="text-slate-500" />
                  <input
                    type="tel"
                    placeholder="Add phone number"
                    className="w-full bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#111827]/90 px-4 py-3">
                  <MapPin size={18} className="text-slate-500" />
                  <input
                    type="text"
                    placeholder="Add location"
                    className="w-full bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 pt-4">
            <Button className="flex-1">Save Changes</Button>
            <Button variant="outline" className="flex-1">Cancel</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
