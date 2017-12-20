import React from "react";
// import styled from "styled-components";

export default (props) => {

	const movieId = parseInt(props.match.params.id, 10)

	return(
		<div>
			{movieId}
		</div>
	);
}

//TODO: Conectar al state de searchResults para no hacer mas http requests?? 