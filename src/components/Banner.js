import React from "react";
import banner from "../targetbanner.jpeg";

const Banner = () => {
	return (
		<div class="bg-fixed" style={{ backgroundImage: `url(${banner})` }}>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-col text-center w-full ">
						<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
							TARGET METRO TRANSIT
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Travel responsibly. Masks are required on all buses and trains. Capacity is limited to 20 passengers per 40-foot bus.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;
