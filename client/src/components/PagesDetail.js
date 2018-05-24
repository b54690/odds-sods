import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class PagesDetail extends PureComponent {
    static propTypes = {
        page: PropTypes.string.isRequired,
    }

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

export default PagesDetail
