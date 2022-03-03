import Head from 'next/head'
import Link from 'next/link'
import {Navbar} from "./blog/Navbar";

export default function Home({posts}) {

    return (
        <>
            <Head>
                <title>Blog with NextJS</title>
            </Head>
            <Navbar />
            <div className='container'>
                <h1>Posts:</h1>
                <div className="row">
                    {posts.map(post =>
                        <div key={post.id} className="col-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <Link href={`/blog/${post.id}`}>
                                        <a className="btn btn-primary">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export async function getStaticProps() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(r => r.json())
    return {
        props: {posts}
    }
}