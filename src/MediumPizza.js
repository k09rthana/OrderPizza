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

import { buyMediumPizza } from "./redux";
import { addMediumPizza } from "./redux";

const MediumPizza = (props) => {
  return (
    <div style={{ padding: "10%", paddingRight: "10%" }}>
      <Typography align="left" style={{ color: "#000080" }}>
        Order <b>Pizza</b>
      </Typography>
      <div style={{ align: "center", border: "2px solid #D3D3D3" }}>
        <Table>
          <div width="50%" align="right">
            <TableRow>
              <TableCell>
                <LocalPizzaSharpIcon
                  style={{
                    fontSize: 25,
                    color: "#000080",
                    transform: "rotate(30deg)",
                  }}
                />{" "}
              </TableCell>
              <TableCell>MEDIUM</TableCell>
              <TableCell>
                <RemoveCircleSharpIcon
                  onClick={props.buyMediumPizza}
                  style={{ color: "#000080" }}
                />
              </TableCell>
              <TableCell>{props.numOfMediumPizzas}</TableCell>
              <TableCell>
                <AddCircleIcon
                  onClick={props.addMediumPizza}
                  style={{ color: "#f10c45" }}
                />
              </TableCell>
            </TableRow>
          </div>
        </Table>
      </div>

    
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfMediumPizzas: state.mediumPizza.numOfMediumPizzas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyMediumPizza: () => dispatch(buyMediumPizza()),
    addMediumPizza: () => dispatch(addMediumPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MediumPizza);
