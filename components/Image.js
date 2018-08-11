const Image = props => (
  <div className="image-wrapper">
    <img src={props.src} alt="" className="image" />

    <style jsx>{`
      .image {
        height: 400px;
        width: auto;
        margin: 10px;
      }
    `}</style>
  </div>
);

export default Image;
