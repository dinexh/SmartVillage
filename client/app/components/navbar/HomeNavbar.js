import React from 'react'
import './HomeNavbar.css'
import Link from 'next/link'
import { Link as Scroll } from "react-scroll";

const HomeNavbar = () => {
  return (
        <div className="HomeNavBar">
            <div className="HomeNavBar-in">
                <div className="HomeNavBar-in-one">
                    <div className="HomeNavBar-in-one-in">
                        <h1>Smart Village <span>Revolution</span> </h1>
                    </div>
                </div>
                <div className="HomeNavBar-in-two">
                    <div className="HomeNavBar-in-two-in">
                        <Scroll
                            to="home-two"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        About
                        </Scroll>
                        <Scroll
                            to="home-seven"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Our Work
                        </Scroll>
                        <Scroll
                            to="home-eight"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Annual Report
                        </Scroll>
                        <Scroll
                            to="home-nine"
                            spy={true}
                            smooth={true}
                            offset={-70} 
                            duration={500}
                        >
                        Team
                        </Scroll>
                        <Link href='https://sac.kluniversity.in' passHref={true} target='_blank'>KL SAC</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeNavbar