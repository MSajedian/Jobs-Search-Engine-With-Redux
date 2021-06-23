import { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Job extends Component {
    state = {
        showDetail: false
    }
    render() {
        return (
            <>
                <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
                    <Col xs={3}><Link to={`/${this.props.data.company_name}`}>{this.props.data.company_name}</Link></Col>
                    <Col xs={6}><Link to={{ pathname: this.props.data.url }} target='_blank'>{this.props.data.title}</Link></Col>
                    {/* <Col xs={3}><Link to={`/detail/${this.props.data.id}`} target='_blank'></Link></Col> */}
                    {/* <Col xs={3}><Details job={this.props.data}/></Col> */}
                    {/* <Col xs={3}><Button value={this.props.data.description} onClick={(e) => (console.log(e.target.value))}>Details</Button></Col> */}
                    <Col xs={3}><Button onClick={() => (this.state.showDetail ? this.setState({ showDetail: false }) : this.setState({ showDetail: true }))}>Details</Button></Col>
                </Row>
                {this.state.showDetail &&
                    <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
                        {/* <Details job={this.props.data.description} /> */}
                        <div dangerouslySetInnerHTML={{ __html: this.props.data.description }} ></div>
                    </Row>
                }
            </>
        );
    }
}
