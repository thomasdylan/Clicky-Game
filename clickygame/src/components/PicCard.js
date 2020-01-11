import React from 'react';
import Card from 'react-bootstrap/Card';

function PicCard({ game, id, image, name }) {

    return (
        <Card>
            <img
                onClick={() => game(id)}
                id={id}
                src={image}
                alt={name}
            />
        </Card>
    );
}

export default PicCard;