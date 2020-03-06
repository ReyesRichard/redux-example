import React, {Fragment} from 'react'
import Seo from 'Components/SEO'
// import  dotenv from 'dotenv'
// import  dotenvExpand from 'dotenv-expand'

// const myEnv =  dotenv.config()
// const explaid = dotenvExpand(myEnv)
// console.log( explaid)

function Home() {
    return (
        <Fragment>
            <Seo 
                title='Redux example'
                description='Site with a example of redux and your use'
            />
            <main>
                <section>
                    <div className="container">
                        <h1>Home</h1>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default Home
