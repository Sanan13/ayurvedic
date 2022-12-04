import React from 'react'
import oil from "../component/image/01r.png"
import color from "../component/image/02r.png"
import powder from "../component/image/03r.png"
import joint from "../component/image/04r.png"
import gasgo from "../component/image/05r.png"
import jco from "../component/image/06r.png"
import pain from "../component/image/07r.png"
import diabetes from "../component/image/08r.png"
import  "../component/Card.css"
function Card() {
    const mystyle={
        display: 'inline',
        padding: '8px',
        color:'rgb(42, 157, 138)',
        border:'2px solid rgb(42, 157, 138)',
        borderRadius:'15px'
    }
  return (
    <>
    <h1 id='products' className='my-4' style={mystyle}>OUR PRODUCTS</h1>
    <section  className="my-4 m-container">
    <div className="card">
        <div className="card-img">
            <img src={oil} alt="" />
        </div>
        <h3>DIABETES CARE</h3>
        <p>Purchase this medicine to get assured relief from diabtes</p>
       <a claassName="anst" href="www.amazon.com">View Description</a>
       <a href="https://www.amazon.in/Sadhev-Natural-Colour-Single-Process/dp/B09NJLTMQK/ref=sr_1_1_sspa?crid=15T7KNTWBVTYK&keywords=ayurvedic+hair+colour&qid=1669916836&qu=eyJxc2MiOiI1LjMwIiwicXNhIjoiNC45NyIsInFzcCI6IjMuNjcifQ%3D%3D&sprefix=aayurved%2Caps%2C254&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" target="_blank" rel="noreferrer">
        <button className="m-btn" >BUY NOW</button>
        </a>
    </div>
    <div className="card">
        <div className="card-img">
            <img src={color} alt="" />
        </div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="m-btn">BUY NOW</button>
    </div>
    <div className="card">
        <div className="card-img">
            <img src={powder} alt="" />
        </div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="m-btn">BUY NOW</button>
    </div>
    <div className="card">
        <div className="card-img">
            <img src={joint} alt="" />
        </div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="m-btn">BUY NOW</button>
    </div>
    <div className="card">
        <div className="card-img">
            <img src={gasgo} alt="" />
        </div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="m-btn">BUY NOW</button>
    </div>
    <div className="card">
        <div className="card-img">
            <img src={jco} alt="" />
        </div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="m-btn">BUY NOW</button>
    </div>
    <div className="card">
        <div className="card-img">
            <img src={pain} alt="" />
        </div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="m-btn">BUY NOW</button>
    </div>
    <div className="card">
        <div className="card-img">
            <img src={diabetes} alt="" />
        </div>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="m-btn">BUY NOW</button>
    </div>
</section>
</>
  )
}

export default Card
