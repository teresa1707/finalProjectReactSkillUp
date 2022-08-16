import { Grid } from '@mui/material'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import articles, { getArticlesObject } from 'utils/ArticlesArray'

export const FavoritePageItem = ({
    article,
    isLiked = false,
    toggleLikeState,
    addLikedArticles,
    id,
}) => {
    return (
        <>
            <Grid item xs={12} md={4} key={id}>
                <Grid className="art-grid ">
                    <div className="art-item">
                        <div className="art-item-box">
                            <div className="art-img-wrap">
                                <img
                                    alt={article.title}
                                    className="art-img"
                                    src={article.image}
                                />
                            </div>

                            <div className="art-category">
                                <div className="art-meta">
                                    {article.author}
                                    <span className="art-separator">//</span>
                                    {article.date}
                                </div>

                                <div className="list1-item-cat">
                                    <div className="rank-cat">
                                        <span className="catIcon">
                                            <img
                                                src={article.categoryIcon}
                                                alt=""
                                            />
                                        </span>
                                    </div>

                                    <div className="name-cat">
                                        <h2 className="title3-card gridItem">
                                            {article.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="art-text">
                                    <p>{article.text}</p>
                                </div>
                                <div className="list2-item-cat">
                                    <div
                                        className="rank-cat"
                                        onClick={(event) => {
                                            toggleLikeState(id)
                                            addLikedArticles(id, isLiked)
                                        }}
                                    >
                                        {' '}
                                        {isLiked ? (
                                            <FaHeart
                                                className="heart"
                                                style={{
                                                    color: 'red',
                                                }}
                                            />
                                        ) : (
                                            <FaHeart className="heart" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>{' '}
        </>
    )
}