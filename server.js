const express = require('express'); 
const app = express();
const videos = [
	{id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
  ];
const comedians = [
	{id:1, name: "funnyperson 1"},
	{id:2, name: "funnyperson 2"},
	{id:3, name: "funnyperson 3"}	
];
const myDogs = [
	{id:1, breed: "Golden Retriever", name: "Liam", size: "extra large"},
	{id:2, breed: "Siberian Husky", name: "Sara", size: "large"},
	{id:3, breed: "Aussie and Blue Heeler", name: "Emmerson", size: "medium"}
];



app.get('/videos', (request, response) => {
    response.send(videos);
});

app.get('/videos/:id', (request, response) => {
	let id = request.params.id;
	let video = videos[id-1];
	response.send(video);
});

app.get('/comedians/:id', (request, response) => {
	let id = request.params.id;
	let comedian = comedians[id-1];
	response.send(comedian);
});

app.get('/myDogs', (request, response) => {
	response.send(myDogs);
})

app.get('/myDogs/:id', (request, response) => {
	let id = request.params.id;
	let myDog = myDogs[id-1];
	response.send(myDog);
});


app.listen(3000, () => {
    console.log("I am listening");
});