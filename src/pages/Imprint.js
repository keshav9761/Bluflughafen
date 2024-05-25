import React from "react";
import Imprintgif from "../Assets/Images/Imprintgif.gif";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";

export default function Imprint() {
  return (
    <div className="bg-white">
      <div className="text-center">
        <img src={Imprintgif} alt="" className="imgAbout" />
      </div>

      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="black">
              <div className="p-3 bg-white rounded border">
                {/* <i class="flaticon-alarm-clock"></i> */}
                {/* <i className="AccessAlarmsIcon"></i> */}
                <div className="iconImprint" >
                  <AccessAlarmsIcon class="icon-HnW" />
                </div>
                <div className="shadowBox-title">WORKING HOURS</div>
                <div className="shadowBox-content">
                  We are here for you around the clock, 24/7,
                  <br></br>
                  There for you 365 days a year.
                </div>
              </div>
            </div>

            <div className="black">
              <div class="p-3 bg-white rounded border">
                <div className="iconImprint">
                  <FmdGoodOutlinedIcon class="icon-HnW" />
                </div>
                <div className="shadowBox-title">ADDRESS</div>
                <div className="shadowBox-content">
                  Bonner Str. 31,
                  <br></br>
                  65428 Rüsselsheim
                </div>
              </div>
            </div>

            <div className="black">
              <div class="p-3 bg-white rounded border">
                <div className="iconImprint">
                  <PhonelinkRingIcon class="icon-HnW" />
                </div>
                <div className="shadowBox-title">PHONE & EMAIL</div>
                <div className="shadowBox-content">
                  contact@flughafentransport.de
                  <br></br>
                  +49 178 8404957
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="h2Imprint">Contact</h1>
            <h6 className="h6Imprint">We are just one click away.</h6>
            <p className="paraImprint">Write to us!</p>

            <form style={{ marginLeft: "10px" }}>
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control inputImprint"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control inputImprint"
                  id="exampleFormControlInput1"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control inputImprint"
                  id="exampleFormControlInput1"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control inputImprint"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>

     
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10258.09120934507!2d8.413927145672172!3d50.00155552921132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd9f29c9303a09%3A0x35ab433f5ecda479!2sBonner%20Str.%2031%2C%2065428%20R%C3%BCsselsheim%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sin!4v1681804122779!5m2!1sen!2sin"
          title="Google Map of germany"
          width="100%"
          height="450"
          style={{border:"0", marginTop:"30px"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
               
    
    </div>
  );
}

