import React, { Fragment, Component } from "react";
import { greatPlaceStyle } from "./my_great_place_styles.js";

export default class MyGreatPlace extends Component {
  render() {
    let markerUrl = "https://i.imgur.com/Uh6BVn0.png";
    return (
      <Fragment>
        {this.props.renderMapMarker ? (
          <div
            style={{
              padding: "15px 10px",
              display: "inline-flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <span>
              <img
                src="https://www.mediavinemarketing.com/wp-content/uploads/2016/02/map-marker-icon.png"
                width="50px"
              />
            </span>
          </div>
        ) : (
          <div />
        )}
      </Fragment>
    );
  }
}
/*   <span style={{ maxWidth: '75px' }}>
<img src="https://i.imgur.com/Uh6BVn0.png" className="img-fluid" />
</span> */
