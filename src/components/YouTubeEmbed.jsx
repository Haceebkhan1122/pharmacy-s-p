// components/YouTubeEmbed.jsx
import React from "react";

function getYouTubeId(url = "") {
  const regex =
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default function YouTubeEmbed({ url, title = "YouTube video", autoplay = false, params = "rel=0&modestbranding=1" }) {
  const id = getYouTubeId(url);
  if (!id) return null; // or show placeholder / error

  const autoplayParam = autoplay ? "&autoplay=1" : "";
  const src = `https://www.youtube-nocookie.com/embed/${id}?${params}${autoplayParam}`;

  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" /* 16:9 */ }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}
