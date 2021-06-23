import { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addJobToFavouriteAction } from '../actions'

const mapStateToProps = state => state

// const mapDispatchToProps = (dispatch) => ({
//     addToCart: (book) => {
//       dispatch(addItemToCartAction(book))
//     }
//   })
  
const mapDispatchToProps = (dispatch) => ({
    addToFavourite: (job) => {
      dispatch(addJobToFavouriteAction(job))
    }
  })
class Job extends Component {
    state = {
        showDetail: false,
    }

    // AddToFavouriteJobs = (job) => {
    //     const newFavouriteJobs = [...this.state.favouriteJobs, job]
    //     this.setState({ favouriteJobs: newFavouriteJobs })
    //     // console.log('this.state.favouriteJobs:', this.state.favouriteJobs)
    // }

    render() {
        return (
            <>
                <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
                    <Col xs={3}><Link to={`/${this.props.data.company_name}`}>{this.props.data.company_name}</Link></Col>
                    <Col xs={3}><Link to={{ pathname: this.props.data.url }} target='_blank'>{this.props.data.title}</Link></Col>
                    {/* <Col xs={3}><Link to={`/detail/${this.props.data.id}`} target='_blank'></Link></Col> */}
                    {/* <Col xs={3}><Details job={this.props.data}/></Col> */}
                    {/* <Col xs={3}><Button value={this.props.data.description} onClick={(e) => (console.log(e.target.value))}>Details</Button></Col> */}
                    <Col xs={3}><Button onClick={() => (this.state.showDetail ? this.setState({ showDetail: false }) : this.setState({ showDetail: true }))}>Details</Button></Col>
                    <Col xs={3}><Button onClick={() => (this.props.addToFavourite(this.props.data))}>Add to Favourite</Button></Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(Job);
