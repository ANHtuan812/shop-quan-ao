import React from 'react'
import { Component } from 'react'

class Banner extends Component {
    render() {
        return (
            <section id="banner" className="section-m1">
                <h4>Repair Services </h4>
                <h2>
                    Up to <span>70% Off</span> - All t-Shirts &amp; Accessories
                </h2>
                <button className="normal">Explore More</button>
            </section>
        )
    }

}

export default Banner