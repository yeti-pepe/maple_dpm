import { Grid } from '@mui/material';
import React from 'react';


const style = {
    mainContainer: {
        // height: '100vh'
    }
}



const MainTemplate = ({}) => {

    return (
        <Grid container direction="row" className="main-template full-app-height" style={style.mainContainer}>

            <Grid item md={10} className="full-height">
                <Grid container direction="column" className="full-height">

                    <Grid item className="percent-70-height">
                        <Grid container direction="row" className="full-height">

                            <Grid item md={9} className="full-height">
                                <Grid container direction="column" className="full-height">

                                    {/* damage graph component */}
                                    <Grid item className="damage-graph-container percent-80-height"></Grid>
                                    {/* damage summary component */}
                                    <Grid item className="damage-summary-container percent-20-height"></Grid>


                                </Grid>
                            </Grid>

                            <Grid item md={3} className="full-height">
                                <Grid container direction="column" className="full-height">
                                    {/* boss monster setting component */}
                                    <Grid item className="boss-setting-container percent-50-height"></Grid>
                                    {/* character & item setting component */}
                                    <Grid item className="character-setting-container percent-50-height"></Grid>
                                </Grid>


                            </Grid>

                        </Grid>
                    </Grid>



                    {/* skill timeline component */}
                    <Grid item className="timeline-conatiner percent-30-height"></Grid>

 
                </Grid>
            </Grid>


            {/* skill set component */}
            <Grid item md={2} className="skill-set-container full-height"></Grid>



        </Grid>
    )
}

export default MainTemplate;