import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import SearchBar from './components/search-bar/SearchBar';
import ThemeToggle from './components/lightdark-theme/ThemeToggle';
import QrCodeGenerator from './components/qrcode-generator/QrCodeGenerator';
import Otp from './components/otp-generator/Otp';
import InfiniteScroll from './components/infinite-scroll/InfiniteScroll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/randomColor" element={<RandomColor />} />
        <Route path="/star-rating" element={<StarRating noOfStars={7} />} />
        <Route
          path="/image-slider"
          element={
            <ImageSlider
              url={"https://picsum.photos/v2/list"}
              page={"1"}
              limit={"8"} />
          } />
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path="/lightdark" element={<ThemeToggle />} />
          <Route path="/qrcodegenerator" element={<QrCodeGenerator />} />
          <Route path="/otp" element={<Otp otpLength = {6} />} />
          <Route path="/infinitescroll" element={<InfiniteScroll />} />
      </Routes>
    </Router>
  );
}

export default App
