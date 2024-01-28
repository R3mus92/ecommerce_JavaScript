import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
   return (
   <div className='descriptionbox'>
      <div className="description-box-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
         <p>Our website is designed to be user-friendly and easy to navigate.
            You can browse our products by category, brand, or bestsellers.
            We also offer a variety of filters to help you narrow down your search. 
            If you're looking for something specific, you can use our search bar to find it quickly and easily.
         </p>
         <p>
            Our product pages are packed with information to help you make informed decisions.
            We provide detailed product descriptions, high-quality images, and customer reviews. 
            We also offer a variety of sizes, colors, and styles to choose from.
         </p>
      </div>
   </div>
   )
}

export default DescriptionBox
