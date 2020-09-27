import React from 'react'
import './Business.css'
import {GoogleMaps} from '../../util/GoogleMaps.js'


class Business extends React.Component {

    constructor (props) {
        super(props)
        this.handleClickAddress = this.handleClickAddress.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    handleClickImage (event) {
        if(this.props.business.url) {
            this.openInNewTab(this.props.business.url);
        }
    }

    handleClickAddress (event) {
        let url = GoogleMaps.createQuery(this.props.business.address,this.props.business.zipCode,this.props.business.city);
        this.openInNewTab(url);
    }

    openInNewTab (url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt='' onClick={this.handleClickImage}/>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address" onClick={this.handleClickAddress}>
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state} {this.props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.categories[0].title}</h3>
                        <h3 className="rating">{this.props.business.rating}</h3>
                        <p>{this.props.business.reviewCount} Reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;