import React, { useState, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import axios from 'axios';

const RecordView = () => {
  const [videoFile, setVideoFile] = useState(null);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  useEffect(() => {
    const fetchVideoBlob = async () => {
      if (mediaBlobUrl) {
        const response = await fetch(mediaBlobUrl);
        const blob = await response.blob();
        setVideoFile(blob);
      }
    };
    fetchVideoBlob();
  }, [mediaBlobUrl]);

  const uploadVideo = async () => {
    if (!videoFile) {
      console.error('No video file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('video', videoFile, 'recorded-video.mp4');

    try {
      const response = await axios.post('http://localhost:3000/api/users/uploadvideo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Video uploaded successfully!');
      } else {
        console.error('Failed to upload video');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <button onClick={uploadVideo}>Mandar Video</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default RecordView;