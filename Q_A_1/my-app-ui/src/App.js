import React from 'react';
import axios from 'axios';

function App() {
  // const [photos, setPhotos] = React.useState([]);
  // // const {isHighDensity, isRetina} = screenInfo();

  // React.useEffect(() => {
  //   const fetchImages = async () => {
  //     // const images = await axios.get(`https://jsonplaceholder.typicode.com/photos?isRetina=${isRetina}`);
  //     const images = await axios.get('https://jsonplaceholder.typicode.com/photos');
  //     const firstImages = images.data.slice(0, 10);
  //     const urls = firstImages.map(image => {
  //       return image.url
  //     });
  //     setPhotos(urls);
  //   }

  //   fetchImages();
  // }, []);

  // if (!photos) {
  //   return 'Photos are loading';
  // }

  // const photosJSX = photos.map((photo, index) => {
  //   return <img className='app-photo' key={`photo-item-${index}`} src={photo}/>
  // })

  // return (
  //   <div>
  //     {photosJSX}
  //   </div>
  // );

  return <>
    <img src={`${process.env.PUBLIC_URL + '/images/cat.jpeg'}`}/>
  </>
}

export default App;


// function isHighDensity(){
//   return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
// }


// function isRetina(){
//   return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
// }

// function screenInfo() {
//   return {isRetina: isRetina(), isHighDensity: isHighDensity()};
// }