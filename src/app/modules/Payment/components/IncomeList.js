import React from 'react'
import { useSelector } from 'react-redux'
import IncomItem from '../components/IncomItem'
import {ListItemText ,ListItem ,List, Grid } from '@material-ui/core'
import {red,pink,purple,green,blue} from '@material-ui/core/colors';

export default function IncomeList() {
    const incomeReducer = useSelector(({income}) => income)

      return (
            <div>
                  
                  <Grid container >
                        <Grid  xs={1} item style={{backgroundColor:red[500]}}>
                          <h3 tex>Id</h3>
                        </Grid>
                        <Grid xs={8} item style={{backgroundColor:purple[500]}}>
                          <h3>Description</h3>
                        </Grid>
                        <Grid xs={2} item style={{backgroundColor:blue[500]}}>
                          <h3>Amount</h3>
                        </Grid>
                  </Grid>
                        {incomeReducer.incomes.map((item,index) => (
                        <IncomItem item={item}></IncomItem>
                        ))}
             </div>
      )
}
