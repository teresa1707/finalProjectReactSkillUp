import React from 'react'
import Grid from '@mui/material/Grid'
import 'styles/Main.scss'
import 'styles/grid.scss'
import { ModalWindow } from 'components/Modal/Modal'

import { FollowUs } from 'components/FollowUs/FollowUs'

export const MainColumnItems = () => {
    return (
        <>
            <Grid container className="flex-col">
                <Grid item className="col-style" mb={4}>
                    {' '}
                    <div className="title2">inspiration</div>
                    <div className="text2 italic">
                        <p>
                            "Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Id, illum vero, atque asperiores quae, sint
                            nulla aspernatur deserunt eveniet vel eligendi
                            doloremque. Sequi quisquam, velit blanditiis animi
                            tempora minima esse!"
                        </p>
                        <p>Author</p>
                    </div>
                </Grid>
                <Grid item className="col-style" mb={4}>
                    <div className="title2">Our mission</div>
                    <div className="text2">
                        <p>
                            Fugiat possimus perferendis odio laudantium error
                            vero maxime quasi architecto distinctio eaque
                            aliquid ut excepturi ea eius, illum labore. Quo,
                            velit et?
                        </p>
                    </div>
                    <ModalWindow className="modalWindow" />
                </Grid>
                <Grid item className="col-style" mb={4}>
                    <FollowUs />
                </Grid>
            </Grid>
        </>
    )
}
