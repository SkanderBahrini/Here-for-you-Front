import { Carousel } from "react-bootstrap";
import Footer from "./Footer";
const Home = () => {
    return ( 

        <div className="home">
         <br/>
         <br/>
         <br/>

         <h2 style={{color:'white'}}> Welcome To Here For You !</h2>
         <img style={{ width:'200px', height:'200px' }} src="/images/citrouille.png" alt=""/>
          
          <h3 style={{color:'white'}}>
            Here a panel of our clients </h3>
         {/* Carousel */}
         <div className="carousel">
         <Carousel>
  <Carousel.Item>
    <img
    style={{ width:400, height:400}}
      className="d-block w-100"
      src="https://www.thesun.co.uk/wp-content/uploads/2021/10/SPL5218803_005_Stills-from-the-TV-series-Youjpg-JS644420725.jpg?strip=all&w=960"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Joe Goldberg</h3>
      <p> Very satisfied by here for you !</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
  style={{ width:400, height:400}}
      className="d-block w-100"
      src="https://downrightcreepy.com/wp-content/uploads/2020/10/featured_dexter_returns_2021.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Dexter</h3>
      <p>They helped me to save a lot of time.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{ width:400, height:400}}
      className="d-block w-100"
      src="https://bloximages.chicago2.vip.townnews.com/nptelegraph.com/content/tncms/assets/v3/editorial/f/a7/fa744eec-d818-53c5-a898-c3a535d5ba3b/5bc89f31b991e.image.jpg?resize=1200%2C800"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Michael Myers </h3>
      <p>They come at me very fast and helped me without even asking </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 <Footer/>
</div>


      
    
        </div>
     );
}
 
export default Home;