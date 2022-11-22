import './singlepost.css'
import {Link} from "react-router-dom"

import React from 'react'

export default function Singlepost({post}) {
    const PF = "http://localhost:5000/images/"
    return (
       

<div class="container">
        <div class="blog-post">
            <div class="blog-post_img">
                {
                    post.photo &&
                     <img src={ PF+post.photo }
                    alt=""/>
                }
            </div>
            <div class="blog-post_info">
                <div class="blog-post_date">
                   
                    <span>{ new Date(post.createdAt).toDateString()}</span>
                </div>
                <h1 class="blog-post_title"><Link to={`/post/${post._id}`} className="link" >
                    <span >{post.title}</span>
                    </Link></h1>
                <p class="blog-post_text">
                   {post.des}
                </p>
                <a href={`/post/${post._id}`} class="blog-post_cta"><Link to={`/post/${post._id}`} className="link" >
                    <span>Read More</span>
                    </Link></a>
            </div>
        </div>

      </div> 
        
    )
}
