import { Card, CardDeck, Container } from "react-bootstrap";
import { FaSeedling } from "react-icons/fa";
import { GiArchBridge } from "react-icons/gi";
import { BiPaint } from "react-icons/bi";
export default function Portfolio() {
  return (
    <>
      <CardDeck>
        <Card className="portfolioCard">
          <Card.Img variant="top" src="/friendlyVeggies.png" />
          <Card.Body>
            <Card.Title>Friendly Veggies</Card.Title>
            <Card.Text>Vegetarian meal-kit delivery shopping mall</Card.Text>
          </Card.Body>
        </Card>
        <Card className="portfolioCard">
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://angular-ontario-bridges.vercel.app/"
          > */}
          <Card.Img variant="top" src="/ontario-bridges.png" />
          <Card.Body>
            <Card.Title>Ontario Bridges</Card.Title>
            <Card.Text>
              The list and maps of all the bridges in Ontario
            </Card.Text>
          </Card.Body>
          {/* </a> */}
        </Card>
        <Card className="portfolioCard">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://web-spotify-yuri.netlify.app/"
          >
            <Card.Img variant="top" src="/record.jpg" />
            <Card.Body>
              <Card.Title>Yuri's Record</Card.Title>
              <Card.Text>
                Explore newly released albums in Spotify and save them in your
                own Favourites!
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </CardDeck>
      <Container className="portfolioContainer">
        <Container className="portfolioContainer-each">
          <FaSeedling />
          <FaSeedling />
          <FaSeedling /> <br />
          <h4>Friendly Veggies</h4>
          <p>
            <strong>Environment: </strong>HTML5/CSS, Bootstrap, VanilaJS,
            MongoDB, Node.JS
            <br />
            <strong>Goal: </strong>
            Creating a website that a user can create a new account, log-in, put
            items in the cart, and if a user is admin, edit the item's
            information.
            <br />
            <strong>Github: </strong>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/yulque/friendlyVeggies"
            >
              https://github.com/yulque/friendlyVeggies
            </a>
          </p>
        </Container>
        <Container className="portfolioContainer-each">
          <GiArchBridge />
          <GiArchBridge />
          <GiArchBridge />
          <div>
            <h4>Ontario Bridges</h4>
            <p>
              <strong>Environment: </strong>TypeScript, Angular, JavaScript,
              Leaflet
              <br />
              <strong>Goal: </strong>Creating a website using government data.
              <br />
              Did you know that the Ontario government inspects all bridges
              every 2 years? With the Leaflet, you can see where the bridge
              actually is!
              <br />
              <strong>Github: </strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/yulque/angular-ontario-bridges"
              >
                https://github.com/yulque/angular-ontario-bridges
              </a>
              <br />
              <strong>Data: </strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://data.ontario.ca/dataset/bridge-conditions"
              >
                https://data.ontario.ca/dataset/bridge-conditions
              </a>
            </p>
          </div>
        </Container>
        <Container className="portfolioContainer-each">
          <BiPaint />
          <BiPaint />
          <BiPaint />
          {/* <div>
            <h4>Find That Art You Love</h4>
            <p>
              <strong>Environment: </strong>React, JavaScript
              <br />
              <strong>Goal: </strong>By using API from the Art Institute of
              Chicago, a user can search by word to explore and might find art
              pieces they like.
              <br />
              <br />
              If you're a cat lover, go to this website and simply type 'cat'.
              The Art Institute of Chicago will show you how many lovely
              cat-themed artworks are in there. Just type whatever you love, you
              might find amazing art there!
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://react-project-artwork.vercel.app/"
              >
                https://react-project-artwork.vercel.app/
              </a>
            </p>
          </div> */}
          <div>
            <h4>Yuri's Record</h4>
            <p>
              <strong>Environment: </strong> JavaScript, TypeScript, Angular
              <br />
              <strong>Goal: </strong>By using API from spotify, a user can
              explore new released albums and save music you like in favourites.
              <br />
              If you're a music lover, go to this website and simply explore
              newly released albums. The API from Spotify will show you all the
              cool albums recently released. If you get interested in the
              artist, you can click them and it will lead you to the artist's
              page that has all their albums.
              <br />
              <strong>Github: </strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/yulque/web422-music"
              >
                https://github.com/yulque/web422-music
              </a>
              <br />
              <strong>Website: </strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://web-spotify-yuri.netlify.app/"
              >
                https://web-spotify-yuri.netlify.app/
              </a>
            </p>
          </div>
        </Container>
      </Container>
    </>
  );
}
