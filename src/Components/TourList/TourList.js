import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
// import { tourData } from '../../tourData'
import { connect } from 'react-redux'

class TourList extends Component {

/*   state = {
    toures: tourData
  }
 */
  
  handleDelete = (id) => {
    const newtoures = this.state.toures;
    const toures = newtoures.filter(tour => {
     return id !== tour.id;
   })
   this.setState({
     toures
   })
  }

  render() {

    const {tours} = this.props;
    const tour = tours.length? (
      tours.map(tour => {
      return (
        <Tour key={tour.id} tour={tour} handleDelete={this.handleDelete}/>
      )
    })
    ) : <div className='no-toures'>There are No Toures...</div>
    return (
      <section className='tour-list'>
         { tour }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours
  }
}


export default connect(mapStateToProps)(TourList)