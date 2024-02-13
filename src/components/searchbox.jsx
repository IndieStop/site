import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	"https://mmagbicdzhwdpoyrygos.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tYWdiaWNkemh3ZHBveXJ5Z29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3ODQ0NDEsImV4cCI6MjAyMDM2MDQ0MX0.Qla77D137coeBxaxLjlqQw6UNxPEvFxE0yw9tt5JSwY"
);

function SearchBox() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async (event) => {
		const { data, error } = await supabase
			.from("Game")
			.select("*")
			.ilike("Name", "Undertale");
		if (error) {
			console.error(error);
		} else {
			setSearchResults(data);
		}

		setSearchTerm(event.target.value);
	};

	return (
		<div className="relative">
			<input
				type="text"
				className="w-full bg-brand-base border-0 rounded-lg text-brand-surface focus:outline-none focus:ring-0"
				placeholder="Search..."
				value={searchTerm}
				onChange={handleSearch}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 absolute right-2 top-2 text-brand-surface"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M19 19l-6-6m0 0l-6-6m6 6l-6 6m6-6l6 6"
				/>
			</svg>
			{searchResults.map((result) => (
				<div key={result.id}>{result.column_name}</div>
			))}
		</div>
	);
}

export default SearchBox;
