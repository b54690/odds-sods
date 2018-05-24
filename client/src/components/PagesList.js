import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class PagesList extends PureComponent {
    static propTypes = {
        pages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired
        })).isRequired
    }

render() {
    const {pages} = this.props
    return (
        <div>
            <h1>Adverts List</h1>

            <table>
                <div>
                    <div>
                        <item>Id#</item>
                        <item>Title</item>
                        <item>Price</item>
                    </div>
                </div>
                <tbody>
                    { pages.map(page => (<tr key={page.id}>
                    <td>{page.id}</td>
                    <td>{page.title}</td>
                    <td>&euro; {page.price}.00</td>
                </tr>))}
                </tbody>
            </table>
        </div>

    )
}
}

const mapStateToProps = function (state) {
    return {
        pages: state.pages
    }
}
export default connect(mapStateToProps)(PagesList)