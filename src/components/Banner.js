import React from "react";
import banner from "../targetbanner.jpeg";

const Banner = () => {
	return (
		<div class="bg-fixed" style={{ backgroundImage: `url(${banner})` }}>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
							Pricing
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Banh mi cornhole echo park skateboard authentic crucifix neutra
							tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
							twee
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;
