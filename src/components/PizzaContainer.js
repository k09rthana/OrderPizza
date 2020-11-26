import React from "react";
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
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <Typography align="left" style={{ color: "#000080" }}>
        Order <b>Pizza</b>
      </Typography>

      <Table>
        <div width="50%" align="right">
          <TableRow>
            <TableCell>
              <LocalPizzaSharpIcon />
            </TableCell>
            <TableCell>Small</TableCell>
            <TableCell>
              <RemoveCircleSharpIcon
                onClick={props.buyCake}
                style={{ color: "#000080" }}
              />
            </TableCell>
            <TableCell>{props.numOfCakes}</TableCell>
            <TableCell>
              <AddCircleIcon style={{ color: "#f10c45" }} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <LocalPizzaSharpIcon />
            </TableCell>
            <TableCell>Medium</TableCell>
            <TableCell>
              <RemoveCircleSharpIcon
                onClick={props.buyItem}
                style={{ color: "#000080" }}
              />
            </TableCell>
            <TableCell>{props.item}</TableCell>
            <TableCell>
              <AddCircleIcon style={{ color: "#f10c45" }} />
            </TableCell>
          </TableRow>
        </div>
      </Table>
    </div>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   const itemState = ownProps.cake
//     ? state.cake.numOfCakes
//     : state.iceCream.numOfIceCreams
//   return {
//     item: itemState
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const dispatchFunction = ownProps.cake
//     ? () => dispatch(buyCake())
//     : () => dispatch(buyIceCream())
//   return {
//     buyItem: dispatchFunction
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
