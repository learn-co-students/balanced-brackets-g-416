const isBalanced = string => {
	let regex = /(\(\)|\[\]|\{\})/g
	let reducedString = string
	while (reducedString.match(regex)) {
		reducedString = removeLayer(reducedString)
	}

	return reducedString === ''
}

const removeLayer = string => {
	let regex = /(\(\)|\[\]|\{\})/g

	return string.replaceAll(regex, "")
}
