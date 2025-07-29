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
    title: 'Summary Test',
    href: route('lifehack.summary'),
  },
];

export default function LifehackSummaryTest() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Lifehack Summary Test" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6">
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Lifehack Summary Test</h1>
          <div className="space-y-8 relative z-10">
            <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Key Takeaways</h2>
              <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
                <p>
                  Throughout this module, we've explored various lifehacks that can improve different aspects of your daily life:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Time Management: Using the 2-minute rule and breaking down tasks</li>
                  <li>Home Organization: Creative storage solutions and labeling systems</li>
                  <li>Digital Productivity: Utilizing templates and shortcuts</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Final Challenge: Creating Your Own Lifehack</h3>
              <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                Think about a common problem you face and create your own lifehack. Consider these aspects:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
                  <label className="block">
                    <span className="block mb-2 text-neutral-900 dark:text-neutral-100">What problem does your lifehack solve?</span>
                    <textarea
                      className="w-full p-2 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      rows={2}
                      placeholder="Describe the problem..."
                    ></textarea>
                  </label>
                </div>

                <div className="p-4 rounded-lg bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
                  <label className="block">
                    <span className="block mb-2 text-neutral-900 dark:text-neutral-100">Your Lifehack Solution:</span>
                    <textarea
                      className="w-full p-2 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      rows={3}
                      placeholder="Describe your solution..."
                    ></textarea>
                  </label>
                </div>

                <div className="p-4 rounded-lg bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
                  <label className="block">
                    <span className="block mb-2 text-neutral-900 dark:text-neutral-100">How effective is your solution? (Rate 1-10)</span>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="w-full p-2 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      placeholder="Enter a number between 1 and 10"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Share Your Knowledge</h3>
              <p className="text-neutral-800 dark:text-neutral-200">
                Remember, the best lifehacks are often born from personal experience. Don't hesitate to share your own lifehacks with others and keep exploring new ways to make life easier and more efficient!
              </p>
            </div>
          </div>
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          <div className="relative z-10 flex justify-between mt-8">
            <Link
              href={route('lifehack.test')}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              as="button"
            >
              ← Previous: Lifehack Test
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}