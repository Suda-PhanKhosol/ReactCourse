import React from 'react'
import { useSelector } from 'react-redux'
import {ListItemText ,ListItem ,List, Grid } from '@material-ui/core'
import {red,pink,purple,green,blue} from '@material-ui/core/colors';


export default function IncomeSummary() {
      const incomeReducer = useSelector(({income}) => income)


      return (
            <div>
           <br />
                   <Grid container justify="flex-end">
                        <Grid  xs={2} item >
                          <h5>count : {incomeReducer.summary.count}</h5> <br />
                          <h5>sum : {incomeReducer.summary.sum}</h5>
                        </Grid>
                  </Grid>
      </div>
      )
}
