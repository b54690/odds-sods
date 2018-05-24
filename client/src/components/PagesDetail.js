import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class PagesDetail extends PureComponent {

    render() {
        const { page } = this.props 
        return (
            <div>
                <h1>{ page.title }</h1>
                <p>&euro; { page.price }</p>
                <p>{ page.description }</p>
                <p>{ page.email }</p>
                <p>{ page.phone }</p>
                <button>Buy</button>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
      page: state.pages.find(page => page.id === 2)
    }
  }
  
  export default connect(mapStateToProps)(PagesDetail)
