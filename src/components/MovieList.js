import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>

              <div className="card-deck textcolor">
				<div className="card">

				    <div className="card-header headercard"><h3>{movie.name}</h3></div>

					<img className="card-img-top" src={movie.image.url} alt="Hero pic" />

					<div className="card-body">

					<div className="container">
					<div className="row">
						

					</div>
					</div>
					

					<div className="container">
					<div className="row">

					<h5 className="card-title col-12 ">FullName: <span className="lightgray">{movie.biography['full-name']}</span> </h5>
					<p className="card-title col-12">{movie.biography['alter-egos']}</p>

						<h5 className="col-12">Stats</h5>
					   <p className="col-4">Intelligence: {movie.powerstats.intelligence}</p> 
						<p className="col-4">strength: {movie.powerstats.strength}</p>
						<p className="col-4">speed: {movie.powerstats.speed}</p>
						<p className="col-4">power: {movie.powerstats.power}</p>
						<p className="col-4">durability: {movie.powerstats.durability}</p>
						<p className="col-4">Combat: {movie.powerstats.combat}</p>

						<h5 className="col-12">Work</h5>
					    <p className="col-12">{movie.work.occupation}</p> 

						<h5 className="col-12">Base</h5>
					    <p className="col-12">{movie.work.base}</p> 
						
					</div>
					</div>
					
					</div>
				</div>
				</div>

					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;

