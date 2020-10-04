import React from 'react';
import react from '../../assets/img/React.webp';
import githubApi from '../../assets/img/github-api.jpg';
import tailwind from '../../assets/img/tailwindcss.png';

const About = () => (
  <div className="container">
    <div className="tw-mt-4">
      <p className="tw-text-gray-700 tw-mb-4">Created by Ashandi Leonadi - 2020, using :</p>
      <div className="tw-flex tw-flex-col tw-justify-start tw-items-start lg:tw-flex-row lg:tw-items-center">
        <img src={react} className="tw-w-32" />
        <img src={githubApi} className="tw-w-32 tw-my-4 lg:tw-my-0" />
        <img src={tailwind} className="tw-w-32" />
      </div>
    </div>
  </div>
)

export default About;