"use client";
import React from "react";

const VideoModal = ({ isOpen, onClose, videoId }) => {
    if (!isOpen) return null;

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
                    }}
                >
                    X
                </button>

                {/* YouTube iframe */}
                <iframe
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoModal;
