import React, { useState } from "react";
import { supabase } from "../lib/supabase";

const ImageUpload = () => {
	async function uploadImage(e) {
		let file = e.target.files[0];
			.from("Game-Image")
		const { data, error } = await supabase.storage
			.upload(file);
		console.log("helooo");
		console.log(error);
	}
	return (
		<div>
			<form>
				<input
					type="file"
					accept="image/png, image/jpeg"
					onChange={(e) => uploadImage(e)}
				/>
			</form>
		</div>
	);
};

export default ImageUpload;
