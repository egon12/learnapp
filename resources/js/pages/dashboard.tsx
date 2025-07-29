import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import ModuleSelection from '@/components/module/module-selection';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" >
            </Head>

            <div className="flex flex-col p-4 gap-4">
                <div>
                    <h1>Emotional wellbeing</h1>
                    <ModuleSelection />
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Link
                        href={route('lifehack.introduction')}
                        className="group relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 transition-colors hover:border-blue-500 dark:border-sidebar-border dark:hover:border-blue-400"
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400">Boost your mood</h3>
                            <p className="text-sm text-neutral-600 group-hover:text-blue-500 dark:text-neutral-400 dark:group-hover:text-blue-300">Learn useful life tips and tricks</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </Link>

                    <Link
                        href={route('lifehack.introduction')}
                        className="group relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 transition-colors hover:border-blue-500 dark:border-sidebar-border dark:hover:border-blue-400"
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400">Stress Less and Relax More</h3>
                            <p className="text-sm text-neutral-600 group-hover:text-blue-500 dark:text-neutral-400 dark:group-hover:text-blue-300">Learn useful life tips and tricks</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </Link>

                    <Link
                        href={route('lifehack.introduction')}
                        className="group relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 transition-colors hover:border-blue-500 dark:border-sidebar-border dark:hover:border-blue-400"
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400">p/'.lo'Healtify' your life style</h3>
                            <p className="text-sm text-neutral-600 group-hover:text-blue-500 dark:text-neutral-400 dark:group-hover:text-blue-300">Learn useful life tips and tricks</p>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </Link>


                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
