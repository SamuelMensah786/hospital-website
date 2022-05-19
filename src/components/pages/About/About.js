import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import GreelifeLogo from '../../../images/dr.png';
import GreenlifeHospital from '../../../images/ridge.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <Container>
                <Row className="about my-5 px-5">
                    <h1 className="my-3">About Us</h1> 
                    <hr/>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <Image src={GreelifeLogo} fluid width="200" />
                        </div>
                        <div className="mb-3">
                        <Image src={GreenlifeHospital} fluid />
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div>
                        <h1 className="my-1">Ours Story</h1>
                        <p className="text-justify py-3">The Greater Accra Regional Hospital (GARH) is situated at North Ridge in the Osu-Klottey Sub-Metro of the Accra Metropolitan Area in the Greater Accra Region (GAR) of Ghana. It occupies a total land area of about 15.65 acres. As the Regional Hospital for the GAR, its catchment area is the whole of the region with an estimated population of over 4,671,363 (2016 projection based on 2010 census by the Ghana Statistical Service). The immediate catchment area, however, includes the following suburbs: Ridge, Nima, Maamobi, Kanda, Accra New Town, Kotobabi, Osu, La, Adabraka, Achimota, Airport Residential Area and Central Accra.
Located in the heart of Accra city, the GARH started as a Hospital for the European expatriates around 1928. It became a District Hospital after Ghana’s independence in 1957 and was later designated as Ridge Regional Hospital in 1997 and now redeveloped and transformed into an ultra-modern 420 bed capacity hospital with the full complement of specialist services that reflects the current social aspirations of the rapidly growing capital city of Ghana.</p>
                        </div>
                        
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;