import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Form, Input, Label, Button, InputGroupText, Nav, NavItem, NavLink, TabContent, TabPane, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup } from "reactstrap";
import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const CryptoBuySell = () => {

  //meta title
  document.title = "Buy/Sell | EDAS - ETS";

  const [activeTab, setActiveTab] = useState("1");
  const [isMenu, setIsMenu] = useState(false);

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="Buy/Sell" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="float-end">
                    <Dropdown isOpen={isMenu} toggle={toggleMenu}>
                      <DropdownToggle type="button" tag="button" className={`btn btn-light ${isMenu && "show"}`}>
                        <i className="mdi mdi-wallet me-2" />
                        <span className="d-none d-sm-inline-block">
                          Wallet Balance <i className="mdi mdi-chevron-down" />
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end dropdown-menu-md">
                        <div className="dropdown-item-text">
                          <div>
                            <p className="text-muted mb-2">Available Balance</p>
                            <h5 className="mb-0">$ 9148.23</h5>
                          </div>
                        </div>

                        <DropdownItem divider />

                        <DropdownItem href="#">
                          BTC : <span className="float-end">1.02356</span>
                        </DropdownItem>
                        <DropdownItem href="#">
                          ETH : <span className="float-end">0.04121</span>
                        </DropdownItem>
                        <DropdownItem href="#">
                          LTC : <span className="float-end">0.00365</span>
                        </DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem className="text-primary text-center" href="#">Learn more</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <h4 className="card-title mb-4">Buy/Sell Crypto</h4>
                  <div className="crypto-buy-sell-nav">
                    <Nav tabs className="nav-tabs-custom" role="tablist">
                      <NavItem>
                        <NavLink className={classnames({ active: activeTab === "1", })}
                          onClick={() => { toggleTab("1") }}>
                          Buy
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className={classnames({ active: activeTab === "2", })}
                          onClick={() => { toggleTab("2") }}>
                          Sell
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent
                      activeTab={activeTab}
                      className="crypto-buy-sell-nav-content p-4"
                    >
                      <TabPane tabId="1" id="buy">
                        <Form>
                          <div className="mb-2">
                            <Label>Currency :</Label>
                            <Row>
                              <Col xl={2} sm={4}>
                                <div className="mb-3">
                                  <label className="card-radio-label mb-2">
                                    <input type="radio" name="currency" id="buycurrencyoption1" className="card-radio-input" defaultChecked readOnly />
                                    <div className="card-radio">
                                      <div>
                                        <i className="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" />
                                        <span> Bitcoin</span>
                                      </div>
                                    </div>
                                  </label>
                                  <div>
                                    <p className="text-muted mb-1"> Current price :</p>
                                    <h5 className="font-size-16">  0.00016 BTC</h5>
                                  </div>
                                </div>
                              </Col>

                              <Col xl={2} sm={4}>
                                <div className="mb-3">
                                  <label className="card-radio-label mb-2">
                                    <input type="radio" name="currency" id="buycurrencyoption2" className="card-radio-input" />
                                    <div className="card-radio">
                                      <div>
                                        <i className="mdi mdi-ethereum font-size-24 text-primary align-middle me-2" />
                                        <span> Ethereum</span>
                                      </div>
                                    </div>
                                  </label>
                                  <div>
                                    <p className="text-muted mb-1">Current price : </p>
                                    <h5 className="font-size-16">0.0073 ETH</h5>
                                  </div>
                                </div>
                              </Col>

                              <Col xl={2} sm={4}>
                                <div className="mb-3">
                                  <label className="card-radio-label mb-2">
                                    <input type="radio" name="currency" id="buycurrencyoption3" className="card-radio-input" />
                                    <div className="card-radio">
                                      <div>
                                        <i className="mdi mdi-litecoin font-size-24 text-info align-middle me-2" />
                                        <span> litecoin</span>
                                      </div>
                                    </div>
                                  </label>
                                  <div>
                                    <p className="text-muted mb-1"> Current price :  </p>
                                    <h5 className="font-size-16">0.025 LTC</h5>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>

                          <div className="mb-2">
                            <Label>Payment method :</Label>
                            <Row>
                              <Col xl={2} sm={4}>
                                <label className="card-radio-label mb-3">
                                  <input type="radio" name="pay-method" id="pay-methodoption1" className="card-radio-input" />
                                  <div className="card-radio">
                                    <i className="fab fa-cc-mastercard font-size-24 text-primary align-middle me-2" />
                                    <span> Credit / Debit Card</span>
                                  </div>
                                </label>
                              </Col>
                              <Col xl={2} sm={4}>
                                <label className="card-radio-label mb-3">
                                  <input type="radio" name="pay-method" id="pay-methodoption3" className="card-radio-input" defaultChecked readOnly />
                                  <div className="card-radio">
                                    <i className="fab fa-cc-paypal font-size-24 text-primary align-middle me-2" />
                                    <span> Paypal</span>
                                  </div>
                                </label>
                              </Col>
                            </Row>
                          </div>

                          <div className="mb-3">
                            <Label>Add value :</Label>
                            <Row>
                              <Col sm="6">
                                <InputGroup className="mb-2 currency-value">
                                  <div className="input-group-prepend">
                                    <InputGroupText>Bitcoin</InputGroupText>
                                  </div>
                                  <Input type="text" placeholder="Bitcoin" />
                                </InputGroup>
                              </Col>
                              <Col sm="6">
                                <InputGroup className="mb-2">
                                  <Input type="text" className="text-sm-end" placeholder="USD Amount" />
                                  <InputGroupText>USD Amount</InputGroupText>
                                </InputGroup>
                              </Col>
                            </Row>
                          </div>

                          <div className="mb-3">
                            <Label>Wallet Address :</Label>
                            <Input type="text" placeholder="Wallet Address" />
                          </div>
                          <div className="text-center mt-4">
                            <Button type="button" color="success">Buy Crypto currency</Button>
                          </div>
                        </Form>
                      </TabPane>

                      <TabPane tabId="2">
                        <Form>
                          <div className="mb-2">
                            <label>Currency :</label>

                            <Row>
                              <Col xl={2} sm={4}>
                                <div className="mb-3">
                                  <label className="card-radio-label mb-2">
                                    <input type="radio" name="currency" id="sellcurrencyoption1" className="card-radio-input" defaultChecked readOnly />
                                    <div className="card-radio">
                                      <div>
                                        <i className="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" />
                                        <span>Bitcoin</span>
                                      </div>
                                    </div>
                                  </label>
                                  <div>
                                    <p className="text-muted mb-1">  Current price : </p>
                                    <h5 className="font-size-16"> 0.00016 BTC  </h5>
                                  </div>
                                </div>
                              </Col>

                              <Col xl={2} sm={4}>
                                <div className="mb-3">
                                  <label className="card-radio-label mb-2">
                                    <input type="radio" name="currency" id="sellcurrencyoption2" className="card-radio-input" />
                                    <div className="card-radio">
                                      <div>
                                        <i className="mdi mdi-ethereum font-size-24 text-primary align-middle me-2" />
                                        <span>Ethereum</span>
                                      </div>
                                    </div>
                                  </label>
                                  <div>
                                    <p className="text-muted mb-1">  Current price :</p>
                                    <h5 className="font-size-16">0.0073 ETH</h5>
                                  </div>
                                </div>
                              </Col>

                              <Col xl={2} sm={4}>
                                <div className="mb-3">
                                  <label className="card-radio-label mb-2">
                                    <input type="radio" name="currency" id="sellcurrencyoption3" className="card-radio-input" />
                                    <div className="card-radio">
                                      <div>
                                        <i className="mdi mdi-litecoin font-size-24 text-info align-middle me-2" />
                                        <span>litecoin</span>
                                      </div>
                                    </div>
                                  </label>

                                  <div>
                                    <p className="text-muted mb-1">  Current price :  </p>
                                    <h5 className="font-size-16">0.025 LTC</h5>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>

                          <div className="mb-3">
                            <label>Email :</label>
                            <Input type="email" placeholder="Email" />
                          </div>
                          <div className="mb-3">
                            <label>Add value :</label>
                            <Row>
                              <Col sm="6">
                                <InputGroup className="mb-2 currency-value">
                                  <InputGroupText> Crypto value </InputGroupText>
                                  <Input type="text" placeholder="Crypto value" />
                                </InputGroup>
                              </Col>

                              <Col sm="6">
                                <InputGroup className="mb-2">
                                  <Input type="text" className="text-sm-end" placeholder="USD Amount" />
                                  <InputGroupText> USD Amount </InputGroupText>
                                </InputGroup>
                              </Col>
                            </Row>
                          </div>

                          <div className="mb-3">
                            <label>Wallet Address :</label>
                            <Input type="text" placeholder="Wallet Address" />
                          </div>
                          <div className="text-center mt-4">
                            <Button type="button" color="danger">Sell Crypto currency </Button>
                          </div>
                        </Form>
                      </TabPane>
                    </TabContent>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CryptoBuySell;
