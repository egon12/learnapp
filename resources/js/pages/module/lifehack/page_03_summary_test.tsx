import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Link } from '@inertiajs/react';

export default function LifehackSummaryTest() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Lifehack Summary Test</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlaceholderPattern className="h-[300px] w-full" />
        <PlaceholderPattern className="h-[300px] w-full" />
      </div>
      <div className="flex justify-between mt-8">
        <Link
          href={route('lifehack.test')}
          className="text-blue-600 hover:text-blue-800"
          as="button"
        >
          ← Previous: Lifehack Test
        </Link>
        <div></div>
      </div>
    </div>
  );
}