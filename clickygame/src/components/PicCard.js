import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class PicCard extends Component {
    render() {  
        const game = this.props.game;
        return (
            <div>
                <button onClick={game}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img 
                            variant="top" 
                            src={this.props.image}
                            alt={this.props.name}
                        />
                    </Card>
                </button>
            </div>
        );
    }
}

export default PicCard;
