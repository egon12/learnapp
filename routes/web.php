<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Lifehack Module Routes
    Route::prefix('module/lifehack')->group(function () {
        Route::get('page_01_introduction', function () {
            return Inertia::render('module/lifehack/page_01_introduction');
        })->name('lifehack.introduction');

        Route::get('page_02_test', function () {
            return Inertia::render('module/lifehack/page_02_test');
        })->name('lifehack.test');

        Route::get('page_03_summary_test', function () {
            return Inertia::render('module/lifehack/page_03_summary_test');
        })->name('lifehack.summary');
    });

    Route::prefix('module/impostor')->group(function () {
        Route::get('page_01_introduction', function () {
            return Inertia::render('module/impostor/page_01_introduction');
        })->name('impostor.introduction');

        Route::get('page_02', function () {
            return Inertia::render('module/impostor/page_02');
        })->name('impostor.page_02');

        Route::get('page_03_summary_test', function () {
            return Inertia::render('module/impostor/page_03_summary_test');
        })->name('impostor.summary');
    });

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
