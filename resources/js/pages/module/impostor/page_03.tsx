import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import nextArrow from '@/pages/module/impostor/assets/lessonNextArrow.svg';
import prevArrow from '@/pages/module/impostor/assets/lessonPrevArrow.svg';
import writeDownImage from '@/pages/module/impostor/assets/write_down.png';
import talkTrustImage from '@/pages/module/impostor/assets/talk_trust.png';
import betterImage from '@/pages/module/impostor/assets/better.png';
import pencilIcon from '@/pages/module/impostor/assets/pencil.svg';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Module',
    href: '/module',
  },
  {
    title: 'Imposter Syndrome',
    href: '/module/impostor/page_01_introduction',
  },
  {
    title: 'Step 1: Talk about it',
    href: '/module/impostor/page_03',
  },
];

export default function ImposterSyndromeStep1() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Step 1: Talk about it" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6">
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Step 1: Talk about it</h1>
          <div className="relative z-10 space-y-6 text-neutral-800 dark:text-neutral-200">
            <p className="text-lg">
              By talking about it, you realise you’re not the only one and you might even receive a bonus and you’ll get lots of confirmation that you <strong>ARE</strong> skilled and that helps. Here are some tips to start a conversation:
            </p>

            <div className="flex items-center gap-6">
              <img src={writeDownImage} className="w-1/4" />
              <div>
                <h6 className="font-semibold text-lg">Have a think about what you want to share</h6>
                <p>It can sometimes feel overwhelming to share your thoughts and insecurities, so it can help to think about it prior to the conversation or put some thoughts into paper.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src={talkTrustImage} className="w-1/4" />
              <div>
                <h6 className="font-semibold text-lg">Talk to someone you trust deeply first</h6>
                <p>You might discover that they can relate to your feelings. As it becomes more and more ‘normal’ to talk about these things, you can start opening up to more people.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src={betterImage} className="w-1/4" />
              <div>
                <h6 className="font-semibold text-lg">Trust it will get better</h6>
                <p>It can sometimes feel a bit nerve-wracking to start these conversations, but trust that it will get better as the talk continues.</p>
              </div>
            </div>

            <p>Now let’s make an action plan more specific to you.</p>

            <div className="space-y-4">
                <div className="font-semibold">First, what would you like to share exactly? Write down the thoughts and feelings you’d like to talk about, and how these affect you.</div>
                <div className="relative">
                    <img src={pencilIcon} alt="pencil" className="absolute top-3 left-3 w-5 h-5" />
                    <textarea placeholder="Your answer..." className="w-full p-2 pl-10 border rounded-lg bg-white/80 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700"></textarea>
                </div>
            </div>

            <div className="space-y-4">
                <div className="font-semibold">Who could you talk about impostor syndrome with? And when/where can you have this talk? (And make sure to follow through!)</div>
                <div className="relative">
                    <img src={pencilIcon} alt="pencil" className="absolute top-3 left-3 w-5 h-5" />
                    <textarea placeholder="Your answer..." className="w-full p-2 pl-10 border rounded-lg bg-white/80 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700"></textarea>
                </div>
            </div>

            <p>While talking about it is a great first step, it's also necessary to take action to be able to create a better relationship with yourself. So let's move on to step 2!</p>

          </div>
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          <div className="relative z-10 flex justify-between mt-8">
            <Link
                href="/module/impostor/page_02"
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center"
                as="button"
            >
                <img src={prevArrow} className="mr-2" /> Previous: What causes it
            </Link>
            <Link
              href="/module/impostor/page_04"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center"
              as="button"
            >
              Next: Step 2 <img src={nextArrow} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
