import React from 'react';

const Depertment = () => {
	return (
		<div>
			<div className="py-3">
				<h1 >All Departments</h1>
				<p>STAY FOCUSSED STAY FIT and HEALTHY</p>
			</div>
			<div className="row mt-4 mb-4">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img className="img-fluid" src="https://i.ibb.co/zQp4vY2/classes-9-360x360.jpg" alt="" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<h3 >Workout Department</h3>
					<p className="mt-4 mb-4">
					A full body workout is just what it sounds like: a workout that aims to hit all the major muscle groups in one single session. Popular programs would include exercises for back, legs, chest, shoulders, arms and core.

There are many reasons some trainees like to utilise a full body workout, whether from time to time or as a standard go-to in their workout routine.

“When performing full-body workouts, you don’t want to waste time doing isolation exercises,” says personal trainer Matt Hampton. “You want to get the biggest, hardest exercises done for the biggest muscle stimulation.”
					</p>
					<button style={{ backgroundColor: '#153D8F', color: 'white' }} className="btn">
						Read more
					</button>
				</div>
			</div>

			<div className="row mt-4 mb-4">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img
						className="img-fluid"
						src="https://i.ibb.co/16LCBRq/blog-2-360x360.jpg"
						alt=""
					/>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<h3 style={{ color: '#153D8F' }}>Nutrition Department</h3>
					<p className="mt-4 mb-4">
					Nutrition is the study of nutrients in food, how the body uses them, and the relationship between diet, health, and disease.

Nutritionists use ideas from molecular biology, biochemistry, and genetics to understand how nutrients affect the human body.

Nutrition also focuses on how people can use dietary choices to reduce the risk of disease, what happens if a person has too much or too little of a nutrient, and how allergies work.
					</p>
					<button style={{ backgroundColor: '#153D8F', color: 'white' }} className="btn">
						Read more
					</button>
				</div>
			</div>
		</div>
	);
};

export default Depertment;
