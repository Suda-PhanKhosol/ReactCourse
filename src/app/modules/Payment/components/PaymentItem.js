/* eslint-disable no-restricted-imports */
import React from "react";
import Grid from "@material-ui/core/Grid";
import * as paymentRedux from '../_redux/paymentRedux'
import {useDispatch} from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


function PaymentItem(props) {
      const dispatch = useDispatch()
  const handleDelete = () => {
      alert(`Delete ${props.item.id}`)
      dispatch(paymentRedux.actions.deleteById(props.item.id))

  };
  return (
    <Grid container>
      <Grid item xs={12} lg={8} flexDirection >
        <p style={{backgroundColor:"#F05"}}>{ props.item.id}</p>
        <p style={{backgroundColor:"#F05"}}>{ props.item.title}</p>
        <p style={{backgroundColor:"#F05"}}>{ props.item.amount}</p>

      </Grid>
      <Grid item xs={12} lg={2} ></Grid>
      <Grid item xs={12} lg={2}>
        {" "}
        <button onClick={handleDelete.bind(this)}>X</button>
      </Grid>




      {/* <List style={{backgroundColor:"#B05"}} component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        </List> */}
    </Grid>
  );
}

export default PaymentItem;
