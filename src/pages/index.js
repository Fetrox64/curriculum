import React from "react"
import LayoutBasic from "../layouts/LayoutBasic"
import Info from "../components/Info/Info"
import SobreMi from "../components/SobreMi/SobreMi"
import { datosPersonales } from "../utils/info"
import { Row, Col } from "react-bootstrap"
import "./Index.scss"

export default function index() {
  return (
    <LayoutBasic menuColor="rgba(102,205,170,0.2)">
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Info informacion={datosPersonales} />
      </Col>
      <Col className="fondo" xs={12} sm={12} md={12} lg={12} xl={12}>
        <SobreMi />
      </Col>
    </LayoutBasic>
  )
}
