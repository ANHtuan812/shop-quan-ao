import React from 'react'
import { Component } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import NewLetter from '../Component/NewLetter'
import Blogbox from '../Component/Blogbox'

class Blog extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <section id="page-header" className="blog-header">
                    <h2>#readmore</h2>
                    <p>Read all case studies about our products!</p>
                </section>
                <Blogbox></Blogbox>
                <section id="pagination" className="section-p1">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">
                        <i className="fal fa-long-arrow-alt-right" />
                    </a>
                </section>
                <NewLetter></NewLetter>
                <Footer></Footer>
            </>


        )
    }

}

export default Blog