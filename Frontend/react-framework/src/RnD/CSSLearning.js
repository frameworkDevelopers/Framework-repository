import React from "react";
import CommonStyle from "../Common/CommonStyle";

export default function CSSLearning() {
  return (
    <div style={{background:'lightblue',}}>
      CSS basics
      <div style={{background:'lightcoral',}} className="container">
        <div style={CommonStyle.card}>
          <span style={{ fontSize: 18 }}>
            this is a div which have css properties width: "100%", background:
            "lightgray", borderRadius: "20px", border: "none", padding:
            "16px",textAlign: "center"
          </span>
          <div>
            {" "}
            <span style={{ fontSize: 14 }}>
              It means this div take all width where you place it, have light
              gray color, border radious is 20px from four side, not added any
              border to the outer layer of card, padding place a gap between
              text and inner side of card,textAlign property helps to decide
              position of text.
            </span>
          </div>
        </div>
      </div>


      <span style={{ fontSize: 18 , margin: 5 }} >this is a row with 12 columns divided with same size</span> 
      <div style={{background:'lightcoral',}} className="row">
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">1</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">2</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">3</div>

        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">4</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">5</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">6</div>

        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">7</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">8</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">9</div>

        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">10</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">11</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-1">12</div>
      </div>

      <span style={{ fontSize: 18 , margin: 5 }} >this is a row with 3 columns divided with same size</span> 
      <div style={{background:'lightcoral',}} className="row">
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-4">4</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-4">4</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-4">4</div>
      </div>

      <span style={{ fontSize: 18 , margin: 5 }} >THis example shows in a row if you add col-2 and col-4 for 2 div who are at right and left then remaining div takes other space</span> 
      <div style={{background:'lightcoral',}} className="row">
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-2">2</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col">automatic</div>
        <div style={{background:'lightcoral', padding:16, textAlign:"center", border: "1px solid", borderColor: "black", }} className="col-2">2</div>
      </div>
    </div>
  );
}


