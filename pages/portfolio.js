import Navbar from "../components/Navbar";
import Image from "../components/Image";
import data from "../assets/contentful.js";

const photos = data.items;

export default () => (
  <div className="portfolio">
    <Navbar />
    <div className="picture-array">
      {photos.forEach(photo => {
        <Image src="photo.fields.file.url" />;
      })}
    </div>

    <style jsx>{``}</style>
  </div>
);
