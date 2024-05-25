import React from 'react'
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import SvgImages from '../../Assets/Images/svgImages';
import twitter from '../../Assets/Images/img_twitter.png'
import instagram from '../../Assets/Images/img_instagram.png'
import facebook from '../../Assets/Images/img_facebook.png'
import image11 from '../../Assets/Images/img_image11.png'
import Payment from '../../Assets/Images/Payment-Icons.png'
import { useTranslation } from 'react-i18next'
import { paths } from '../../config/constants';
const { LocationSvg, ContactSvg, AvatarSvg } = SvgImages;

export default function Footer() {

  const { t } = useTranslation();

  return (<>
    <div style={{ marginTop: "10%" }}>
      <footer className="bd-footer position-relative py-3 mt-5 " style={{ backgroundColor: "#11191F" }} >
        <div className="position-absolute w-100" style={{ top: "-75px" }}>
          <div className='container p-4 rounded ' style={{ background: "#0E4672" }}>
            <div className='row py-2 text-white d-flex align-items-center justify-content-center'>

              <div className='col-md-4 d-flex align-items-center justify-content-center' >
                <AvatarSvg height='34px' width='34px' />
                <b className='fs-2 mx-3'> {t('Foot-Roobeena')} </b>
              </div>

              <div className='col-md-4 d-flex align-items-center justify-content-center' >
                <ContactSvg height='30px' width='30px' />
                <span className='mx-2'>+49 178 8404957</span>
              </div>

              <div className='col-md-4 d-flex align-items-center justify-content-center' >
                <LocationSvg height='30px' width='30px' />
                <span className='mx-2'>{t('foot-location')}Bonner Str. 31, 65428 Rüsselsheim</span>
              </div>

            </div>
            {/* ------------------------------------- */}
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 justify-content-evenly" >

            <div className="col-md-3 col-sm-3 col-xs-3 mt-3" style={{ textAlign: "justify" }}>
              <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
                <span><img src={logo} id="image-section" /></span>
              </a>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2 text-light footer-blog-text">{t('footerText')}</li>
              </ul>
            </div>
            <div className="col-md-3 px-5 col-sm-3 mt-4">
              <h5 className='text-light footer-text-header'>{t('foot-link')}</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link className="footer-link" to="/">Transfer Booking</Link></li>
                <li className="mb-2"><Link className="footer-link" to={paths.aboutUs}>About us</Link></li>
                <li className="mb-2"><Link className="footer-link" to={paths.accounts.partnerRegister}>Become Partner</Link></li>
                <li className="mb-2"><Link className="footer-link" to={paths.newsAndUpdate}>News & Updates</Link></li>
                <li className="mb-2"><Link className="footer-link" to={paths.termCondition}>Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 mt-4">
              <h5 className='text-light footer-text-header'>{t('working-hour')}</h5>
              <ul className="list-unstyled">
                <li className="mb-2 "><Link className="footer-link text-header" to="/">We are there for you around the clock, 24/7, 365 days a year.</Link></li>
                <span className='footer-text-header'>Payment Methods</span>
                <div>
                  <Link className="footer-link text-header" to="/"><img src={Payment} style={{ width: "15rem" }} /></Link>
                </div>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 mt-4">
              <h5 className='footer-text-header'>Imprint & Contact</h5>
              <div className='footer-text-header fs-6'>Robeena Butt</div>
              <div className='footer-text-header fs-6'>Bonner Str. 31,
                65428 Rüsselsheim</div>
                <div className='footer-text-header fs-6'>+49 178 8404957</div>


              <h5 className='text-light footer-text-header'>{t('foot-texNumber')}</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link className="footer-link" to="">2186361508</Link></li>

              </ul>
            </div>

          </div>
        </div>

      </footer>
      <div className='row white-card p-1 px-3'>
        <div className='col-md-5'>
          <div className='d-flex ms-5 gap-2'>
            <div><img src={twitter} width="40px" height="40px" /></div>
            <div> <img src={instagram} width="40px" height="40px" /></div>
            <div> <img src={facebook} width="40px" height="40px" /></div>
          </div>
        </div>
        <div className='col-md-7'>
          <img src={image11} style={{ width: "-webkit-fill-available", }} />
        </div>
      </div>
    </div>



  </>)
}


