import { React, useState } from 'react'
import { Grid } from '@mui/material'
import articles from 'utils/ArticlesArray'
import { FaHeart } from 'react-icons/fa'
import 'pages/Category/Category.scss'
import 'styles/Main.scss'
import 'styles/grid.scss'
import 'components/MainSection/Images.scss'
import 'components/Title-categories/Icon.scss'
import 'components/Title-categories/Like.scss'
import { Link } from 'react-router-dom'

export const ArtPageItem = ({
    link,
    image,
    categoryIcon,
    title,
    text,
    date,
    author,
}) => {
    return (
        <>
            <Grid container className="col-style-cat art-grid ">
                <div className="art-item">
                    <div className="art-item-box">
                        <div className="art-img-wrap">
                            <a href={link} target="_blank">
                                <img
                                    alt={title}
                                    className="art-img"
                                    src={image}
                                />
                            </a>
                        </div>
                        <div className="art-content">
                            <div className="art-meta">
                                {author}
                                <span className="art-separator">//</span>
                                {date}
                            </div>

                            <div className="list1-item-cat">
                                <div className="rank-cat">
                                    <span className="catIcon">
                                        <img src={categoryIcon} alt="" />
                                    </span>
                                </div>

                                <div className="name-cat">
                                    <h2 className="title3-card gridItem">
                                        {title}
                                    </h2>
                                </div>
                            </div>

                            <div className="art-text">
                                <p>{text}</p>
                            </div>
                            <div className="list2-item-cat">
                                <div className="rank-cat">
                                    <span>
                                        <FaHeart
                                            className="heart"
                                            style={{ fontSize: 20 }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    )
}
