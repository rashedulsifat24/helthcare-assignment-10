import React from 'react';
import './Footer.css';
import reportWebVitals from './../../reportWebVitals';
const Footer = () => {
	return (
		<div className="bg-dark text-white align-center p-5">
			<div className="row p-3">
				<div className="col-lg-4 col-md-4 com-sm-12">
					<img className="img-fluid" src="https://i.ibb.co/6D0bfSd/logo-white.webp" alt="" />
					
					<p>
					<br />
					Fitness means different things to different people and Health has something for everyone, whether you're just getting started with a workout routine or have been training since before TikTok was a thing. Get our latest expert moves, pro-tips, and recommendations for who to follow.
					</p>
				</div>
				<div className="col-lg-4 col-md-4 com-sm-12">
					<h5 className="mb-3">Recent Posts</h5>
					<div className="img justify-content-around">
						<img
							className="img-fluid w-75"
							src="https://maruthi.vedicthemes.com/wp-content/uploads/2017/12/about-img2.png"
							alt=""
						/>
						<div>
							<small>OCTOBER 19, 2021</small>
							<p>
								2021 Bangladesh <br />Gym Workout Center
							</p>
						</div>
					</div>
					
				</div>
				
				<div className="col-lg-4 col-md-4 com-sm-12" >
                    <h4>Our Workout Plans</h4>
                    <p>HIIT Rush</p>
                    <p>Sprint</p>
                    <p>Pro Cycling</p>
                    <p>Skill Run</p>
                    <p>HIIT Fusion</p>
                    <p>HIIT Sprint</p>
                    <p>Gym Ball</p>
                </div>
			</div>
            <hr/>
            <p>Copyright by Rashedul Islam 2021. All rights reserved.</p>
		</div>
	);
};

export default Footer;
