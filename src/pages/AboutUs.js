import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About2 from "../Assets/Images/About2.gif";

export default function AboutUs() {

  return (
    <div className="bg-white">
      <div className="image-container" >
        <img src={About2} alt="Your GIF" className="imgAbout"/>
      </div>

        <div className="container" style={{ marginTop: "80px" }}>
          <h1 className="h1About">
            Reliable and prompt airport transfer from / to Frankfurt airport
          </h1>
          <div className="row">
            <div className="col-md-4">
              <h3 className="h3About" >Our service</h3>
              <ul className="ulAbout">
                <li>Shuttle and airport transfers.</li>
                <li>Luggage service.</li>
                <li>Visit to a program.</li>
                <li>Event travel.</li>
                <li>City tours.</li>
                <li>Delivery services.</li>
              </ul>
            </div>
            <div className="col-md-8">
              <p className="paragraph" >
              Reliable, fast, punctual and safe - these are the principles on
              which we base our service. We provide you with a fast chauffeur
              service from / to Frankfurt Airport or from Frankfurt areas to any
              other airport in Germany. The prices are fixed and there are no
              additional costs. We also take care of your transfer to your
              destination if you are landing at Frankfurt airport and want to
              attend an event or visit any of the cities in Europe, so you can
              reach your destination safely and on time. We do not limit
              ourselves only to airport transfers to Frankfurt Airport or
              Frankfurt/Hahn Airport at a fixed price, but also offer tours to
              events, trade fairs or other events that you want to attend
              throughout Europe.
              </p>
            </div>
          </div>
        </div>


        <div className="container blueCard">
          <div className="row">
            
            <div className="col-md-6" style={{ marginTop: "15px", marginBottom: "25px"}} >
              <h4 className="h4About" >General information</h4>
              <p className="blueCardParagraph">
                You can book your transfers directly online through our online
                forms, we are also available for you by phone and WhatsApp.
              </p>
              <h4 className="h4About">Payment options</h4>
              <p className="blueCardParagraph">
                You can pay via Paypal, credit card, cash or prepayment via
                invoice.
              </p>
            </div>

            <div className="col-md-6" style={{ marginTop: "35px"}}>
              <h6 className="h6">CALL NOW</h6>
              <h2 className="h2">+49 178 8404957</h2>
              <button type="button" className="btn btn-light bookNow">
                Book Now
              </button>
            </div>
          </div>
        </div>


        <div className="container" style={{ marginTop: "80px" }}>
          <h1 className="h1About">
            Airport transport from and to Frankfurt Airport that is prompt and
            reliable
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p className="paragraph">
                Perhaps you need a taxi, airport transfer, or airport transfer
                from or to Small Airports, Frankfurt-Hahn, Mainz, or another
                city, or you want to pick up friends or family members. We not
                only take care of the travel, but we can also provide you with a
                nameplate upon request, and we can also pick up the desired
                guests. We are available to you even if you want to let your
                business colleague be picked up from Frankfurt than a reasonable
                price.
              </p>
              <p className="paragraph">
                We have a ton of recommendations for evening activities in the
                city in addition to the local expertise of our driver that will
                be made available to you. If you find Frankfurt boring and
                uninteresting, we're here to educate you of all the interesting
                places to visit, whether it's for a day trip, a weekend, or a
                long weekend.
              </p>
            </div>
            <div className="col-md-6">
            <p className="paragraph">
              Do you want an airport transfer from Mainz or any other place
              without tedious processes? Then we are a cost-effective and
              reliable service for you. Precise and specific is our offer for
              the transfer from / to Frankfurt airport according to the agreed
              pick-up time and place. Our driver will be at your doorstep to
              pick you up - whether you need an airport transfer from
              Heidelberg, Stuttgart or Kassel to the airport. Our service allows
              you to arrive at the airport comfortably for your flight.
              Therefore, we have prepared for you a detailed list of fixed
              prices for the different regions. You can also calculate prices,
              choose your preferred car and book everything on our website so we
              can give you a good deal. But that's not all; of course we also
              offer punctuality, respect and reliability - virtues that we know
              and take to a new level.
            </p>
            </div>
          </div>
        </div>


        <div className="container" style={{ marginTop: "80px" }}>
          <h1 className="h1About">
          Our service is to take you to Frankfurt airport
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p className="paragraph">
              Obviously, we can make the whole trip easy. We can neither influence the vacation nor ensure the success of the business trip. But we can greatly simplify the first and the last step. Our airport transfer service from Mainz, Wiesbaden, Aschaffenburg or elsewhere to Frankfurt-Hahn or Frankfurt airport takes the burden off you. You do not have to rent an expensive long-term parking space. You do not have to ask a relative or acquaintance to take you to the airport. You don't have to carry your suitcases on the bus and train to avoid the above mentioned obstacles. You just need to send us a message and we will take care of the rest.
              </p>
            </div>
            <div className="col-md-6">
            <p className="paragraph">
            Comfortable and punctual: the airport transfer from / to Frankfurt am Main Airport
            </p>
            <p className="paragraph">
            We love our work, the airport transfer from Aschaffenburg, Wiesbaden, Mainz or any other place to Frankfurt-Hahn or Frankfurt am Main, the diversity of our customers, the combination of high quality service with the secure feeling of being a part of more complex process. We would like to share this appreciation with you - call us!
              </p>
            </div>
          </div>
        </div>





    </div>
  );
}
