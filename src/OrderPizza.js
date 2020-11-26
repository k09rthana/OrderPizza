import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Table from "@material-ui/core/Table";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
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
    <Grid container >
      <Grid style={{ margin: "10%" ,width:"80%"}}>
        <Typography align="left" style={{ color: "#000080" }}>
          Order <b>Pizza</b>
        </Typography>
        <Grid  style={{ align: "center", border: "2px solid #D3D3D3" }}>
          <Table >
            <Grid item width="50%" align="right">
              <TableRow>
                <TableCell  style={{borderBottom:"none"}}>
                  <LocalPizzaSharpIcon
                    style={{
                      fontSize: 20,
                      color: "#000080",
                      transform: "rotate(40deg)",
                    }}
                  />{" "}
                </TableCell>
                <TableCell>SMALL</TableCell>
                <TableCell>
                  <RemoveCircleSharpIcon
                    onClick={props.buySmallPizza}
                    style={{ color: "gray" }}
                  />
                </TableCell>
                <TableCell>
                  { props.numOfSmallPizzas}</TableCell>
                <TableCell>
                  <Grid onClick={props.addChildren}>
                    <div onClick={props.numOfSmallPizzas==1? props.buySmallPizza: null}
>
                  <AddCircleIcon
                    onClick={props.numOfSmallPizzas==1? props.addMediumPizza: props.addSmallPizza}
                    style={{ color: "#f10c45" }}
                  />
                  </div>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <LocalPizzaSharpIcon
                    style={{
                      fontSize: 25,
                      color: "#000080",
                      transform: "rotate(40deg)",
                    }}
                  />{" "}
                </TableCell>
                <TableCell>MEDIUM</TableCell>
                <TableCell>
                  <RemoveCircleSharpIcon
                    onClick={props.numOfMediumPizzas>0? props.buyMediumPizza : null}
                    style={{ color: "#000080" }}
                  />
                </TableCell>
                <TableCell>{props.numOfMediumPizzas}</TableCell>
                <TableCell>
                  <Grid onClick={props.addAdult}>
                    <div onClick={props.numOfMediumPizzas==1? props.buyMediumPizza: null}
 >
                  <AddCircleIcon
                    onClick={props.numOfMediumPizzas==1? props.addLargePizza: props.addMediumPizza}
                   
                    style={{ color: "#f10c45" }}
                  />
                  </div>
                </Grid>

                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <LocalPizzaSharpIcon
                    style={{
                      fontSize: 35,
                      color: "#000080",
                      transform: "rotate(40deg)",
                    }}
                  />{" "}
                </TableCell>
                <TableCell>LARGE</TableCell>
                <TableCell>
                  <RemoveCircleSharpIcon
                    onClick={props.numOfLargePizzas >0? props.buyLargePizza : null}
                    style={{ color: "#000080" }}
                  />
                </TableCell>
                <TableCell>{props.numOfLargePizzas}</TableCell>
                <TableCell>
                  <Grid onClick={props.addAdult}>
                  <Grid onClick={props.addAdult }>
                  <AddCircleIcon
                    onClick={props.addLargePizza}
                    
                    style={{ color: "#f10c45" }}
                  />
                  </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </Grid>
          </Table>

          <hr></hr>
          <Grid item
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid  style={{ display: "inline-flex" }}>
              <Table>
                <TableRow>
                  <TableCell>
                    {" "}
                    <PersonIcon style={{ color: "#000080" }} />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography>ADULTS</Typography>
                  </TableCell>
                </TableRow>
              </Table>
            </Grid>
            <Grid style={{ display: "inline-flex" }}>
              <Table>
                <TableRow>
                  <TableCell>
                    {" "}
                    <RemoveCircleSharpIcon
                    
                      onClick=
                      {props.numOfAdults<=1? (null): (props.decreaseAdult)}
                      style={{ color: "#000080" }}
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    {props.numOfAdults}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <AddCircleIcon
                      onClick={props.addAdult}
                      style={{ color: "#f10c45" }}
                    />
                  </TableCell>
                </TableRow>
              </Table>
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
              <Table>
                <TableRow>
                  <TableCell>
                    {" "}
                    <PersonIcon style={{ color: "#000080" }} />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography>CHILDREN</Typography>
                  </TableCell>
                </TableRow>
              </Table>
            </Grid>
            <Grid style={{ display: "inline-flex" }}>
              <Table>
                <TableRow>
                  <TableCell>
                    {" "}
                    <RemoveCircleSharpIcon
                      onClick={props.decreaseChildren}
                      style={{ color: "#000080" }}
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    {props.numOfChildren}
                    {/* {props.numOfChildren ===3 ? props.addMediumPizza: null} */}
                     
                  </TableCell>
                  <TableCell onClick={props.addChildren}>
                    {" "}
                    <div onClick={props.numOfChildren === 2? (props.addSmallPizza ):(null)} >
                    <AddCircleIcon
                      // onClick={props.addChildren}
                      onClick={props.numOfChildren === 2? (props.addMediumPizza ):(null)} 
                      // onChange={props.numOfChildren === 3? (props.addSmallPizza ):(null)} 
                      
                      style={{ color: "#f10c45" }}
                    />
                    </div>
                  </TableCell>
                </TableRow>
              </Table>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{ display: "flex",justifyContent:"space-between", color: "#000080", padding:"5%" }}
        >
          <Grid style={{ align: "left"}}>
            Order <b>Total</b>{" "}
          </Grid>{props.numOfSmallPizzas*150 + props.numOfMediumPizzas*200 + props.numOfLargePizzas*300 >1000 || props.numOfSmallPizzas*150 + props.numOfMediumPizzas*200 + props.numOfLargePizzas*300 < 200 ? (null): (props.numOfSmallPizzas*150 + props.numOfMediumPizzas*200 + props.numOfLargePizzas*300)}</Grid>
        {/* <Grid style={{align:"right", width:"88%", }}>
      <Typography>450</Typography>
      </Grid> */}
      </Grid>
     { console.log(">>>>>>>>>>",props.numOfSmallPizzas)}
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
