'use client';

import { HelpCircle, BookOpen, MessageSquare, Mail } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';

const faqs = [
  {
    question: 'How do I enable two-factor authentication?',
    answer: 'Go to Security settings and click on "Enable 2FA". Follow the setup wizard to complete the process.'
  },
  {
    question: 'How can I change my password?',
    answer: 'Navigate to Security settings, click "Change Password", verify your current password, and set a new one.'
  },
  {
    question: 'What should I do if I forget my password?',
    answer: 'Click "Forgot Password" on the login page and follow the email verification process to reset it.'
  },
  {
    question: 'How do I delete my account?',
    answer: 'Go to Security settings, scroll to "Danger Zone", and click "Delete Account". Note this action is irreversible.'
  }
];

export function HelpSection() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-[#182235]/90 p-6 md:p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Support</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">Help Center</h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300">Find answers and get support for your account.</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/20 text-blue-400 flex-shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Documentation</h3>
              <p className="mt-2 text-slate-400">Read our comprehensive guides and tutorials</p>
              <Button className="mt-4">Read Docs</Button>
            </div>
          </div>
        </Card>

        <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-500/20 text-purple-400 flex-shrink-0">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Live Chat</h3>
              <p className="mt-2 text-slate-400">Chat with our support team in real-time</p>
              <Button className="mt-4">Start Chat</Button>
            </div>
          </div>
        </Card>

        <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)] md:col-span-2">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/20 text-cyan-400 flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Email Support</h3>
              <p className="mt-2 text-slate-400">Send us an email and we'll respond within 24 hours</p>
              <Button className="mt-4">Contact Us</Button>
            </div>
          </div>
        </Card>
      </div>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <HelpCircle size={28} />
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6 group">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-white hover:text-slate-200 transition">
                <span>{faq.question}</span>
                <span className="text-slate-400 group-open:rotate-180 transition transform">+</span>
              </summary>
              <p className="mt-4 text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Card>
    </div>
  );
}
