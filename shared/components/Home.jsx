import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Home extends React.Component {
    renderProducts() {
        return _.map(this.props.products, product => {
            return (
                <div key={product.id}>
                    <strong>{product.name}</strong>
                    <div>{product.price}</div>
                    <div>{product.description}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <Link to="about">About</Link>
                <h2>Products</h2>
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.toJS()
    };
}

export default connect(mapStateToProps)(Home);
