<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, Content-Type');
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [PostController::class, 'index'])->name('home');

Route::get('/statistics', function () {
    return Inertia::render('Frontpage/Statistics');
})->name('statistics');

Route::prefix('mitigasi')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Frontpage/Mitigation');
    })->name('mitigasi');
    Route::get('/tsunami', function () {
        return Inertia::render('Frontpage/MitigasiTsunami');
    })->name('tsunami');
});

Route::get('/news', function () {
    return Inertia::render('Frontpage/CreateNews');
})->name('news');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/report', function () {
    return Inertia::render('Frontpage/Report');
})->name('report');

Route::post('/report', [ReportController::class, 'store']);

Route::post('/contact', [ReportController::class, 'store'])->name('contact');

require __DIR__ . '/auth.php';
