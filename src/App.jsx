import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { DestinationContext } from "./Context/DestinationContext";
import { SourceContext } from "./Context/SourceContext";
import { SearchContext } from "./Context/SearchContext";
import { DistanceContext } from "./Context/DistanceContext";
import { NgoAccContext } from "./Context/NgoAccContext";

function App() {
	const [source, setSource] = useState(null);
	const [destination, setDestination] = useState(null);
	const [search, setSearch] = useState(false);
	const [distanceAll, setDistanceAll] = useState(null);
	const [isNgoAcc, setIsNgoAcc] = useState(false);

	return (
		<>
			<NgoAccContext.Provider value={{ isNgoAcc, setIsNgoAcc }}>
				<SourceContext.Provider value={{ source, setSource }}>
					<DestinationContext.Provider value={{ destination, setDestination }}>
						<SearchContext.Provider value={{ search, setSearch }}>
							<DistanceContext.Provider value={{ distanceAll, setDistanceAll }}>
								<div className="h-screen overflow-hidden">
									<Header />
									<Body />
								</div>
							</DistanceContext.Provider>
						</SearchContext.Provider>
					</DestinationContext.Provider>
				</SourceContext.Provider>
			</NgoAccContext.Provider>
		</>
	);
}

export default App;
