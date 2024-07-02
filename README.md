# Dream-Vista

**Live Site URL:** [Dream-Vista](https://dream-vista.web.app)


## Features and Characteristics

- **Discover Exclusive Properties with Responsive Design:** Browse exclusive luxury properties from around the world on any device—mobile, laptop, or desktop.
- **Edit Profile:** Using the Firebase updateProfile method to edit my profile.
- **Interactive Maps:** Explore contact-us using an interactive map powered by react-leaflet.
- **Smooth Animations:** Enhance user experience with smooth animations using AOS and Animate.css.
- **Effortless Form Handling:** Easily submit inquiries and requests using React Hook Form.


## NPM Packages Used

- AOS (Animate on Scroll): [AOS Package](https://www.npmjs.com/package/aos)
- Animate CSS: [Animate.css](https://animate.style/)
- React Hook Form: [react-hook-form](https://react-hook-form.com/)
- React Leaflet: [react-leaflet](https://react-leaflet.js.org/)
- Swiper Slider: [swiper-slider](https://swiperjs.com/)
  

- ## Setup

To setup the project you have to execute the command below:

1. At first you have to install all package. For this you Have to execute the command:

```sh
npm i
```

2. After install all package you need to run your project. But you can't run your project directly. Because I use environment variabel for security purpose. You have to add a `.env` file in your root directory and the a sample code of `.env` file are given below:

```.env
VITE_apiKey=*******************
VITE_authDomain=***************
VITE_projectId=***************
VITE_storageBucket=***************
VITE_messagingSenderId=***************
VITE_appId=***************
```

The first six api key you will get form firebase & and the last api key you will get from ImgBB.

3. After setting environment variable you can run or build your project.

For run your preject you have to execute the commad below:

```sh
npm run dev
```

4. For build your project you can execute the command below:

```sh
npm run build
```

#### Note: Must have installed Git and Nodejs in your system to do it!
