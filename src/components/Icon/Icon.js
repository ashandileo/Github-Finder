import React from 'react';
import video from '../../assets/video/post-start-it-up-2.mp4'

const Icon = () => (
  <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-mt-3">
    <video
    className="tw-w-9/12"
    src={video}
    playsInline
    muted
    autoPlay
    loop
  />
  </div>
)

export default Icon;