export const formatTimer = (seconds) => {
	const hours = seconds < 3600 ? 0 : (seconds - (seconds % 3600)) / 3600
	const minutes =
		seconds < 60 ? 0 : (seconds - hours * 3600 - (seconds % 60)) / 60
	const sec = seconds - hours * 3600 - minutes * 60

	return `${minutes.toString().padStart(2, '0') + ':'}${sec
		.toString()
		.padStart(2, '0')}`
}
