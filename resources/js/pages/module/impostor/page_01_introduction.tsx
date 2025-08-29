import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import impostor_image_01 from '@/assets/impostor_image_01.jpg';
import nextArrow from '@/pages/module/impostor/assets/lessonNextArrow.svg';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Module',
    href: '/module',
  },
  {
    title: 'Imposter Syndrome',
    href: '/module/impostor/page_01_introduction',
  },
];

export default function ImposterSyndromeIntroduction() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Imposter syndrome, begone!" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6">
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Imposter syndrome, begone!</h1>
          <div className="relative z-10 space-y-6 text-neutral-800 dark:text-neutral-200">
            <p className="text-lg">
            There’s this little voice you might be familiar with. The one that tells you that you don’t know what you’re doing. That you just got lucky. That sooner or later people will realize this and everything will fall apart. This is the voice of impostor syndrome. If you struggle with this, you're in the right place.
            </p>

            <div className="p-4 rounded-lg bg-white/70 border border-neutral-200 space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">In this module, you’ll learn...</h2>
              <p>
                  <ul className="list-disc list-inside space-y-2">
                      <li>What impostor syndrome really is</li>
                      <li>What causes it and how it affects your life</li>
                      <li>3 ways to overcome impostor syndrome</li>
                  </ul>

              </p>
            </div>
            <img src={impostor_image_01} />

            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Before we get into it: describe your personal goal(s) with regards to impostor syndrome.</h3>
                <p>What would you like to achieve after doing this module?</p>
                <p>
                    Short-term goals and long-term goals are both important, but for this exercise, we suggest setting goals within the coming month. Attainable, ‘smaller’ goals are much easier to reach and will therefore quickly give you a boost of positivity and motivation.1
                </p>
                <p>
                    Do you want an extra high chance of success? Then formulate a SMART goal. You will learn more about this in the video below.
                </p>

            </div>
            <iframe style={{
                width: "100%",
                aspectRatio: "16 / 9",
                border: "0",
            }}
            src="https://www.youtube.com/embed/0Wi29WkgFTc" title="SMART Goals" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="p-6 rounded-lg bg-white/80 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">What is a SMART goal?</h3>
              <p className="mb-4">An effective, well-formulated goal is a SMART goal.2</p>
              <ul className="list-disc list-inside space-y-4">
                <li><strong>S</strong> stands for <strong>specific</strong>. A specific goal has a much greater chance of being accomplished than a general goal.3 So make sure to identify what exactly you want to do in terms of behaviour. “Get in shape” is vague, whereas “Going for a half-hour run twice a week" gives a lot of direction.</li>
                <li><strong>M</strong> is <strong>measurable</strong>. You should have concrete criteria for measuring progress toward the goal. To determine if your goal is measurable, ask questions such as: How much? How many? How will I know that I'm sticking to it? How will I know when it's accomplished? So not "work out more” but rather: “work out 2 days a week”.</li>
<li><strong>A</strong> stands for attainable. Goals are most motivating when they are neither too easy (which is not challenging enough) nor too difficult (which can be demotivating). For example, if you hardly ever exercise at the moment, it's not very realistic to expect yourself to run a marathon in a few weeks. So make sure your goal is realistic.</li>
    <li><strong>R</strong> is <strong>relevant</strong>. Asking yourself what your reasons are for wanting to achieve this goal can also increase your motivation. Why is this goal important to you? What will you gain if you succeed? Maybe you want to exercise because it relaxes you, makes you feel more fit, or because it increases your self-confidence. Whatever your reasons, make sure the goal is meaningful for you!</li>
    <li><strong>T</strong> stands for <strong>time-bound</strong>. A goal should be grounded within a time frame. Goals that can be reached in the short run are often more motivating than goals you know will take a long time.5 If you want to run twice a week, you could say you want to start this Tuesday and keep it up for the next three months.</li>
              </ul>
            </div>

            <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
And that's how you set a SMART goal!
&nbsp;&nbsp;&nbsp;&nbsp;Let's Go!
            </p>
          </div>
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          <div className="relative z-10 flex justify-between mt-8">
            <div></div>
            <Link
              href="/module/impostor/page_02"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center"
              as="button"
            >
              Next: What is impostor syndrome? <img src={nextArrow} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
