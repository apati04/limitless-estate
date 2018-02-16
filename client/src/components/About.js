import React from "react";

const About = () => {
  return (
    <div className="text-center">

      <div style={{padding: "10% 3%", backgroundColor: "powderblue"}}>
        <h1>CONTENT 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis tellus, pharetra sed tortor eu, varius condimentum leo. Nulla et nulla rutrum, fringilla elit non, facilisis nibh. Aliquam non consectetur purus, in tristique est. Nunc id lorem eget urna venenatis hendrerit a quis metus. Ut blandit maximus dui, vitae porttitor sem congue tempor. Ut vitae augue et nisl interdum dictum. Aenean suscipit mauris nisi, vitae rutrum sapien semper eu.
        </p>
      </div>

      <div style={{padding: "5% 3%", backgroundColor: "#e9c97e"}}>
        <h1>CONTENT 2 (with background image)</h1>
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:"2%"}}>
          <div style={{marginRight: "3%"}}>
            <img src="https://via.placeholder.com/300x350" className="img-fluid" alt="card1"/>
          </div>
          <div style={{marginLeft: "3%"}}>
            <img src="https://via.placeholder.com/300x350" className="img-fluid" alt="card2"/>
          </div>
          <div style={{marginLeft: "3%"}}>
            <img src="https://via.placeholder.com/300x350" className="img-fluid" alt="card2"/>
          </div>
          <div style={{marginLeft: "3%"}}>
            <img src="https://via.placeholder.com/300x350" className="img-fluid" alt="card2"/>
          </div>
        </div>
      </div>

      <div style={{padding: "10% 3%", backgroundColor: "tomato"}}>
        <h1>CONTENT 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis rutrum dolor, ut rutrum ante. Phasellus rhoncus elit sed nunc iaculis, eget volutpat mauris condimentum. Praesent nec enim ex. Donec lacinia consectetur posuere. Pellentesque at ullamcorper ipsum. Curabitur quis ipsum semper, maximus risus eu, sodales lorem. Pellentesque eget bibendum nunc, quis faucibus neque. Nullam pretium dui at lorem varius ultricies. Etiam tellus quam, cursus vel gravida egestas, scelerisque at turpis. Proin tellus massa, accumsan vel lacinia quis, blandit quis diam. Phasellus sollicitudin fermentum diam id eleifend. Curabitur hendrerit arcu eros. Duis rutrum interdum nibh id facilisis. Donec dapibus mi orci, non consequat sem porta vitae. Proin porta dolor leo. Fusce dictum sagittis lacinia. Aenean sagittis eros ac metus sagittis, quis finibus orci eleifend. Pellentesque molestie malesuada urna nec sollicitudin. Quisque at vehicula lectus. Fusce consectetur a sem a dapibus. Sed volutpat nulla eu pharetra dapibus. Sed euismod faucibus nisl, in sagittis quam interdum et. Sed sit amet volutpat urna. Mauris hendrerit dignissim ligula, quis molestie erat scelerisque in. Sed imperdiet sit amet enim id facilisis. Donec a ullamcorper risus, in bibendum eros. Ut eget elementum odio.
        </p>
      </div>

      <div style={{padding: "10% 3%", backgroundColor: "#dddddd"}}>
        <h1>CONTENT 4</h1>
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:"2%"}}>
          <div style={{marginRight: "3%"}}>
            <img src="https://via.placeholder.com/300x350" className="img-fluid" alt="headshot1"/>
            <p>About person 1</p>
          </div>
          <div style={{marginLeft: "3%"}}>
            <img src="https://via.placeholder.com/300x350" className="img-fluid" alt="headshot2"/>
            <p>About person 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
