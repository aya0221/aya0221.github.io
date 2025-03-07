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
          Insertion Sort
        </h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar size={16} />
          <time dateTime="2025-03-07">March 7, 2025</time>
        </div>
      </header>

      {/* Solution Code */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">✅ Insertion Sort Code O(n²)</h2>
        <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
          <code>
            {`def insertion_sort(arr):
    n = len(arr)
    
    for i in range(1, n):
        key = arr[i]  # Store the value to be inserted
        j = i - 1
        
        # Shift elements of arr[0..i-1] that are greater than key
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        # Insert the stored value at the correct position
        arr[j + 1] = key
    
    return arr`}
          </code>
        </pre>
      </section>

      {/* Quick Review */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">📝 Quick Review for Fast Recall</h2>
        <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
          <li>✅ <b>Comparison-based sorting algorithm</b></li>
          <li>✅ <b>Stable:</b> Does not change the relative order of elements with equal values</li>
          <li>✅ <b>In-place:</b> Uses O(1) extra space</li>
          <li>✅ <b>Efficient for small or nearly sorted datasets</b></li>
          <li>✅ <b>Not efficient for large datasets</b></li>
        </ul>
      </section>

      {/* Time Complexity & Number of Operations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">⏳ Time Complexity & Number of Operations</h2>
        <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
          <li>✅ <b>Best Case (Already Sorted):</b> O(n) → Only compares, no shifting</li>
          <li>✅ <b>Worst Case (Reverse Sorted):</b> O(n²) → Each element inserted at the beginning</li>
          <li>✅ <b>Average Case (Random Order):</b> O(n²) → Expected number of swaps = O(n² / 4)</li>
          <li>✅ <b>Total possible pairs in an array:</b> n * (n – 1) / 2</li>
          <li>✅ <b>Worst-case inversions (reverse sorted):</b> n * (n – 1) / 2</li>
          <li>✅ <b>Best-case inversions (already sorted):</b> 0</li>
          <li>✅ <b>Average-case inversions (random order):</b> n * (n – 1) / 4</li>
        </ul>
      </section>

      {/* Traps & Things to Watch Out For */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">⚠️ Traps & Things to Watch Out For</h2>
        <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
          <li>✅ <b>Off-by-one errors:</b> Be careful with boundary conditions in loops</li>
          <li>✅ <b>Unoptimized comparisons:</b> If detecting a sorted array, stop early to reduce complexity</li>
          <li>✅ <b>Confusion between i and j:</b> Ensure j shifts elements and i marks the next pivot</li>
          <li>✅ <b>Inefficient for large inputs:</b> Avoid for n {">"} 1000; use QuickSort/MergeSort instead</li>
        </ul>
      </section>

      {/* Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">📌 Steps</h2>
        <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
          <li>✅ <b>Start iterating from index 1:</b> Treat the first element as sorted</li>
          <li>✅ <b>Set pivot element (key = A[i]):</b> This is the element to be placed in the correct position</li>
          <li>✅ <b>Initialize comparison pointer j = i - 1:</b> Start from the last sorted element</li>
          <li>✅ <b>Shift elements if necessary:</b> While A[j] {">"} key, shift A[j] to A[j+1] and decrement j</li>
          <li>✅ <b>Insert key at the correct position:</b> Key is placed at A[j+1] ensuring left side remains sorted</li>
          <li>✅ <b>Repeat for all elements:</b> Continue until the entire array is sorted</li>
        </ul>
      </section>

      {/* Image Explanation */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">
        Insertion Sort (
        <span className="text-orange-500">key at ith</span>,  
        <span className="text-blue-500">jth</span>,  
        <span className="text-green-500">sorted</span>,  
        unsorted)
        </h2>
        <div className="flex justify-center">
          <Image
            src="/images/blog/sorting/insertionsort.png"
            alt="Insertion Sort Explanation"
            width={600}
            height={400}
            className="rounded-md shadow"
          />
        </div>
      </section>
    </div>
  );
}
