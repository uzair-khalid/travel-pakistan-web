/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import Styles from './searchBar.module.scss';

function SearchBar() {
	const params = new URLSearchParams(window.location.search);
	const [showDestinationInput, setShowDestinationInput] = useState(false);
	const [showPeopleInput, setShowPeopleInput] = useState(false);
	const [showDaysInput, setShowDaysInput] = useState(false);
	const [source, setSource] = useState(params.get('source') || 'islamabad');
	const [destination, setDestination] = useState(params.get('destination') || 'hunza');
	const [people, setPeople] = useState(params.get('people') || '1');
	const [days, setDays] = useState(params.get('days') || '1');

	const handleSearch = () => {
		window.location.href = `/tours?pickup=${source}&destination=${destination}&people=${people}&days=${days}`;
	};

	return (
		<div className={Styles.searchBar}>
			<div className={Styles.wrapper}>
				<div className={Styles.filters}>
					<div className={Styles.source}>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
							<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
							<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
						</svg>
						<div className={Styles.sourceInput}>
							<span>Source</span>
							<select onChange={(e) => setSource(e.target.value)}>
								<option value="islamabad">Islamabad</option>
								{/* <option value="lahore">Lahore</option>
								<option value="karachi">Karachi</option> */}
							</select>
						</div>
					</div>
					<div className={Styles.destination}>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
							<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
							<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
						</svg>
						<div className={Styles.destinationInput}>
							<span>Destination</span>
							{
								showDestinationInput ? (
									<input
										type="text"
										placeholder="Enter Destination"
										className={Styles.destinationInput}
										onChange={(e) => setDestination(e.target.value)}
									/>
								) : (
									<select
										onChange={(e) => {
											(e.target.value === 'Other' ? setShowDestinationInput(true) : setShowDestinationInput(false));
											(e.target.value === 'Other' ? setDestination('') : setDestination(e.target.value));
										}}
										value={destination}
									>
										<option value="hunza">Hunza</option>
										<option value="kashmir">Kashmir</option>
										<option value="swat">Swat</option>
										<option value="kumrat">Kumrat</option>
										<option value="gilgit">Gilgit</option>
										<option>Other</option>
									</select>
								)
							}
						</div>
					</div>
					<div className={Styles.people}>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
						</svg>
						<div className={Styles.peopleInput}>
							<span>Days</span>
							{
								showDaysInput || days > 3 ? (
									<input
										type="number"
										placeholder="Enter Days"
										className={Styles.peopleInput}
										onChange={(e) => setDays(e.target.value)}
										value={days}
									/>
								) : (
									<select onChange={(e) => {
										(e.target.value === 'Other' ? setShowDaysInput(true) : setShowDaysInput(false));
										(e.target.value === 'Other' ? null : setDays(e.target.value));
									}}
									value={days}
									>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option>Other</option>
									</select>
								)
							}
						</div>
					</div>
					<div className={Styles.people}>
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
							<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
						</svg>
						<div className={Styles.peopleInput}>
							<span>People</span>
							{
								showPeopleInput || people > 3 ? (
									<input
										type="number"
										placeholder="Enter People"
										className={Styles.peopleInput}
										onChange={(e) => setPeople(e.target.value)}
										value={people}
									/>
								) : (
									<select	onChange={(e) => {
										(e.target.value === 'Other' ? setShowPeopleInput(true) : setShowPeopleInput(false));
										(e.target.value === 'Other' ? null : setPeople(e.target.value));
									}}
									value={people}
									>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option>Other</option>
									</select>
								)
							}
						</div>
					</div>
				</div>
				<button
					className={Styles.searchButton}
					onClick={() => {
						handleSearch();
					}}
				>
					Search
				</button>
			</div>
		</div>
	);
}

export { SearchBar };
