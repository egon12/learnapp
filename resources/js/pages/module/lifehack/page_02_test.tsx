import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Lifehacks',
    href: route('lifehack.introduction'),
  },
  {
    title: 'Test',
    href: route('lifehack.test'),
  },
];

export default function LifehackTest() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Lifehack Test" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6">
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Lifehack Test</h1>
          <div className="space-y-8 relative z-10">
            <p className="text-lg text-neutral-800 dark:text-neutral-200">
              Let's test your knowledge about the lifehacks we just learned. Choose the best answer for each question.
            </p>

            <div className="space-y-8">
              <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Question 1: The 2-Minute Rule</h3>
                <p className="mb-4 text-neutral-800 dark:text-neutral-200">What should you do with tasks that take less than 2 minutes?</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q1" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Schedule them for later</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q1" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Do them immediately</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q1" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Delegate them to others</span>
                  </label>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Question 2: Home Organization</h3>
                <p className="mb-4 text-neutral-800 dark:text-neutral-200">Which of these is a smart way to organize bed sheets?</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q2" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Fold them in squares</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q2" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Store them inside their matching pillowcase</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q2" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Keep them in plastic bags</span>
                  </label>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Question 3: Digital Productivity</h3>
                <p className="mb-4 text-neutral-800 dark:text-neutral-200">What's a recommended way to handle repetitive email responses?</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q3" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Type them manually each time</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q3" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Create email templates</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="q3" className="form-radio" />
                    <span className="text-neutral-800 dark:text-neutral-200">Ignore the emails</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          <div className="relative z-10 flex justify-between mt-8">
            <Link
              href={route('lifehack.introduction')}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              as="button"
            >
              ← Previous: Introduction
            </Link>
            <Link
              href={route('lifehack.summary')}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              as="button"
            >
              Next: Summary Test →
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}