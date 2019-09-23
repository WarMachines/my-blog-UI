import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ( { match }) => {
    const name = match.params.name;
    const [article, setArticle] = useState('')
    const [otherArtilces, setOtherArticles] = useState([]);
    const [articleInfo, setArticleInfo] = useState({ upvotes : 0, comments : []});

    useEffect(()=> {
        const fetchData = async ()=> {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
            setArticle(body);
        }

        const fetchOtherArtilces = async () => {
            const result = await fetch(`/api/articles/`);
            var body = await result.json();
            body = body.filter(article => article.name !== name);
            body = (body.length > 4 ) ? body.slice(0,3) : body.slice(0,body.length)
            setOtherArticles(body);
        }
        fetchData();
        fetchOtherArtilces();

    }, [name]);

    if(!article) return <NotFoundPage></NotFoundPage>
    return (
        <>
            <h1> {article.name}</h1>
            <UpvotesSection articleName = {name}  upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo} ></UpvotesSection>
            <p>{article.content}</p>
            <CommentsList comments = {articleInfo.comments}></CommentsList>
            <AddCommentForm articleName = {name} setArticleInfo = {setArticleInfo}></AddCommentForm>
            <h3>Other Articles :</h3>
            <ArticlesList articles = { otherArtilces }></ArticlesList>
        </>
    );
} 

export default ArticlePage;