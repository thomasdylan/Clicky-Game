import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class PicCard extends Component {

    render() {  
        return (
            <div>
                <button>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Card>
                </button>
            </div>
        );
    }
}

export default PicCard;
