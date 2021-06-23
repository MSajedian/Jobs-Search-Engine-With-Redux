import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addJobToFavouriteAction } from '../actions'

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
    addToFavourite: (job) => {
        dispatch(addJobToFavouriteAction(job))
    }
})

class Favourites extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col> <u>Title</u> </Col>
                    <Col> <u>Company Name</u> </Col>
                    <Col> <u>Category</u> </Col>
                    <Col> <u>Job Type</u> </Col>
                    <Col> <u>Company Page</u> </Col>
                </Row>
                <hr />
                {this.props.favouriteJobs.map((job) => (
                    <Row>
                        <Col> {job.title} </Col>
                        <Col> {job.company_name} </Col>
                        <Col> {job.category} </Col>
                        <Col> {job.job_type} </Col>
                        <Col ><Link to={`/company-detail/${this.props.data.company_name}`}>{this.props.data.company_name}</Link></Col>
                        <hr />
                    </Row>
                ))}
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);