import Link from 'next/link';
import React from 'react';
import style from "./post.module.css";

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data;
}

export const metadata = {
    title: "All posts",
    description: "Trying to learn NextJs",
  };

const Posts = async () => {
    const posts = await getPosts();
    return (
        <div className='gap-8 grid grid-cols-4'>
            {
                posts.map((singlePost) => {
                    return (
                        <>
                            <div className='border-2 border-slate-300' key={singlePost.id}>
                                <p className={`${style["post-title"]}`}>{singlePost.title}</p>
                                <p className='testing-purpose'>{singlePost.body}</p>
                                <Link href={`/post/${singlePost.id}`}>Details</Link>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
};

export default Posts;