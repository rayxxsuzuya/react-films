function Movie(props) {
	const {Title: title, Year: year, imdbID: id, Type: type, Poster: poster} = props;

	return (
		<div>
			<div className="card" id={id}>
				<div className="card-image waves-effect waves-block waves-light">
					{
						poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x500?text=${title}`} /> : <img className="activator" src={poster} />
					}
				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right"></i></span>
					<p>{year} <span className="right">{type}</span></p>
				</div>
			</div>
		</div>
	);
}

export {Movie};