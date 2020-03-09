import React, { Fragment } from 'react'

import Seo from 'Components/SEO'
import ListZoo from 'Components/Zoo/List'
import AddAnimal from 'Components/Zoo/Add'

function ZooContainer() {
    return (
        <Fragment>
             <Seo
                title='Login | Redux example'
                description='Site with a example of redux and your use'
            />
            <main>
                <section>
                    <div className="container">
                        <p>Zoo</p>
                        <ListZoo />
                        <AddAnimal />
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default ZooContainer
