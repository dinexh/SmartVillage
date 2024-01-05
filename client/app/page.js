import Image from 'next/image';
import Marquee from "react-fast-marquee";

import './globals.css';


import heroImg from '../public/SVR_Image.jpeg'
import SVR_Image_1 from './Assets/SVR_Image_1.png';
import President from './Assets/President.jpeg';

import SVR_Image from '../public/SVR_Image.jpeg';
import nutrition from '../public/SVR_Image.jpeg';

export default function Home() {
  return (
      <div className="home-component">
        <div className="home-container">
            <div className="hero"
              style={{
                backgroundImage: `url(${SVR_Image.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="hero-in">
              <h1>Smart Village Revolution</h1>
              <h3>An Initiative of K L Deemed to be University</h3>
                <div className="hero-img">
                  <img src={heroImg.src} alt="" />
                </div>
              </div>
            </div>
            <div className="home-two">
              <div className="home-two-in">
                <div className="home-two-in-header">
                  <h1>Smart Village Revolution at K L Deemed to be University: Steps towards Adarsh Gram</h1>
                </div>
                <div className="home-two-in-one">
                  <div className="home-two-in-one-in">
                    <div className="home-two-in-one-in-one">
                      <div className="home-two-in-one-in-one-in">
                        <p>Smart Village Revolution at K L Deemed to be University is a rural development programme broadly focusing upon the development in the villages which includes social development, cultural development and spread motivation among the people on social mobilization of the village community. The programme was launched by the President of KLEF, Hon'ble Shri Koneru Lakshmaiah on the birth anniversary of Jayaprakash Narayan, on 11 October 2014.</p>

                        <div className="home-two-in-one-in-boxes">
                          <div className="home-two-in-one-in-boxes-in">
                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Smart Villare</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Sustainable Village</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Women Empowerment</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Social Impact</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Community</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Social Mobilization</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Cultural Development</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Women Empowerment</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Social Impact</p>
                              </div>
                            </div>

                            <div className="home-two-in-one-in-boxes-in-box">
                              <div className="home-two-in-one-in-boxes-in-box-in">
                                <p>Community</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-two-in-one-in-two">
                      <div className="home-two-in-one-in-two-in">
                       <Image
                       className='home-two-in-one-in-two-in-image'
                       src={SVR_Image_1}
                        alt="Picture of the author"
                        width={400}
                        height={300}
                       />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          <div className="home-seven">
            <div className="home-seven-in">
              <div className="home-seven-in-header">
                <div className="home-seven-in-header-in">
                  <h1>Areas of Work</h1>
                </div>
              </div>
              <div className="home-seven-in-one">
                <div className="home-seven-in-one-in">
                  <div className="home-seven-in-one-in-boxes">
                    <div className="home-seven-in-one-in-boxes-in">
                      <div className="home-seven-in-one-in-box">
                        <div className="home-seven-in-one-in-box-in">
                          <div className="home-seven-in-one-in-box-in-one">
                            <div className="home-seven-in-one-in-box-in-one-one">

                            </div>
                            <div className="home-seven-in-one-in-box-in-one-two">

                            </div>
                          </div>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


            

            <div className="home-four message">
              <div className="home-four-in">
                <div className="home-four-header">
                  <h1>Message from the Hon'ble President: KLEF</h1>
                </div>
                <div className="home-four-in-in">
                <div className="home-four-one">
                  <div className="home-four-one-in">
                    <div className="home-four-one-in-one">
                    
                        <Image
                          className='home-four-one-in-one-in-image'
                          src={President}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt='Picture of the author'
                          style={{ width: '100%', height: 'auto' }} // optional
                        />

                      <p>Shri Koneru Satyanarayana</p>
                    </div>
                    <div className="home-four-one-in-two">

                    </div>
                  </div>
                </div>
                <div className="home-four-two">
                  <div className="home-four-two-in">
                    <p>On Independence Day, I had made commitment to you on behalf of my colleagues in the Parliament. I laid out my dream of Adarsh Grams as the nucleus of health, cleanliness, greenery and cordiality within the community. The Guidelines that follow are based on these principles and present the complete blueprint of the Saansad Adarsh Gram Yojana for each Member of Parliament to make one village of his or her constituency a Model Village by 2016 and two more model villages by 2019.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>

           

        </div>
      </div>
    )
}
