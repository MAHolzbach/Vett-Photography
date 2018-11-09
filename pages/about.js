import Navbar from "../components/Navbar";

export default () => (
  <div className="portfolio">
    <Navbar />
    <div className="portfolio__content">
      <h1 className="portfolio__title">Hi, I'm Jen!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos
        repellendus voluptate, dignissimos tempora iusto optio aperiam eos et
        ipsum debitis facilis aliquid voluptatum! Quaerat libero qui adipisci,
        nulla nesciunt incidunt quis voluptas amet eum ratione! Mollitia,
        voluptatibus. Praesentium inventore esse molestias quas? Amet quidem ex
        porro? Soluta accusantium qui perspiciatis recusandae officiis eos non
        blanditiis porro ipsa, nesciunt repellat maxime, magnam eaque quidem
        molestiae! Repudiandae tempora ad quos. Provident rem enim iste
        officiis? Voluptatibus recusandae dolorum mollitia illum, magnam quis
        iusto nihil sequi harum cumque debitis, ipsum atque culpa corporis
        saepe. Autem itaque sed eligendi molestias dignissimos voluptas maxime
        eaque minus facere, quod dolores dolorum beatae. Blanditiis corporis
        dignissimos, laboriosam quae voluptates enim. Ipsam numquam obcaecati
        facilis necessitatibus nam soluta voluptatum suscipit error ullam magnam
        hic natus laborum nihil laudantium reprehenderit enim assumenda
        repellendus, inventore dolorem architecto totam nisi deserunt
        voluptatibus. Nemo, odio non! Molestias quia provident voluptate sequi
        id expedita beatae non inventore facere, pariatur et reprehenderit
        accusantium iusto obcaecati incidunt dolore, asperiores, molestiae eius
        veritatis delectus debitis quisquam praesentium. Animi ipsum
        voluptatibus quia vitae itaque obcaecati aliquam repudiandae quaerat
        expedita odio ratione similique velit soluta officia fugiat est possimus
        cum harum quis, error nisi! Minima, magni architecto.
      </p>
    </div>
    <style jsx>
      {`
        .portfolio {
          font-family: "Titillium Web", sans-serif;
        }
        .portfolio__content {
          padding: 10%;
        }
        .portfolio__title {
          text-align: center;
        }
      `}
    </style>
  </div>
);
