import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Link } from '@inertiajs/react';

export default function LifehackIntroduction() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Introduction to Lifehacks</h1>
      <PlaceholderPattern className="h-[400px] w-full" />
      <div className="flex justify-between mt-8">
        <div></div>
        <Link
          href={route('lifehack.test')}
          className="text-blue-600 hover:text-blue-800"
          as="button"
        >
          Next: Lifehack Test →
        </Link>
      </div>
    </div>
  );
}