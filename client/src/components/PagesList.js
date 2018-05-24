import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllPages} from '../actions/pages'
import {Link} from 'react-router-dom'

class PagesList extends PureComponent {

componentWillMount() {
    this.props.fetchAllPages()
    }

render() {
    const { pages } = this.props
    return (
        <div>
            <h1>Adverts List</h1>

            <table>
                <div>
                    <div>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Price</td>
                    </div>
                </div>
                <tbody>
                    { pages.map(page => (<tr key={page.id}>
                    <td>{page.id}</td>
                    <Link to={ `/pages/${page.id}` }>{page.title}</Link>
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
