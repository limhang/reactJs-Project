import React from 'react';
import Header from '../Util/header.jsx';
import Footer from '../Util/footer.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

module.exports = Main;