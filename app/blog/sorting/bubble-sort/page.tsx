import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";

export default function SortingAlgorithms() {
  return (
    <div className="pt-20 pb-16 px-8 max-w-4xl mx-auto">
      {/* Back to Blog Link */}
      <div className="mb-8">
        <Link href="/blog" className="flex items-center space-x-2 text-blue-500 hover:underline">
          <ArrowLeft size={16} />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold gradient-text mb-6">
          Bubble Sort
        </h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar size={16} />
          <time dateTime="2025-03-07">March 7, 2025</time>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none text-gray-800 dark:text-gray-300 leading-relaxed">
        {/* Solution Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">✅ Bubble Sort Code O(n²)</h2>
          <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
            <code>
              {`def bubble_sort(arr):
    for start in range(len(arr)):
        for i in range(len(arr)-1, start, -1):
            if arr[i - 1] > arr[i]:
                (arr[i - 1], arr[i]) = (arr[i], arr[i - 1])`}
            </code>
          </pre>
        </section>

        {/* Quick Review */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">📝 Quick Review for Fast Recall</h2>
          <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
            <li>✅ <b>Compare adjacent elements → Swap if out of order → Repeat until sorted</b></li>
            <li>✅ <b>O(n²) complexity → Inefficient for large datasets</b></li>
            <li>✅ <b>O(1) space → In-place sorting</b></li>
            <li>✅ <b>Stable → Preserves relative order of equal elements</b></li>
            <li>✅ <b>Use Case?</b> Simple implementation, useful for small datasets or teaching purposes.</li>
            <li>✅ <b>Better alternatives?</b> QuickSort (O(n log n)), MergeSort (O(n log n))</li>
          </ul>
        </section>

      {/* Time Complexity & Number of Operations for Bubble Sort */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">⏳ Time Complexity & Number of Operations (Bubble Sort)</h2>
        <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
          <li>✅ <b>Best Case (Already Sorted):</b> O(n) → Single pass without swaps</li>
          <li>✅ <b>Worst Case (Reverse Sorted):</b> O(n²) → Maximum swaps and comparisons</li>
          <li>✅ <b>Average Case (Random Order):</b> O(n²) → Performance remains poor</li>
          <li>✅ <b>Space:</b> O(1) → In-place sorting</li>
          <li>✅ <b>Total comparisons:</b> (n² - n) / 2</li>
          <li>✅ <b>Total swaps:</b> O(n²) in worst case</li>
        </ul>
      </section>

        {/* Traps & Things to Watch Out For */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">⚠️ Traps & Things to Watch Out For</h2>
          <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
            <li><b>Unnecessary comparisons:</b> Optimized versions stop early if no swaps occur.</li>
            <li><b>Inefficiency:</b> Not practical for large inputs—consider QuickSort or MergeSort.</li>
            <li><b>Confusion with other sorts:</b> Bubble Sort is stable, while Selection Sort is not.</li>
          </ul>
        </section>

        {/* Image Explanation */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Bubble Sort (bubble up from L → R version)</h2>
          <div className="flex justify-center">
            <Image
              src="/images/blog/sorting/bubblesort.png"
              alt="Bubble Sort Explanation"
              width={600}
              height={400}
              className="rounded-md shadow"
            />
          </div>
        </section>
      </article>
    </div>
  );
}
