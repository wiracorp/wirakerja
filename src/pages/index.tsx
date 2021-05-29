import {
    Container, Row, Col,
    Navbar, Nav, Form, Button
} from 'react-bootstrap';

export default function index() {
    return (
        <> 
            <main className="index">
                <Navbar className="navbar-landing">
                    <Container>
                        <Row className="align-items-center">
                            <Col>
                                <Navbar.Brand href="#">
                                    <img src="/img/logo.png" alt="" className="w-15rem w-md-20rem" />
                                </Navbar.Brand>
                            </Col>
                            <Col xs="auto">
                                <Nav>
                                    <Nav.Link href="#">Hubungi Kami</Nav.Link>
                                </Nav>
                            </Col>
                        </Row>
                        
                    </Container>
                </Navbar>

                <Container className="pt-10 pb-5">
                    <Row className="mb-10">
                        <Col xs="auto" className="d-none d-md-block">
                            <img src="/img/illustration/landing.svg" alt="" />
                        </Col>
                        <Col>
                            <img src="/img/logo.png" alt=""  className="w-30rem" />
                            <h6 className="text-black-800 mt-6 mb-8">
                                Sarana Terbaik untuk wirausaha dan pekerjaan, karena kami hadir untuk 
                                mengurangi permasalahan wirausaha dan pekerja.
                            </h6>
                            
                            <Row>
                                <Col xs={12} sm className="order-1">
                                    <Form.Group>
                                        <Form.Label className="mb-3">
                                            <h6>Dapatkan Update terbaru dari kami sekarang !</h6>
                                        </Form.Label>
                                        <Form.Control 
                                            type="email"
                                            size="lg"
                                            placeholder="Masukan Email kamu" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm="auto" className="order-3 order-sm-2 align-self-end">
                                    <Button variant="gradient-primary" size="lg" block>
                                        Berlangganan
                                    </Button>
                                </Col>
                                <Col xs={12} className="order-2 order-sm-3 mt-3 mb-6">
                                    <Form.Check 
                                        custom
                                        type="checkbox"
                                        id="form-check-terms"
                                        label="Saya Menyetujui Persyaratan yang berlaku"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <p className="text-black-800 text-center">Copyrigth © 2021 All rights reserved. wirakerja.com</p>
                </Container>
            </main>

            <style jsx global>{`
                @import '../styles/abstract/_variable.scss';
                @import '../styles/abstract/_functions.scss';
                .index {
                    background-image: 
                        url('/img/decoration/landing-1.svg'),
                        url('/img/decoration/landing-2.svg');
                    background-size: 15rem 12rem;
                    background-repeat: no-repeat;
                    background-position: right top, left bottom;
                    background-color: color('light');
                    @media screen and (min-width: breakpoint('lg')) {
                        background-size: auto;
                    }

                    .container {
                        padding: 0 3rem;
                    }

                    .navbar-landing {
                        background-color: transparent;
                        padding: 2.4rem 0;
                        .container {
                            display: block;
                            .nav-link {
                                color: color('black');
                            }
                        }
                    }
                }
            `}</style>
        </>
    )
}
