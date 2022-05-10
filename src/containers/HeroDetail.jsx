import React, { useEffect } from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDataHeroDetail } from '../store/actions/mlbb.action'

function HeroDetail() {
  const router = useRouter()
  const id = router.query.id
  const dispatch = useDispatch()

  const heroDetailList = useSelector((state) => state.hero.heroDetailList)

  useEffect(() => {
    if (id) {
      dispatch(fetchDataHeroDetail({ id: id, language: 'id' }))
    }
  }, [id])

  return (
    <div className="mt-5">
      <h1 className="mb-5">Detail Hero {heroDetailList?.name}</h1>
      {heroDetailList && (
        <div className="row">
          <div className="col-md-6 mb-3">
            <img
              src={`${heroDetailList?.cover_picture}`}
              alt="cover_picture"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 mb-3">
            <h1>{heroDetailList?.name}</h1>
          </div>
          <hr />
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink className="" onClick={function noRefCheck() {}}>
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" onClick={function noRefCheck() {}}>
                  More Tabs
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab="1">
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroDetail
