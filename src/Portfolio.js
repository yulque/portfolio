import { Card, CardDeck, Container } from "react-bootstrap";
import { FaSeedling } from "react-icons/fa";
import { GiArchBridge } from "react-icons/gi";
import { BiPaint } from "react-icons/bi";
export default function Portfolio() {
  return (
    <>
      <CardDeck>
        <Card className="portfolioCard">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://friendly-veggies.herokuapp.com/"
          >
            <Card.Img variant="top" src="/friendlyVeggies.png" />
            <Card.Body>
              <Card.Title>Friendly Veggies</Card.Title>
              <Card.Text>Vegetarian meal-kit delivery shopping mall</Card.Text>
            </Card.Body>
          </a>
        </Card>
        <Card className="portfolioCard">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://angular-ontario-bridges.vercel.app/"
          >
            <Card.Img variant="top" src="/ontario-bridges.png" />
            <Card.Body>
              <Card.Title>Ontario Bridges</Card.Title>
              <Card.Text>
                The list and maps of all the bridges in Ontario
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
        <Card className="portfolioCard">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://react-project-artwork.vercel.app/"
          >
            <Card.Img variant="top" src="/artwork.png" />
            <Card.Body>
              <Card.Title>Find That Art You Love</Card.Title>
              <Card.Text>
                Find art works you might like in Art Institute of Chicago
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
            <br /> Go and create an account, order some! It won't cost any money
            and you will receive an email about your order. Who knows? it might
            be delivered someday. Your information will be saved safely with
            hash, of course.
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://friendly-veggies.herokuapp.com/"
            >
              https://friendly-veggies.herokuapp.com/
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
              <br />
              Did you know that the Ontario government inspects all bridges
              every 2 years? With the Leaflet, you can see where the bridge
              actually is!
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://angular-ontario-bridges.vercel.app/"
              >
                https://angular-ontario-bridges.vercel.app/
              </a>
              <br />
              <br />
              <strong>> Data: </strong>
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
          <div>
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
          </div>
        </Container>
      </Container>
    </>
  );
}
