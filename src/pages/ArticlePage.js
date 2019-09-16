import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ( { match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name)
    const [articleInfo, setArticleInfo] = useState({ upvotes : 0, comments : []});

    useEffect(()=> {
        const fetchData = async ()=>{
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if(!article) return <NotFoundPage></NotFoundPage>

    const otherArticles = articleContent.filter(article => article.name !== name);
    return (
        <>
            <h1> {article.title}</h1>
            <UpvotesSection articleName = {name}  upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo} ></UpvotesSection>
            {article.content.map((paragraph, key )=> (
                <p key ={key}> {paragraph}</p>
            ))}
            <CommentsList comments = {articleInfo.comments}></CommentsList>
            <AddCommentForm articleName = {name} setArticleInfo = {setArticleInfo}></AddCommentForm>
            <h3>Other Articles :</h3>
            <ArticlesList articles = { otherArticles }></ArticlesList>
        </>
    );
} 

export default ArticlePage;