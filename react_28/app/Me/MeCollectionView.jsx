import React from 'react';
import {Link } from 'react-router';
require('./MeCollectionView.css');
class MeCollectionView extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div>
                <div className="collection-header"><img src={this.props.header_icon}/><span>{this.props.header_title}</span></div>
                <ul className="flex-container">
                    {this.props.datasource.map(function (data) {
                        return(
                        <Link to={data.dataLink}>
                            <li className="flex-item"><img src={data.icon}/><span>{data.title}</span></li>
                        </Link>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

module.exports = MeCollectionView;