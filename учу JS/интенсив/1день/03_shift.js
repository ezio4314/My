const array = [1, 1, 2, 3, 5, 8, 13]

function shift(arr) {
	const firstItem = arr[0]

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i+ 1]
	}

	arr.length -= 1

	return firstItem
}

// const res = array.shift()

const res = shift(array)
const res2 = shift(array)

console.log(res)
console.log(res2)
console.log(array)