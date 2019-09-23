import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import AddArticleForm from '../components/AddArticleForm';

const ArticlesListPage = () => {
        const [articles, setArticles] = useState([]);
        useEffect(() => {
            const fetchAllArticles = async () => {
                const result = await fetch('/api/articles/');
                const body = await result.json();
                setArticles(body);  
            }
            fetchAllArticles();
        }, [])
        return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles = { articles }></ArticlesList>
            <AddArticleForm setArticles = { setArticles }></AddArticleForm>
        </>
        )
    };

export default ArticlesListPage;