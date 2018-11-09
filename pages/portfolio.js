import Navbar from "../components/Navbar";
import Image from "../components/Image";
import data from "../assets/contentful.json";

const photos = data.items.map((item, index) => (
  <Image
    src={item.fields.file.url}
    key={index}
    className="picture-array__photo"
  />
));
export default () => (
  <div className="portfolio">
    <Navbar />
    <div className="picture-array">{photos}</div>
    <style jsx>{`
      .picture-array {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);
