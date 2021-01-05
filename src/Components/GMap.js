import React from 'react'
import {Map,GoogleApiWrapper} from 'google-maps-react'

function GMap(props) {
    const mapStyles={
        width:"300px",
        height:"300px"
    }
    return (
        <div style={{width:"300px",position:"relative",height:"300px"}}>
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBGFw7KmJJy-bHNa3yHRiv5ZAAhLEH13Ig'
})(GMap)