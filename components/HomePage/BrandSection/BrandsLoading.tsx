import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';

const BrandsLoading = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs={3} md={2} className="mt-3">
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '150px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
        <Col xs={3} md={2} className="mt-3">
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '150px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
        <Col xs={3} md={2} className="mt-3">
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '150px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
        <Col xs={3} md={2} className="mt-3">
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '150px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
        <Col xs={3} md={2} className="mt-3">
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '150px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
        <Col xs={3} md={2} className="mt-3">
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '150px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
      </Row>
    </Container>
  );
};

export default BrandsLoading;