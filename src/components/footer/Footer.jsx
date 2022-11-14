const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>GABRIEL LOGO</a>

      <ul className="footer_links">
        <li ><a onClick={clickHomeFooter} >Home</a></li>
        <li><a onClick={clickAboutFooter}>About</a></li>
        <li> <a onClick={clickExperienceFooter}>Experience</a></li>
        <li> <a onClick={clickServicesFooter}>Services</a></li>
        <li> <a onClick={clickPortfolioFooter}>Portfolio</a></li>
         <li> <a onClick={clickTestimonialsFooter}>Testimonials</a></li>
        <li> <a onClick={clickContactFooter}>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; GABRIEL's React, All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer