import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktail",
                info: "entrer les information de ce service",
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "entrer les information de ce service",
            },
            {
                icon: <FaShuttleVan/>,
                title: "free Shuttle",
                info: "entrer les information de ce service, vous pouvez s'exprimer comme vous voulez",
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "entrer les information de ce service",
            },
                 ]
        }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item, index) => {
                       return (
                       <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>
                       );

                   })}
               </div>
            </section>
        )
    }
}
