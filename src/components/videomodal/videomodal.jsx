"use client";
import React from "react";

const VideoModal = ({ isOpen, onClose, videoId }) => {
    if (!isOpen) return null;

    function getEmbedUrl(youtubeUrl) {
        try {
            const url = new URL(youtubeUrl);
            const videoId = url.searchParams.get("v");
            return `https://www.youtube.com/embed/${videoId}`;
        } catch (err) {
            console.error("Invalid YouTube URL", err);
            return null;
        }
    }

    // Usage
    const embedUrl = getEmbedUrl(videoId);

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "80%",
                    maxWidth: "800px",
                    background: "#000",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        right: 15,
                        top: 10,
                        background: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: 30,
                        height: 30,
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: '#000'
                    }}
                >
                    X
                </button>

                {/* YouTube iframe */}
                {embedUrl && (
                    <iframe
                        width="100%"
                        height="450"
                        src={embedUrl}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default VideoModal;
