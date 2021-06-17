import React from 'react'
import {Grid,Paper,Button} from '@material-ui/core';
import {red,pink,purple,green} from '@material-ui/core/colors';
import IncomeAdd from "../components/IncomeAdd";
import Expenses from "../components/Expenses";
import IncomeList from "../components/IncomeList";
import IncomeSummary from "../components/IncomeSummary";






export default function Income() {
      return (
            <div>
                        <Grid  justify="flex-end" spacing={3} container  item xs={12} style={{ backgroundColor:pink[100]}}>
                              <Grid  justify="flex-end" item  md={6}>
                                    <p>Income</p>
                              </Grid>
                              <Grid  justify="flex-end" item  md={6} > 
                                    <p>Expenses</p>
                              </Grid>
                        </Grid>
                        <Grid  spacing={3} container  item xs={12} style={{height:200 , backgroundColor:pink[100]}}>
                              <Grid item  md={6}>
                                    <IncomeAdd></IncomeAdd>
                              </Grid>
                              <Grid item  md={6} > 
                                    <Expenses></Expenses>
                              </Grid>
                        </Grid>
                        <br />
                        <br />
                        <br />
                        <Grid  spacing={3} container  item xs={12} style={{height:800 , backgroundColor:green[100]}}>
                              <Grid item  md={12}>
                                    <IncomeList></IncomeList>
                                    <IncomeSummary></IncomeSummary>
                              </Grid>
                              
                        </Grid>

            </div>
      )
}
