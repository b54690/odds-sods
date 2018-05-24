import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchDetailedPage} from '../actions/pages'
import {fetchAllPages} from '../actions/pages'

class PagesList extends PureComponent {

componentWillMount() {
    this.props.fetchAllPages()
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
export default connect(mapStateToProps, { fetchAllPages })(PagesList)
