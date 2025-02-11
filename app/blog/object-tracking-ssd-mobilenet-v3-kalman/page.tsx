import Link from "next/link";
import { Calendar, ArrowLeft, Terminal, Info } from "lucide-react";

export default function ObjectTrackingKalman() {
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
          Advanced Object Tracking with SSD MobileNet V3 and Kalman Filter
        </h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar size={16} />
          <time dateTime="2025-02-11">February 11, 2025</time>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none text-gray-800 dark:text-gray-300 leading-relaxed">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Introduction</h2>
          <p>
            Real-time object tracking is a fundamental challenge in computer vision, essential for applications
            such as surveillance, autonomous systems, and human-computer interaction. 
            This article details my <b>implementation of an object tracking pipeline</b> using:
          </p>
          <ul className="list-disc list-inside space-y-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-md">
            <li><b>SSD MobileNet V3</b> for real-time object detection.</li>
            <li><b>Kalman Filter</b> for smooth and predictive tracking.</li>
            <li><b>OpenCV + TensorFlow</b> for integration and visualization.</li>
          </ul>
          <p>
            The goal is to <b>reduce detection noise, handle occlusions, and enable persistent tracking</b> across frames.
          </p>
        </section>

        {/* Model Architecture & Implementation */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 text-blue-500 mb-4">
            <Info size={20} />
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Implementation Workflow</h2>
          </div>
          <p>
            My pipeline integrates real-time object detection with <b>state estimation via Kalman filtering</b>. 
            Below is a breakdown of the architecture:
          </p>
          <ol className="list-decimal list-inside space-y-6 bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
            <li>
              <b>Object Detection (SSD MobileNet V3)</b>
              <ul className="list-disc ml-6 space-y-2">
                <li>Loaded the pre-trained <b>SSD MobileNet V3 (COCO-trained)</b> model using TensorFlow.</li>
                <li>Performed <b>real-time inference on video frames</b> using optimized TensorFlow graph execution.</li>
                <li>Extracted bounding boxes, confidence scores, and class labels.</li>
              </ul>
            </li>

            <li>
              <b>Tracking Initialization</b>
              <ul className="list-disc ml-6 space-y-2">
                <li>Used the <b>object centroids from SSD MobileNet</b> as initial measurements.</li>
                <li>Mapped bounding box coordinates to <b>state vectors</b> for Kalman filtering.</li>
              </ul>
            </li>

            <li>
              <b>Kalman Filtering for State Estimation</b>
              <ul className="list-disc ml-6 space-y-2">
                <li>Designed a <b>constant velocity motion model</b> for tracking.</li>
                <li>Defined <b>state vectors</b>: Position <code>(x, y)</code>, velocity <code>(vx, vy)</code>, and acceleration <code>(ax, ay)</code>.</li>
                <li>Implemented <b>Predict and Update Steps</b>:
                  <ul className="list-disc ml-6 space-y-2">
                    <li><b>Prediction:</b> Estimates next object position based on previous motion.</li>
                    <li><b>Update:</b> Adjusts prediction using SSD MobileNet’s detection.</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <b>Bounding Box Association (IoU + Hungarian Algorithm)</b>
              <ul className="list-disc ml-6 space-y-2">
                <li>Used <b>Intersection over Union (IoU)</b> to match detected objects with existing trackers.</li>
                <li>Applied the <b>Hungarian Algorithm</b> for optimal multi-object assignment.</li>
              </ul>
            </li>

            <li>
              <b>Visualization & Optimization</b>
              <ul className="list-disc ml-6 space-y-2">
                <li>Drew <b>smoothed bounding boxes</b> over time for consistent tracking.</li>
                <li>Used OpenCV to overlay tracking IDs and confidence scores.</li>
                <li>Optimized performance with <b>batch processing and TensorFlow Lite (TFLite)</b>.</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Optimization & Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Optimization & Key Challenges</h2>
          <p className="mb-4">
            To ensure <b>smooth and efficient object tracking</b>, I tackled the following challenges:
          </p>
          <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
            <ul className="space-y-6">
              <li>
                <b>Handling Occlusions:</b> 
                <ul className="list-disc ml-6 space-y-2">
                  <li>Used Kalman Filter to predict object motion even when detections were lost.</li>
                  <li>Implemented an <b>adaptive threshold</b> to reassign lost objects when they reappear.</li>
                </ul>
              </li>

              <li>
                <b>Reducing False Positives:</b>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Applied <b>confidence thresholding</b> to ignore weak detections.</li>
                  <li>Incorporated <b>Non-Maximum Suppression (NMS)</b> to remove duplicate bounding boxes.</li>
                </ul>
              </li>

              <li>
                <b>Improving Speed & Latency:</b>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Converted model to <b>TFLite</b> for mobile-friendly execution.</li>
                  <li>Ran inference on GPU using <b>TensorRT optimization</b>.</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Reference Section for Handwritten Notes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Reference: Handwritten Notes</h2>
            <p className="mb-4">
              Below are my handwritten notes on **Kalman Filter state estimation, covariance updates, and measurement corrections** used in this project.
              These illustrate the mathematical foundation behind the object tracking pipeline.
            </p>

            <div className="space-y-6">
              {/* PDF 1: State Vector & Prediction */}
              <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">State Vector & Prediction</h3>
                <iframe 
                  src="/pdfs/kalman1.pdf" 
                  className="w-full h-96 rounded-md border border-gray-300"
                  title="State Vector & Prediction"
                ></iframe>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Covers state transition matrix, predicted state vector, and covariance propagation.
                </p>
              </div>

              {/* PDF 2: Kalman Gain & Update Equations */}
              <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">Kalman Gain & Update Equations</h3>
                <iframe 
                  src="/pdfs/kalman2.pdf" 
                  className="w-full h-96 rounded-md border border-gray-300"
                  title="Kalman Gain & Update Equations"
                ></iframe>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Describes Kalman Gain computation, uncertainty reduction, and update covariance matrix.
                </p>
              </div>

              {/* PDF 3: Measurement & Correction */}
              <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">Measurement & Correction</h3>
                <iframe 
                  src="/pdfs/kalman3.pdf" 
                  className="w-full h-96 rounded-md border border-gray-300"
                  title="Measurement & Correction"
                ></iframe>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Explains measurement mapping, residual calculation, and final correction step.
                </p>
              </div>
            </div>
          </section>
        </section>
      </article>
    </div>
  );
}
