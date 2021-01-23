import React from 'react'

const SocialIcon = ({ icon }) => {
  switch (icon) {
    case 'facebook':
      return FB_ICON

    case 'linkedin':
      return LINKEDIN_ICON

    case 'twitter':
      return TWITTER_ICON

    default:
      return FB_ICON
  }
}

const FB_ICON = (
  <div>
    <a
      href="https://www.facebook.com/elykinnovation/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Elyk Innovation's Facebook in a new tab"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.666 25.51">
        <path
          d="M25.666,14.388A12.833,12.833,0,1,0,10.828,27.065V18.1H7.569V14.388h3.258V11.561c0-3.216,1.916-4.993,4.847-4.993a19.734,19.734,0,0,1,2.873.251V9.977H16.929a1.855,1.855,0,0,0-2.091,2v2.407H18.4L17.828,18.1h-2.99v8.967A12.836,12.836,0,0,0,25.666,14.388Z"
          transform="translate(0 -1.555)"
        />
      </svg>
    </a>
  </div>
)

const LINKEDIN_ICON = (
  <div>
    <a
      href="https://www.linkedin.com/company/elyk-innovation-inc."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Elyk Innovation's LinkedIn in a new tab"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512.117"
        height="512.131"
        viewBox="0 0 512.117 512.131"
      >
        <path
          d="M473.3-1.353c20.88,0,37.885,16.533,37.885,36.926V473.824c0,20.393-17.005,36.954-37.885,36.954H36.846c-20.839,0-37.773-16.561-37.773-36.954V35.573c0-20.393,16.934-36.926,37.773-36.926H473.3ZM435.476,435.036V301c0-65.822-14.212-116.427-91.12-116.427-36.955,0-61.739,20.263-71.867,39.476h-1.04V190.64H198.638v244.4H274.5V314.158c0-31.883,6.031-62.773,45.554-62.773,38.981,0,39.468,36.461,39.468,64.8V435.036h75.95ZM150.987,190.64H74.953v244.4h76.034Zm-38-121.489A44.05,44.05,0,1,0,157.016,113.2,44.029,44.029,0,0,0,112.99,69.151Z"
          transform="translate(0.927 1.353)"
        />
      </svg>
    </a>
  </div>
)

const TWITTER_ICON = (
  <div>
    <a
      href="https://twitter.com/elykinnovation?lang=en"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Elyk Innovation's Twitter in a new tab"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361.612 361.612">
        <path d="M361.612,339.012a22.609,22.609,0,0,1-22.6,22.6H22.6A22.609,22.609,0,0,1,0,339.012V22.6A22.609,22.609,0,0,1,22.6,0H339.012a22.609,22.609,0,0,1,22.6,22.6Z" />
        <path
          d="M231.861,29.4a93.534,93.534,0,0,1-26.635,7.176,45.685,45.685,0,0,0,20.408-25.211A94.01,94.01,0,0,1,196.2,22.419,46.618,46.618,0,0,0,162.375,8c-25.607,0-46.332,20.42-46.332,45.631a46.82,46.82,0,0,0,1.175,10.419,132.483,132.483,0,0,1-95.511-47.7,45.04,45.04,0,0,0-6.283,22.962A45.514,45.514,0,0,0,36.036,77.283a46.727,46.727,0,0,1-20.974-5.718c-.011.192-.011.384-.011.588,0,22.092,15.979,40.557,37.178,44.75a48.062,48.062,0,0,1-12.216,1.6,45.988,45.988,0,0,1-8.7-.814,46.28,46.28,0,0,0,43.258,31.7,93.712,93.712,0,0,1-57.508,19.527A94.277,94.277,0,0,1,6,168.285a132.714,132.714,0,0,0,71.046,20.488c85.216,0,131.83-69.543,131.83-129.853,0-1.955-.056-3.955-.136-5.887A93.945,93.945,0,0,0,231.861,29.4Z"
          transform="translate(61.802 82.403)"
          fill="#000"
        />
      </svg>
    </a>
  </div>
)

export default SocialIcon
