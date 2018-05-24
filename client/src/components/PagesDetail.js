import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchDetailedPage} from '../actions/pages'

class PagesDetail extends PureComponent {

    componentWillMount() {
        this.props.fetchDetailedPage(this.props.match.params.id)
    }

    render() {
        const { page } = this.props 
        if (!page) return null

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

const mapStateToProps = function (state, props) {
    return {
    page: state.page
    }
  }
  
  export default connect(mapStateToProps, {fetchDetailedPage})(PagesDetail)
