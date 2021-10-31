import { Card } from "react-bootstrap";
import Footer from "./Footer";
const Ourservices = () => {
    return ( 

        <div className="ourservices">

            <br/>
            <br/>
            <br/>
        <h2 style={{color:'white'}}> Here are our Services </h2>
        <img style={{ width:'100px', height:'100px'}} src="/images/ghost.png" alt=""/>

        <div className="container">
          
          <div className="cards">
              {/*card1 */}
              <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.travelercar.com/wp-content/uploads/2015/09/utilitaire-copie.jpg" />
    <Card.Body>
      <Card.Title>We are fast</Card.Title>
      <Card.Text>
        No matter where you are, when you are calling us we will come for you !
      </Card.Text>
    </Card.Body>
  </Card>
     {/*card1 */}
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://static.timesofisrael.com/www/uploads/2019/07/iStock-943217354-e1563806144556.jpg" />
    <Card.Body>
      <Card.Title>We clean everything</Card.Title>
      <Card.Text>
        We clean everything and take care of details
      </Card.Text>
    </Card.Body>
  </Card>

        {/*card1 */}
          <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.daysoftheyear.com/cdn-cgi/image/fit=cover%2Cf=auto%2Conerror=redirect%2Cwidth=2560/wp-content/uploads/day-of-silence1-scaled.jpg" />
    <Card.Body>
      <Card.Title>We don't ask questions</Card.Title>
      <Card.Text>
         We do our job silently and don't ask questions.
      </Card.Text>
    </Card.Body>
  </Card>
          </div>

            <img style={{ width:'200px', height:'200px' }} src="/images/grave.png" alt=""/>

  </div>
  <br/>
  <br/>
  <br/>
 
  <Footer/>
        </div>
     );
}
 
export default Ourservices;