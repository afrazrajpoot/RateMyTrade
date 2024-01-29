import React from "react";
// import Layout from "../../Layout/Layout";

import { useNavigate, useParams } from "react-router-dom";

import { useGetTrademanByIdQuery } from "../../store/storeApi";

const BookingPage = () => {
  
  const { id } = useParams();
  const { data } = useGetTrademanByIdQuery(id);
  const navigate = useNavigate();
  return (
	<>
      <div class="content">
				<div class="container">
					<div class="card">
						<div class="card-body">
							<div class="doctor-widget">
								<div class="doc-info-left">
									<div class="doctor-img">
										<img src={data?.image ? data?.image : "/img/man.png"} class="img-fluid" alt="User"/>
									</div>
									<div class="doc-info-cont">
										<h4 class="doc-name">{data?.username}</h4>
										<p class="doc-speciality">{data?.occupation}</p>
										{/* <p class="doc-department"><img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality"/>Dentist</p> */}
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">({data?.ratings})</span>
										</div>
										<div class="clinic-details">
											<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Lahore, Pakistan - <a href="javascript:void(0);">Get Directions</a></p>
											
										</div>
									</div>
								</div>
								<div class="doc-info-right">
									<div class="clini-infos">
										<ul>
											<li><i class="far fa-thumbs-up"></i> 99%</li>
											<li><i class="far fa-comment"></i> {data?.ratings} Feedback</li>
											<li><i class="fas fa-map-marker-alt"></i> {data?.location}</li>
											<li><i class="far fa-money-bill-alt"></i> Rs. {data?.hourlyRate} per hour </li>
										</ul>
									</div>
									<div class="clinic-booking">
										<button class="apt-btn btn btn-success" onClick={() =>
                      navigate(
                        `/tradesman/book-appointment/${data?._id}/booking-form`
                      )
                    }>Book Appointment</button>
									</div>
								</div>
							</div>
						</div>
					</div>
        </div>
      </div>
	</>
  );
};

export default BookingPage;
