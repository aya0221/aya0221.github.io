"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const videos = [
  { id: "VIDEO_ID_1", title: "AI in Robotics: Future Perspectives" },
  { id: "VIDEO_ID_2", title: "Machine Learning for Computer Vision" },
  { id: "VIDEO_ID_3", title: "Neural Networks Explained" },
  // Add more videos as needed
];

export default function VideoPage() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-6xl space-y-16">
        {/* Header Section */}
        <section className="space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Video Content</h1>
          <p className="text-lg text-muted-foreground">
            Explore my video content on AI, machine learning, and robotics.
          </p>
        </section>

        {/* Main Content Section */}
        <section className="grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Active Video Section */}
          <div className="space-y-4">
            <div className="aspect-video">
              {activeVideo.id ? (
                <YouTube
                  videoId={activeVideo.id}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              ) : (
                <p className="text-center text-red-500">
                  No video selected. Please choose a video from the list.
                </p>
              )}
            </div>
            <h2 className="text-2xl font-semibold">{activeVideo.title}</h2>
          </div>

          {/* More Videos Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">More Videos</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    activeVideo.id === video.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {video.title}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
