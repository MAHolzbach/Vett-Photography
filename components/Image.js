const Image = props => (
  <div className="image-wrapper">
    <img src={props.src} alt="" className="image" />

    <style jsx>{`
      .image {
        height: 400px;
        width: auto;
        margin: 10px;
        transition: all 280ms ease;
      }
      .image:hover {
        transform: scale(1.02);
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default Image;
