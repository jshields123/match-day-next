import Head from "next/head";
import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { apiKey } from "./../App.config";

export default function Home() {
	function fetchData() {
		fetch(`https://soccer.sportmonks.com/api/v2.0/teams?api_token=${apiKey}`)
			.then(response => response.json())
			.then(data => setTeams(data.data[0].name));
	}

	const [count, setCount] = useState(0);
	const [teams, setTeams] = useState([]);
	useEffect(() => {
		fetchData();
	});
	return (
		<div>
			<Head>
				<title>Match Days</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Match Days</h1>
			<p>{teams}</p>
			<br />

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
			<Map></Map>
			<button title="increment" onClick={() => setCount(count + 1)}>
				{count}
			</button>
		</div>
	);
}
