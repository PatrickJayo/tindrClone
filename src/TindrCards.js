import React, { useState } from 'react'
import './TindrCards.css'
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core';
import { PersonOutline } from '@material-ui/icons';


function TindrCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: ""

        },
        {
            name: 'Jeff Bezos',
            url: ""
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };
    

     
    return (
        <div className="tindrCards">
            <div className='tindrCards__cardContainer'>
            {people.map((person) =>(
                <TinderCard 
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TindrCards
