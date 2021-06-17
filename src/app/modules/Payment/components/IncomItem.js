import React from 'react'
import {ListItemText ,ListItem ,List, Grid } from '@material-ui/core'
import {red,pink,purple,green,blue} from '@material-ui/core/colors';
import * as incomeRedux from '../_redux/incomeRedux'
import {useDispatch} from 'react-redux'




export default function IncomItem(props) {
      const dispatch = useDispatch()
      const handleDelete = () => {
          alert(`Delete ${props.item.id}`)
          dispatch(incomeRedux.actions.deleteById(props.item.id))
    
      };
      return (
            <div>
                  <Grid container justify="flex-end">
                        <Grid xs={1} item style={{backgroundColor:red[200]}}>
                          <h3>{props.item.id}</h3>
                        </Grid>
                        <Grid xs={8} item style={{backgroundColor:purple[200]}}>
                          <h3>{props.item.title}</h3>
                        </Grid>
                        <Grid xs={2} item style={{backgroundColor:blue[200]}}>
                          <h3>{props.item.amount}</h3>
                        </Grid>
                        <Grid  xs={1} item >
                         <button onClick={handleDelete.bind(this)}>X</button>
                        </Grid>
                  </Grid>
                 
            </div>
      )
}
