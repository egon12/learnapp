import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Link } from '@inertiajs/react';

export default function LifehackTest() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Lifehack Test</h1>
      <div className="space-y-6">
        <PlaceholderPattern className="h-[200px] w-full" />
        <PlaceholderPattern className="h-[200px] w-full" />
      </div>
      <div className="flex justify-between mt-8">
        <Link
          href={route('lifehack.introduction')}
          className="text-blue-600 hover:text-blue-800"
          as="button"
        >
          ← Previous: Introduction
        </Link>
        <Link
          href={route('lifehack.summary')}
          className="text-blue-600 hover:text-blue-800"
          as="button"
        >
          Next: Summary Test →
        </Link>
      </div>
    </div>
  );
}