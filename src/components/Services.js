import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaHotdog, FaDog} from 'react-icons/fa'
import {GiBalloonDog, GiJumpingDog} from 'react-icons/gi'
import Title from './Title'

export default class Services extends Component {

  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:'drink bar',
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod gravida tincidunt. Sed dapibus congue maximus. In laoreet, sapien ac posuere maximus, ex neque placerat leo, id mollis massa enim sit amet libero.'
      },
      {
        icon:<GiJumpingDog/>,
        title:'Endless exercise',
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod gravida tincidunt. Sed dapibus congue maximus. In laoreet, sapien ac posuere maximus, ex neque placerat leo, id mollis massa enim sit amet libero.'
      },
      {
        icon:<FaHotdog/>,
        title:'your favorite hotdog',
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod gravida tincidunt. Sed dapibus congue maximus. In laoreet, sapien ac posuere maximus, ex neque placerat leo, id mollis massa enim sit amet libero.'
      },
      {
        icon:<FaDog/>,
        title:'no leash experience',
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod gravida tincidunt. Sed dapibus congue maximus. In laoreet, sapien ac posuere maximus, ex neque placerat leo, id mollis massa enim sit amet libero.'
      },

    ]
  }


  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {

            return( 
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
