const url =
	"https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json";
const givedata = {
	method: "GET",
};
export async function Fetching() {
	console.log("Begin Fetching");
	let fetvalue = await fetch(url, givedata)
		.then((response) => response.json())
		.then((responseData) => {
			return responseData;
		});
	console.log(fetvalue);
	return fetvalue;
}
