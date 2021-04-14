import React from "react";

export default location = () => {
	return (
		<div>
			<form>
				Chuck your address here
				<br />
				<input></input>
				<button
					onClick={e => {
						e.preventDefault();
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};
