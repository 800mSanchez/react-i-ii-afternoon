import React from 'react'

function People ({person}){
    return (
        <div>
            <h2>
            {person.city}, {person.country}, {person.employer}
            </h2>
        </div>
    )
}

export default People