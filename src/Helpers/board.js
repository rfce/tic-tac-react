// From react's official doc
const check_winner = (board) => {
    const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return {
				'winner': board[a],
				'winner_row': lines[i]
			}
		}
	}

	return { 'winner': null, 'winner_row': null }
}

const game_over = (board) => {
	return board.every(box => box !== null)
}

export { check_winner, game_over }
