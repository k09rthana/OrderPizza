import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import LocalPizzaSharpIcon from "@material-ui/icons/LocalPizzaSharp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleSharpIcon from "@material-ui/icons/RemoveCircleSharp";
import PersonIcon from "@material-ui/icons/Person";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { connect } from "react-redux";
import { buySmallPizza } from "./redux";
import { addSmallPizza } from "./redux";
import { buyMediumPizza } from "./redux";
import { addMediumPizza } from "./redux";
import { buyLargePizza } from "./redux";
import { addLargePizza } from "./redux";
import { decreaseAdult } from "./redux";
import { addAdult } from "./redux";
import { decreaseChildren } from "./redux";
import { addChildren } from "./redux";

const PizzaOrder = (props) => {
  return (
    <Grid container style={{display:"flex" ,justifyContent:"center"}}>
      <Grid style={{width:"70%"}}>
        <Typography align="left" style={{ color: "#000080" }}>
          Order <b>Pizza</b>
        </Typography>
        <Grid style={{ align: "center", border: "2px solid #D3D3D3" }}>
          <Grid align="right" width="50%">
            <Grid >
              <Grid style={{ display: "inline-flex", align:"center" }}>
                <Grid style={{ borderBottom: "none" }}>
                  <LocalPizzaSharpIcon
                    style={{
                      fontSize: 16,
                      color: "#000080",
                      transform: "rotate(40deg)",
                    }}
                  />{" "}
                </Grid>
                <Grid style={{display:"inline-flex"}} >SMALL<div style={{color:"white", opacity:"0"}}>MM</div></Grid>
                <Grid item style={{display:"flex", justifyContent:"space-around"}}>
                  <RemoveCircleSharpIcon
                    onClick={
                      props.numOfSmallPizzas > 0 ? props.buySmallPizza : null
                    }
                    style={{  color:props.numOfSmallPizzas===0? "gray":"#000080", cursor: "pointer" }}
                  />
                </Grid>
                <Grid> {props.numOfSmallPizzas} </Grid>
                <Grid>
                  <Grid onClick={props.addChildren}>
                    <Grid
                      onClick={
                        props.numOfSmallPizzas === 1 &&
                        props.numOfSmallPizzas * 150 +
                          props.numOfMediumPizzas * 200 +
                          props.numOfLargePizzas * 300 <
                          1000
                          ? props.buySmallPizza
                          : null
                      }
                    >
                      <AddCircleIcon
                        onClick={
                          props.numOfSmallPizzas == 1
                            ? props.addMediumPizza
                            : props.addSmallPizza
                        }
                        style={{ color: "#f10c45", cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
<br></br>
              <Grid style={{ display: "inline-flex" }}>
                
                <Grid>
                  <LocalPizzaSharpIcon
                    style={{
                      fontSize: 19,
                      color: "#000080",
                      transform: "rotate(40deg)",
                    }}
                  />{" "}
                </Grid>
                <Grid style={{display:"inline-flex"}} >MEDIUM<div style={{color:"white", opacity:"0"}}>M</div></Grid>
                <Grid>
                  <RemoveCircleSharpIcon
                    onClick={
                      props.numOfMediumPizzas > 0 &&
                      props.numOfSmallPizzas * 150 +
                        props.numOfMediumPizzas * 200 +
                        props.numOfLargePizzas * 300 <
                        1000
                        ? props.buyMediumPizza
                        : null
                    }
                    style={{ color:props.numOfMediumPizzas ===0? "gray":"#000080", cursor: "pointer" }}
                  />
                </Grid>
                <Grid>{props.numOfMediumPizzas}</Grid>
                <Grid>
                  <Grid onClick={props.addAdult}>
                    <Grid
                      onClick={
                        props.numOfMediumPizzas === 1 &&
                        props.numOfSmallPizzas * 150 +
                          props.numOfMediumPizzas * 200 +
                          props.numOfLargePizzas * 300 <
                          1000
                          ? props.buyMediumPizza
                          : null
                      }
                    >
                      <AddCircleIcon
                        onClick={
                          props.numOfSmallPizzas * 150 +
                          props.numOfMediumPizzas * 200 +
                          props.numOfLargePizzas * 300 <
                          1000?
                          (props.numOfMediumPizzas == 1
                            ? props.addLargePizza
                            : props.addMediumPizza):null
                        }
                        style={{ color: "#f10c45", cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <br></br>
              <Grid style={{ display: "inline-flex" }}>
                <Grid>
                  <LocalPizzaSharpIcon
                    style={{
                      fontSize: 21.5,
                      color: "#000080",
                      transform: "rotate(40deg)",
                    }}
                  />{" "}
                </Grid>
                <Grid style={{display:"inline-flex"}}>LARGE<div style={{color:"white", opacity:"0"}}>MM</div></Grid>
                <Grid>
                  <RemoveCircleSharpIcon
                    onClick={
                      props.numOfLargePizzas > 0 &&
                      props.numOfSmallPizzas * 150 +
                        props.numOfMediumPizzas * 200 +
                        props.numOfLargePizzas * 300 <
                        1000
                        ? props.buyLargePizza
                        : null
                    }
                    style={{ color:props.numOfLargePizzas ===0? "gray":"#000080", cursor: "pointer" }}
                  />
                </Grid>
                <Grid>{props.numOfLargePizzas}</Grid>
                <Grid>
                  <AddCircleIcon
                    onClick={props.addLargePizza}
                    style={{ color: "#f10c45", cursor: "pointer" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <hr></hr>
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid style={{ display: "inline-flex" }}>
              <Grid style={{ display: "inline-flex" }}>
                
                  <Grid>
                    {" "}
                    <PersonIcon style={{ color: "#000080" }} />
                  </Grid>
                  <Grid>
                    {" "}
                    <Typography style={{align:"left"}}>ADULTS</Typography>
                  </Grid>
                
              </Grid>
            </Grid>
            <Grid style={{ display: "inline-flex" }}>
              <Grid style={{ display: "inline-flex" }}>
                
                  <Grid>
                    {" "}
                    <RemoveCircleSharpIcon
                      onClick={
                        props.numOfAdults <= 1 ? null : props.decreaseAdult
                      }
                      style={{ color:props.numOfAdults ===0? "gray":"#000080", cursor: "pointer" }}
                    />
                  </Grid>
                  <Grid> {props.numOfAdults}</Grid>
                  <Grid>
                    {" "}
                    <AddCircleIcon
                      onClick={props.addAdult}
                      style={{ color: "#f10c45", cursor: "pointer" }}
                    />
                  </Grid>
                
              </Grid>
            </Grid>
          </Grid>
          <hr></hr>
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid style={{ display: "inline-flex" }}>
              <Grid style={{ display: "inline-flex" }}>
                
                  <Grid>
                    {" "}
                    <PersonIcon style={{ color: "#000080" }} />
                  </Grid>
                  <Grid>
                    {" "}
                    <Typography>CHILDREN</Typography>
                  </Grid>
                
              </Grid>
            </Grid>
            <Grid style={{ display: "inline-flex" }}>
              <Grid style={{ display: "inline-flex" }}>
                
                  <Grid>
                    {" "}
                    <RemoveCircleSharpIcon
                      onClick={
                        props.numOfChildren > 0 ? props.decreaseChildren : null
                      }
                      style={{ color:props.numOfChildren ===0? "gray":"#000080", cursor: "pointer" }}
                    />
                  </Grid>
                  <Grid>
                    {" "}
                    {props.numOfChildren}
                  </Grid>
                  <Grid onClick={props.addChildren}>
                    {" "}
                    <Grid
                      //onClick={
                      //   props.numOfChildren === 2
                      //     ? props.addMediumPizza
                      //     : null
                      // }
                    >
                      <AddCircleIcon
                       
                        // onClick={
                        //   props.numOfChildren === 2 ? props.addSmallPizza : null
                        // }

                        style={{ color: "#f10c45", cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#000080",
            padding:"2%",
            paddingLeft:"5%",
            paddingRight:"5%"
          }}
        >
          
          <Grid style={{ align: "left" }}>
            Order <b>Total</b>{" "}
          </Grid>
          {props.numOfSmallPizzas * 150 +
            props.numOfMediumPizzas * 200 +
            props.numOfLargePizzas * 300 >
            1000 ||
          props.numOfSmallPizzas * 150 +
            props.numOfMediumPizzas * 200 +
            props.numOfLargePizzas * 300 <
            200
            ? null
            : props.numOfSmallPizzas * 150 +
              props.numOfMediumPizzas * 200 +
              props.numOfLargePizzas * 300}
        </Grid>
        {/* <Grid style={{align:"right", width:"88%", }}>
      <Typography>450</Typography>
      </Grid> */}
      </Grid>
      {console.log(">>>>>>>>>>", props.numOfSmallPizzas)}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfSmallPizzas: state.smallPizza.numOfSmallPizzas,
    numOfMediumPizzas: state.mediumPizza.numOfMediumPizzas,
    numOfLargePizzas: state.largePizza.numOfLargePizzas,
    numOfAdults: state.adults.numOfAdults,
    numOfChildren: state.children.numOfChildren,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buySmallPizza: () => dispatch(buySmallPizza()),
    addSmallPizza: () => dispatch(addSmallPizza()),
    buyMediumPizza: () => dispatch(buyMediumPizza()),
    addMediumPizza: () => dispatch(addMediumPizza()),
    buyLargePizza: () => dispatch(buyLargePizza()),
    addLargePizza: () => dispatch(addLargePizza()),
    decreaseAdult: () => dispatch(decreaseAdult()),
    addAdult: () => dispatch(addAdult()),
    decreaseChildren: () => dispatch(decreaseChildren()),
    addChildren: () => dispatch(addChildren()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaOrder);
