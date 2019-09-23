import React, { useState } from 'react';



const AddArticleForm = ( {setArticles}) => {

    const [articleName, setArticleName] = useState('');
    const [articleText, setArticleText] = useState('');

    const addArticle = async() => {
        const result = await fetch(`/api/articles/add-article`, {
            method : 'post',
            body : JSON.stringify({ name : articleName, content : articleText}),
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        const body = await result.json();
        setArticles(body);  
        setArticleName('');
        setArticleText('');
    }


    return (
        <div id="add-comment-form">
            <h3>Add an Article</h3>
            <label>
                Title:
                <input type="text" value = {articleName} onChange= {(event) => setArticleName(event.target.value)}></input>
            </label>
            <label>
                Article:
                <textarea rows="10" cols="50" value = {articleText} onChange = { (event) => setArticleText(event.target.value)}></textarea>
            </label>
            <button onClick = { ()=> addArticle()}>Add Article</button>
        </div>

    )
}



export default AddArticleForm;