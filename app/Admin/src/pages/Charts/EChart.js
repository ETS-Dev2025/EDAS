import React from "react"
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Charts
import Gauge from "../AllCharts/echart/gaugechart"
import Line from "../AllCharts/echart/linechart"
import LineBar from "../AllCharts/echart/linebarchart"
import Doughnut from "../AllCharts/echart/doughnutchart"
import Pie from "../AllCharts/echart/piechart"
import Scatter from "../AllCharts/echart/scatterchart"
import Bubble from "../AllCharts/echart/bubblechart"
import Candlestick from "../AllCharts/echart/candlestickchart"

const EChart = () => {
  
  //meta title
  document.title = "E Charts | EDAS - ETS"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Charts" breadcrumbItem="E Chart" />
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Line Chart</CardTitle>
                  <div id="line-chart" className="e-chart">
                    <Line dataColors='["--bs-success"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Mix Line-Bar</CardTitle>
                  <div id="mix-line-bar" className="e-chart">
                    <LineBar dataColors='["--bs-success","--bs-primary", "--bs-danger"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Doughnut Chart</CardTitle>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut dataColors='["--bs-primary","--bs-warning", "--bs-danger","--bs-info", "--bs-success"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Pie Chart</CardTitle>
                  <div id="pie-chart" className="e-chart">
                    <Pie dataColors='["--bs-primary","--bs-warning", "--bs-danger","--bs-info", "--bs-success"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Scatter Chart</CardTitle>
                  <div id="scatter-chart" className="e-chart">
                    <Scatter dataColors='["--bs-success"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Bubble Chart</CardTitle>
                  <div id="bubble-chart" className="e-chart">
                    <Bubble dataColors='["--bs-primary-rgb", "--bs-success-rgb"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Candlestick Chart</CardTitle>
                  <div id="candlestick-chart" className="e-chart">
                    <Candlestick dataColors='["--bs-primary","--bs-success"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <CardTitle>Gauge Chart</CardTitle>
                  <div id="gauge-chart" className="e-chart">
                    <Gauge dataColors='["--bs-success","--bs-primary","--bs-danger"]'/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EChart
