import React from 'react';
import {Link} from 'react-router-dom';

const ArticlesList = ( { articles }) => (
    <>
        {articles.map((article, key) => (
            <Link className="article-list-item" key = {key} to={`/article/${article.name}`}>
            <h3>{article.name}</h3>
            <p>{article.content.substring(0, 150)}...</p>
            </Link>
        ))}
     </>
);

export default ArticlesList;