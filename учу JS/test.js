const newPost = (post, addedAt=Date()) => {
	return post && addedAt
}

const firstPost = {
	id:1,
	author: 'Kolya',
}

console.table(newPost(firstPost))