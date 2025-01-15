import Link from "next/link";
import { Calendar, ArrowLeft, Terminal, Info } from "lucide-react";

export default function OperatingSystemDualboot() {
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
          Operating System Dualboot: A Step-by-Step Guide
        </h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar size={16} />
          <time dateTime="2025-01-14">January 14, 2025</time>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Introduction</h2>
          <p>
            Dual-booting enables you to run two operating systems, such as Windows and Linux, on the
            same machine. It’s an excellent choice for developers, researchers, or anyone curious
            about exploring multiple OS environments without sacrificing performance. This guide
            covers everything from preparation to troubleshooting.
          </p>
        </section>

        {/* Preparation Section */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 text-blue-500 mb-4">
            <Info size={20} />
            <h2 className="text-2xl font-bold">Preparation: What You’ll Need</h2>
          </div>
          <ul className="list-disc list-inside space-y-3 bg-gray-100 p-4 rounded-md shadow">
            <li>A machine with at least 50 GB of free space.</li>
            <li>Bootable USB drives for both operating systems.</li>
            <li>Backups of important data to prevent accidental data loss.</li>
            <li>Basic familiarity with BIOS/UEFI settings.</li>
          </ul>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Steps to Set Up Dualboot</h2>
          <ol className="list-decimal list-inside space-y-6">
            <li>
              <strong>Backup Your Data:</strong> Use external drives or cloud storage to back up
              critical files.
            </li>
            <li>
              <strong>Create a Bootable USB:</strong> Download the ISO file of your operating system
              and create a bootable USB using{" "}
              <a
                href="https://rufus.ie/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rufus
              </a>{" "}
              or Balena Etcher.
            </li>
            <li>
              <strong>Partition Your Disk:</strong> Use disk management tools to create a partition
              with at least 25-50 GB of free space.
            </li>
            <li>
              <strong>Install the Second OS:</strong> Boot from the USB and follow the on-screen
              instructions to install the OS on the prepared partition.
            </li>
            <li>
              <strong>Configure the Bootloader:</strong> Ensure the bootloader (like GRUB for Linux)
              is correctly configured to show both operating systems during startup.
            </li>
          </ol>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Troubleshooting and Optimization</h2>
          <p className="mb-4">
            Encountered issues? Here are some common problems and how to solve them:
          </p>
          <div className="bg-gray-100 p-4 rounded-md shadow">
            <ul className="space-y-6">
              <li>
                <strong>Linux GRUB Not Showing Windows:</strong> Open a terminal and run:
                <pre className="bg-gray-900 text-white p-3 rounded-md mt-2">
                  <code>sudo update-grub</code>
                </pre>
              </li>
              <li>
                <strong>Windows Overwrites GRUB:</strong> Use a live Linux USB and install{" "}
                <code className="bg-gray-200 px-2 py-1 rounded">boot-repair</code> to fix GRUB.
              </li>
              <li>
                <strong>Disk Errors:</strong> Run <code>chkdsk</code> in Windows or{" "}
                <code>fsck</code> in Linux to resolve disk issues.
              </li>
            </ul>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Best Practices</h2>
          <p>To maximize your dual-boot experience, consider these tips:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Use separate drives for each OS to reduce risks of data corruption.</li>
            <li>Keep recovery tools like a live USB or recovery drive handy.</li>
            <li>Update both operating systems regularly to avoid compatibility issues.</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
