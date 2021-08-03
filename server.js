const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
const app = express()

port = process.env.PORT || 3001

app.use('/graphql',createProxyMiddleware({ 
	target: 'https://n7b67.sse.codesandbox.io', 
	changeOrigin: true,
}));


app.use(express.static(path.join(__dirname, "build")))

app.use(function(req, res){
	res.sendFile(path.join(__dirname, "..", "build", "index.html"))
})

app.listen(port)

// const fetchData = async (req,res) => {
// 	const {  } = req
// 	const fetch = require('cross-fetch')
// 	try {
// 		const resp = await fetch("https://n7b67.sse.codesandbox.io/graphql", {
// 		    method: "POST",
// 		    headers: {
// 		    "Content-Type": "application/json"
// 		    },
// 		    body: JSON.stringify({
// 		    query: `
// 		        {
// 		        movies{
// 		        id
// 		        name
// 		        genre
// 		        actor{
// 		            id
// 		            name
// 		            age
// 		        }
// 		        }
// 		      }
// 		    `,
// 		    })
// 		})
// 		if (resp.status >=400) {
// 			throw new Error("bad response from server")
// 		}
// 		const data =  await resp.json()
// 		res.json(data)
// 	} catch (err) {
// 		res.json(err)
// 		console.error(err)
// 	}
// }