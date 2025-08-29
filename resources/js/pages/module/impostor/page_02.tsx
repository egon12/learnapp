import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import downArrow from '@/pages/module/impostor/assets/downArrow.svg';
import pencil from '@/pages/module/impostor/assets/pencil.svg';
import impostorGif01 from '@/pages/module/impostor/assets/impostor_gif_01.gif';
import prevArrow from '@/pages/module/impostor/assets/lessonPrevArrow.svg';
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
  {
    title: 'What is impostor syndrome?',
    href: '/module/impostor/page_02',
  },
];

export default function ImposterSyndromePage02() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="What is impostor syndrome?" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6">
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">What is impostor syndrome?</h1>
          <div className="relative z-10 space-y-6 text-neutral-800 dark:text-neutral-200">
            <p>In recent years, impostor syndrome has become pretty well-known. And it's not a disease or an abnormality: research has found that up to 82% of people suffer from impostor syndrome!&nbsp;</p>
            <iframe style={{
                width: "100%",
                aspectRatio: "16 / 9",
                border: "0",
            }}
            src="https://www.youtube.com/embed/STNa_7dfYjY" title="Impostor Syndrome" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="p-6 rounded-lg bg-white/80 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Read video transcript</h3>
                <img src={downArrow} alt="open" className={`transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} />
              </div>
              {isAccordionOpen && (
                <div className="mt-4 space-y-4">
                  <p>In simple terms, impostor syndrome is thinking and feeling that you’re not as competent or qualified as you might seem, and that sooner or later, people will find out about it.</p>
                  <p>People who struggle with impostor syndrome are unable to internalize their accomplishments. They don’t ascribe their achievements to their own competence, but rather to external factors such as luck or help from others. They doubt themselves no matter how experienced or successful they are. This is also how impostor syndrome differs from ‘regular’ insecurity. Everybody feels a bit of self-doubt now and then, especially when doing something that is new, and that’s completely normal.</p>
                  <p>Usually the more we do something, the more confident we tend to get. But people who suffer from impostor syndrome don’t get more confident, even if they successfully did something a dozen times over. That’s because they tend to feel that it wasn’t them that did well, but that their success was due to some other factors.</p>
                  <p>On the other hand, when it comes to “failure”, people who experience impostor syndrome tend to attribute the negative results to themselves. They think, for example, that the failure happened because they are not smart enough, rather than: there were circumstances that prevented them from performing optimally.&nbsp;</p>
                  <p>And so they worry about being exposed as a fraud, that sooner or later people will find out that they’re not competent after all, and everything will come crashing down.</p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Impostor syndrome is unique to each person. Describe your personal experience with impostor syndrome. When do you feel like an impostor and how does that influence your life?</h3>
              <div className="flex items-start space-x-4">
                <img src={pencil} alt="pencil" />
                <textarea placeholder="Your answer..." className="w-full p-2 border rounded"></textarea>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={impostorGif01} />
              <div>
                <h3 className="text-xl font-semibold">'Impostor' thoughts</h3>
                <p>Impostor syndrome is characterized by certain negative thoughts about the self.&nbsp;</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Here are some common thoughts that are often experienced by people with impostor syndrome. Which of these thoughts do you also have? Check all that apply:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><input type="checkbox" id="thought1" /><label htmlFor="thought1"> Others are better at this than I am.&nbsp;</label></li>
                <li><input type="checkbox" id="thought2" /><label htmlFor="thought2"> Others know more than I do</label></li>
                <li><input type="checkbox" id="thought3" /><label htmlFor="thought3"> I don’t know what I’m doing, I just wing it</label></li>
                <li><input type="checkbox" id="thought4" /><label htmlFor="thought4"> Sooner or later people are going to find out that I’m just winging it</label></li>
                <li><input type="checkbox" id="thought5" /><label htmlFor="thought5"> I don’t deserve to be where I am, I didn’t earn it</label></li>
                <li><input type="checkbox" id="thought6" /><label htmlFor="thought6"> I just got lucky</label></li>
                <li><input type="checkbox" id="thought7" /><label htmlFor="thought7"> I only succeeded because of &lt;external reason&gt;</label></li>
                <li><input type="checkbox" id="thought8" /><label htmlFor="thought8"> I don’t belong</label></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Think back to (recent) situations in which you felt like an impostor. What kinds of thoughts did you have that aren’t in the list above?&nbsp;</h3>
              <div className="flex items-start space-x-4">
                <img src={pencil} alt="pencil" />
                <textarea placeholder="Your answer..." className="w-full p-2 border rounded"></textarea>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <Link
                href={route('impostor.introduction')}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center"
                as="button"
              >
                <img src={prevArrow} className="mr-2" /> Previous
              </Link>
              <Link
                href="/module/impostor/page_03_summary_test"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center"
                as="button"
              >
                Next <img src={nextArrow} className="ml-2" />
              </Link>
            </div>
          </div>
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
        </div>
      </div>
    </AppLayout>
  );
}
