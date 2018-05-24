import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

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
                <thread>
                    <tr>
                        <th>Id#</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thread>
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

export default PagesList