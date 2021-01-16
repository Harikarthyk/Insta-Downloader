const API = "http://localhost:5050";
export const getImageOrVedio = (input) => {
	return fetch(`${API}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(input),
	})
		.then((result) => result.json())
		.catch((error) => console.error(error));
};
