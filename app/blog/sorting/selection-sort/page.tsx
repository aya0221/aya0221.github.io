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
          Selection Sort
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
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">✅ Selection Sort Code O(n²)</h2>
          <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
            <code>
              {`def selection_sort(arr):
    for i in range(len(arr)):  # Iterate through each index where the next smallest element should go
        min = i  # Assume current index holds the minimum
        for inner in range(i+1, len(arr)):  # Find the smallest in the remaining array
            if arr[inner] < arr[min]:  
                min = inner  
        arr[i], arr[min] = arr[min], arr[i]  # Swap found minimum with current position
    return arr`}
            </code>
          </pre>
        </section>

        {/* Quick Review */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">📝 Quick Review for Fast Recall</h2>
          <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
            <li>✅ <b>Set left-most element as smallest → Scan from left-most element+1 to n-1 → Find the smallest in the scan → Swap left-most with scanned-smallest → Repeat</b></li>
            <li>✅ <b>O(n²) complexity → Bad for large inputs</b></li>
            <li>✅ <b>O(1) space → In-place sorting</b></li>
            <li>✅ <b>Minimizes swaps → Useful for memory-constrained environments</b></li>
            <li>✅ <b>Not stable → Relative order of equal elements may change</b></li>
            <li>✅ <b>Use Case?</b> When minimizing <b>swaps</b> is critical, like in limited memory write scenarios. Otherwise, go for better algorithms.</li>
            <li>✅ <b>Better alternatives?</b> QuickSort (O(n log n)), MergeSort (O(n log n))</li>
          </ul>
        </section>
        
      {/* Time Complexity & Number of Operations for Selection Sort */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">⏳ Time Complexity & Number of Operations (Selection Sort)</h2>
        <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
          <li>✅ <b>Best Case (Already Sorted):</b> O(n²) → Still iterates fully but minimal swaps</li>
          <li>✅ <b>Worst Case (Reverse Sorted):</b> O(n²) → Maximum comparisons and swaps</li>
          <li>✅ <b>Average Case (Random Order):</b> O(n²) → Consistently inefficient for large datasets</li>
          <li>✅ <b>Space:</b> O(1) → In-place sorting</li>
          <li>✅ <b>Total comparisons:</b> (n² - n) / 2</li>
          <li>✅ <b>Total swaps:</b> O(n)</li>
        </ul>
      </section>
      
        {/* Traps & Things to Watch Out For */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">⚠️ Traps & Things to Watch Out For</h2>
          <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
            <li><b>Misplacing swap logic:</b> Swap should happen <b>after</b> finding the minimum, <b>not inside the inner loop</b>.</li>
            <li><b>Wrong index comparison:</b> Always compare <code>arr[j] &lt; arr[min]</code>, <b>not</b> <code>arr[i] &lt; arr[min]</code>.</li>
            <li><b>Inefficiency for large inputs:</b> <b>Not optimal for big datasets</b>—mention better alternatives like QuickSort or MergeSort.</li>
            <li><b>Avoid using "min" as a variable name</b> (Python has a built-in <code>min()</code> function). Rename to <code>min_ind</code> if necessary.</li>
            <li><b>Selection Sort vs. Bubble Sort?</b>
              <ul className="list-disc ml-6 space-y-2">
                <li><b>Selection sort minimizes swaps but has the same time complexity.</b></li>
                <li><b>Bubble sort is stable, but Selection Sort is not.</b></li>
              </ul>
            </li>
          </ul>
        </section>
      
        {/* Image Explanation */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Selection Sort Explanation</h2>
          <div className="flex justify-center">
            <Image
              src="/images/blog/sorting/selectionsort.png"
              alt="Selection Sort Explanation"
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
