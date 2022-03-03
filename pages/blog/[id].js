import Link from "next/link";
import Head from "next/head";
import {Navbar} from "./Navbar";

export default function Post({post}) {
    return <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <Navbar />
        <div className="container">
            <Link href="/">
                <a>Come Back</a>
            </Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    </>
}

export async function getStaticProps({params}) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(r => r.json())
    return {
        props: {post}
    }
}

export async function getStaticPaths() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(r => r.json())
    return {
        paths: posts.map(post => ({
            params: {id: post.id.toString()}
        })),
        fallback: false
    }
}