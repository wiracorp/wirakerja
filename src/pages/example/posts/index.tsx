import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  selectPost, fetchPost, postAdd
} from '@/features/post/postSlice';
import { FormEvent, useEffect, useRef } from 'react';
import { Post } from '@/interfaces/index';

const Posts = () => {
    const dispatch = useAppDispatch();
    const posts:Post[] = useAppSelector(selectPost);

    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        dispatch(fetchPost())
    }, [])
    useEffect(() => {
        console.log(posts)
    }, [posts])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (titleRef.current?.value && bodyRef.current?.value) {
            dispatch(postAdd({
                title: titleRef.current.value,
                body: bodyRef.current.value
            }))
        } else {
            alert("Can't Null")
        }
    }
    
    return (
        <div>
            <h1>Hello Next.js 👋</h1>
            <div>Current Posts state :</div>
            <ul>
                {posts.map(v => (
                <li key={v.id}>
                    <h1>{v.title}</h1>
                    <p>{v.body}</p>
                </li>
                ))}
            </ul>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={titleRef} /> <br/>
                <textarea ref={bodyRef} /> <br/>
                <button type="submit">Create Posts</button>
            </form>

            <p>
                <Link href="/about">
                <a>Go to About</a>
                </Link>
            </p>
        </div>
    )
}

export default Posts