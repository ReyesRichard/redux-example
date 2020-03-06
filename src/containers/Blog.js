import React, { Fragment } from 'react'
import SEO from '../components/SEO'

function Blog() {
    return (
        <Fragment>
            <SEO 
                title='Blog | Redux example'
            />
            <main>
                <section>
                    <div className="container">
                        <h1>Blog</h1>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default Blog
