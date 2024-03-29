import React from 'react';

import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import { compose, withProps } from "recompose";

const Map = ({ width, height }, defaultZoom=11) => compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoxMys9iUBaBx6EMr_XNaX3zijl7JITsQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width, height }} />,
    mapElement: <div style={{ height: `100%`, width: `100%` }} />
  }),
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={defaultZoom} defaultCenter={{ lat: 1.3521, lng: 103.8198 }}>
    { props.children }
  </GoogleMap>
));

export default Map;
