import React from 'react';
import LatesNews from './../Home/LatesNews/LatesNews';

const AboutUs = () => {
	return (
		<div>
			<div className="pt-5 p-3">
				<div className="mb-3">
                    <h3>Our Dedicated</h3>
				<h1>Instructors</h1>
                </div>

				<div class="card-group">
					<div class="card">
						<img
							src="https://demo.goodlayers.com/zyth/gym/wp-content/uploads/sites/2/2021/02/P09.jpg"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<p>Senior Trainer and Instructor</p>
							<h3>Michael James</h3>
							<small>
								1st trainer from the Team
							</small>
						</div>
					</div>

					<div class="card">
						<img src="https://demo.goodlayers.com/zyth/gym/wp-content/uploads/sites/2/2021/02/P08.jpg" alt="" className="card-img-top" />
						<div className="card-body">
							<p>Junior Trainer and Instructor</p>
							<h3>Sussie Wolff</h3>
							<small>
								2nd trainer from the team
							</small>
						</div>
					</div>
					<div class="card">
						<img
							src="https://demo.goodlayers.com/zyth/gym/wp-content/uploads/sites/2/2021/02/P05.jpg"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<p>Senior Instructor</p>
							<h3>Dave Ankle</h3>
							<small>
								3rd trainer from the team
							</small>
						</div>
					</div>
					<div class="card">
						<img
							src="https://demo.goodlayers.com/zyth/gym/wp-content/uploads/sites/2/2021/02/P07.jpg"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<p>Senior Trainer </p>
							<h3>Anna Spartan</h3>
							<small>
								4th trainer from the team
							</small>
						</div>
					</div>
				</div>
			</div>
			<LatesNews />
		</div>
	);
};

export default AboutUs;
