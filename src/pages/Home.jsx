import React from 'react'
import Header from '../components/Header'
import { FcAbout } from "react-icons/fc";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {  grey} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <Header/>
        {/* landing */}
        <div id='home'>
            <video  autoPlay muted loop width={'100%'} src="/wave.mp4"></video>
        </div>

        {/* About  */}
        <div className=' m-5 border p-3 rounded border-dark bg-secondary'>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <img width={'70%'} className='rounded' src="https://canrone.com/wp-content/uploads/2025/03/Home-About-1.jpg" alt="" />
                </div>
                <div id='about' className="col-md-6 mt-5">
                    <h4 className='fw-bold text-white'><FcAbout /> ABOUT US</h4>
                    <p className='mt-3 text-white'>FutureVision is a technology-driven software development company focused on building reliable, scalable, and user-centric digital solutions. We specialize in transforming ideas into practical products by combining clean engineering, modern frameworks, and a sharp understanding of real-world business needs.</p>
                    <p className='text-white'>Our team works across web development, mobile applications, cloud services, and custom software solutions. We avoid overcomplicating things — our goal is simple: deliver products that work smoothly, solve actual problems, and help businesses grow.</p>
                    <p className='text-white'>At FutureVision, we believe in transparent communication, consistent execution, and long-term partnerships. Whether it’s a small prototype or a full-scale product, we build with clarity, precision, and a strong focus on delivering measurable results.</p>
                </div>
            </div>
        </div>

        {/* Services */}
        <div id='services' className='container text-center'>
           <div className='row'>
                <h5 >OUR LATEST SERVICES</h5>
                <h1 className=' mt-3 fw-bold'>What Kind Of Services We</h1>
                <h1 className=' fw-bold'>Are Offering</h1>
           </div>
        </div>
        <div className="row mt-5 " >
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <div className='my-card border shadow rounded p-3 text-center '>
                    <img src="https://canrone.com/wp-content/uploads/2025/03/Web-Development.svg" alt="" />
                    <h3 className='mt-3'>Website Development</h3>
                    <p className='mt-3'>In current business world, a simple website might not be the best answer to your business needs.A website is truly a face of your business to the outside world. By creating your website with most creative, feature loaded and communicative method, you are opening doors for your business to the global market.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div style={{height:"322px"}} className='my-card border shadow rounded p-3 text-center  '>
                    <img src="https://canrone.com/wp-content/uploads/2025/03/Mob-App-Development.svg" alt="" />
                    <h3 className='mt-3'>Mobile App Development</h3>
                    <p className='mt-3 mb-4'>A mobile app has become part of our daily life as we move forward in the industry with clicks on our fingertips. Now a day every business is turning into digital platforms for getting wide reach and larger market presence. So creating a mobile app has now a major role in your business development without having much investment.</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className='my-card border shadow rounded p-3 text-center '>
                    <img src="https://canrone.com/wp-content/uploads/2025/03/Branding.svg" alt="" />
                    <h3 className='mt-3'>Branding</h3>
                    <p className='mt-3'>A memorable impression on your customers is what everyone looks into and if you need ideas to do that, we are always thrilled to help you.By doing a proper branding to your business, you are creating paths to the minds of your customers. For this Canorone can support you.</p>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <div className='my-card border shadow rounded p-3 text-center  '>
                    <img src="https://canrone.com/wp-content/uploads/2025/03/Web-Development.svg" alt="" />
                    <h3 className='mt-3'>SEO and Digital Marketing</h3>
                    <p className='mt-3'>In this digital age, marketing has bloomed in various ways and we focus on upgrading our resources to smoothen your marketing needs. By doing Search Engine Optimization, your google presence can be increased beyond your imaginations. We will take care for your business development by doing SEO</p>
                </div>
            </div>
            <div className="col-md-4">
                <div style={{height:"322px"}} className='my-card border shadow rounded p-3 text-center'>
                    <img src="https://canrone.com/wp-content/uploads/2025/03/SEO.svg" alt="" />
                    <h3 className='mt-3'>E-Commerce</h3>
                    <p className='mt-3 mb-4'>By doing an E commerce platform, you are opening doors of your business to the wide world. An E commerce platform can help you run your business round the clock with lesser investment and running expenses. The main advantage of E commerce is nothing but convenience. Customers can avail your services at the convenience of their homes/offices or anywhere else.</p>
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className='my-card border shadow rounded p-3 text-center'>
                    <img src="https://canrone.com/wp-content/uploads/2025/03/Branding.svg" alt="" />
                    <h3 className='mt-3'>Hosting</h3>
                    <p className='mt-3'>Web hosting is another main part of your online presence. As a leading Web hosting company in Kochi, we can help you host your site. We offer power control panels which are reliable and secure and also offer 24×7 customer support for the better service of our clients.</p>
                </div>
            </div>
        </div>

        <div className='mt-5' style={{width:'100%',height:'50vh',backgroundImage:"url('https://canrone.com/wp-content/uploads/2025/03/counter-bg-01.jpg')",backgroundAttachment:'fixed',backgroundSize:'cover',backgroundPosition:'top'}}></div>

        {/* Projects */}
        <div className='container mt-5'>
            <h1 className='text-center mt-5 fw-bold'>Turning Imagination into Real-World</h1>
            <h1 className='text-center fw-bold'>Innovation</h1>
            <h4 className='text-center fw-bold '>Our Projects</h4>
        </div>
        <div className='row mt-5'>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <img data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" height={'100%'} width={'100%'} src="https://colorlib.com/wp/wp-content/uploads/sites/2/koral-multipurpose-website-template.jpg" alt="" />
            </div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" id='project-1' className="col-md-6 m-5 border p-5 rounded">
                <h3 className='text-white'>Koral</h3>
                <p className='text-white' style={{textAlign:'justify'}}>A complete, fully responsive web application designed to deliver a modern digital experience with a seamless UI and intuitive navigation. It features a dynamic hero carousel, service sections, interactive components, and a clean layout optimized for performance and usability. Built to help businesses present their products, services, and brand identity professionally, the application combines elegant design with practical functionality to create a smooth and engaging user experience across all devices.</p>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className='row mt-5'>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <img data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='mt-3' width={'100%'} src="https://uicookies.com/wp-content/uploads/2019/10/free-web-design-templates-1000x750.jpg" alt="" />
            </div>
            <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" id='project-2' className="col-md-6 m-5 border p-5 rounded text-white">
                <h3>The Look</h3>
                <p style={{textAlign:'justify'}}>A modern gallery showcase interface created with a bold, minimalist layout and strong visual focus. Designed to highlight featured artists and exhibitions, the page combines large typography with immersive imagery to create an impactful viewing experience. The layout emphasizes clarity, elegance, and easy navigation, making it ideal for art portfolios, photography collections, or creative showcases.</p>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className='row mt-5'>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <img data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='m-2 mt-3' width={'95%'} src="https://cdn.dribbble.com/userupload/11501395/file/original-e57da27483efdc2b93a944f6082f8de1.png?resize=1504x1128&vertical=center" alt="" />
            </div>
            <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" id='project-3' className="col-md-6 m-5 border p-5 rounded bg-dak">
                <h3 className='text-white'>Visual Poetry</h3>
                <p className='text-white' style={{textAlign:'justify'}}>A highly expressive visual portfolio interface built with a striking mix of bold typography, dynamic layouts, and vibrant color accents. Designed for creatives and photographers, the page blends editorial-style design with interactive elements to highlight artworks, achievements, and exhibitions. With its layered composition, modern UI components, and smooth visual flow, this concept delivers an immersive storytelling experience that captures attention instantly.</p>
            </div>
            <div className="col-md-1"></div>
        </div>
   
        <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
            <Link to={'/projectform'}><button className='btn btn-secondary float-btn mb-5'>Get Your First Project <IoArrowForwardCircleSharp className='mb-1'/></button></Link>
        </div>

        {/* Testimonials */}
        <div className='text-center fw-bold mt-5'>
            <h2 className='fw-bold'>TESTIMONIALS</h2>
            <h3 className='fw-bold text-secondary mb-5'>Real Feedback - Real Experiences</h3>
            <div  className='d-flex align-items-center justify-content-evenly'>
                <Card data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{ maxWidth: 345,backgroundColor:'grey' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                            <img width={'100%'} src="https://vocalvideo.com/resources/content/images/2021/07/employee-testimonial-questions.jpeg" alt="" />
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Katherine"
                        subheader="September 14, 2025"
                    />
                    <CardMedia
                        component="img"
                        height="204"
                        image="https://vocalvideo.com/resources/content/images/2021/07/employee-testimonial-questions.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography className='mt-2'>
                            Implemented features exactly as required, with smart improvements.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <Card data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{ maxWidth: 345,backgroundColor:'grey' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                            <img width={'100%'} src="https://vocalvideo.com/resources/content/images/size/w1920/2021/06/video-testimonial-app.jpeg" alt="" />
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Elizabeth"
                        subheader="March 15, 2025"
                    />
                    <CardMedia
                        component="img"
                        height="204"
                        image="https://vocalvideo.com/resources/content/images/size/w1920/2021/06/video-testimonial-app.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography className='mt-2'>
                            Communicated clearly and consistently during the entire project.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <Card data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{ maxWidth: 345,backgroundColor:'grey' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                            <img width={'100%'} src="https://vocalvideo.com/resources/content/images/size/w1920/2021/11/how-to-shoot-a-video-testimonial.jpeg" alt="" />
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Daniel"
                        subheader="November 20, 2025"
                    />
                    <CardMedia
                        component="img"
                        height="204"
                        image="https://vocalvideo.com/resources/content/images/size/w1920/2021/11/how-to-shoot-a-video-testimonial.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography className='mt-2'>
                            Provided regular updates and timelines without delays.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
            <div  className='d-flex align-items-center justify-content-evenly mt-5'>
                <Card data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{ maxWidth: 345,backgroundColor:'grey' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                            <img width={'100%'} src="https://www.shutterstock.com/shutterstock/videos/1103296545/thumb/1.jpg?ip=x480" alt="" />
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Robert"
                        subheader="July 06, 2025"
                    />
                    <CardMedia
                        component="img"
                        height="204"
                        image="https://www.shutterstock.com/shutterstock/videos/1103296545/thumb/1.jpg?ip=x480"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography className='mt-2'>
                            Delivered exactly what was promised, with no shortcuts.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <Card data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{ maxWidth: 350,backgroundColor:'grey' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                            <img width={'100%'} src="https://vocalvideo.com/resources/content/images/2022/05/video-testimonials.jpeg" alt="" />
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Sarah"
                        subheader="December 10, 2024"
                    />
                    <CardMedia
                        component="img"
                        height="204"
                        image="https://vocalvideo.com/resources/content/images/2022/05/video-testimonials.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography className='mt-2'>
                            Improved our performance, conversions, and overall user engagement.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <Card data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{ maxWidth: 345,backgroundColor:'grey' }} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                            <img width={'100%'} src="https://media.istockphoto.com/id/1457741479/photo/portrait-of-a-young-happy-blond-haired-girl-outdoors.jpg?s=612x612&w=0&k=20&c=JR25mOy1lNzQYh05be0xyT442Gim52VLHNu1_jKc1Wg=" alt="" />
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Caroline"
                        subheader="February 20, 2025"
                    />
                    <CardMedia
                        component="img"
                        height="204"
                        image="https://media.istockphoto.com/id/1457741479/photo/portrait-of-a-young-happy-blond-haired-girl-outdoors.jpg?s=612x612&w=0&k=20&c=JR25mOy1lNzQYh05be0xyT442Gim52VLHNu1_jKc1Wg="
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography className='mt-2'>
                            Excellent problem-solving and debugging throughout the project.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home