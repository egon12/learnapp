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
];

export default function LifehackIntroduction() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Introduction to Lifehacks" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6">
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Introduction to Lifehacks</h1>
          <div className="relative z-10 space-y-6 text-neutral-800 dark:text-neutral-200">
            <p className="text-lg">
              Welcome to the world of lifehacks! These clever solutions and smart shortcuts can make your daily life easier, more efficient, and more enjoyable. Let's explore some practical tips that you can start using today.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Why Lifehacks Matter?</h2>
              <p>
                Lifehacks are creative solutions that help you solve common problems, save time, and reduce stress. They're the little tricks that make you think, "Why didn't I think of that before?"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Time Management</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use the 2-minute rule: If a task takes less than 2 minutes, do it immediately</li>
                  <li>Plan your day the night before to start your morning with purpose</li>
                  <li>Break large tasks into smaller, manageable chunks</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Home Organization</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use a tension rod under the sink to hang cleaning supplies</li>
                  <li>Store bed sheets inside their matching pillowcase</li>
                  <li>Label cords with bread tags to identify electronics</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Digital Productivity</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Use keyboard shortcuts to speed up your work</li>
                <li>Create email templates for common responses</li>
                <li>Set up automatic file backups to prevent data loss</li>
                <li>Use browser bookmarks folders to organize research</li>
              </ul>
            </div>

            <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Ready to learn more? Let's test your knowledge of these lifehacks and discover even more useful tips!
            </p>
          </div>
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          <div className="relative z-10 flex justify-between mt-8">
            <div></div>
            <Link
              href={route('lifehack.test')}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              as="button"
            >
              Next: Lifehack Test →
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}