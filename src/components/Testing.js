import React from 'react'

function Testing() {

  function handleTest(e) {
    e.preventDefault()
    const size = 10;
    const start = [5,9];
    const options = [[2, 1],[2, -1],[1, 2],[1, -2],[-1, 2],[-1, -2],[-2, 1],[-2, -1]];
    let board = Array.from({length: size}, () => Array.from({length: size}, () => -1));
    let path = Array.from({length: size * size}, (_, i) => i == 0 ? start : null);
    const isValid = ([x, y]) => board[x] && board[x][y] === -1;
    
    const validOptions = ([x, y]) => {
      let moves = [];
      options.forEach(([corX, corY]) => {
        const nextX = corX + x, nextY = corY + y;
        return isValid([nextX, nextY]) ? moves.push([nextX, nextY]) : null 
      })
      return moves;
    };
    
    const solve = ([x, y], moveNumber = 0) => {
      board[x][y] = moveNumber;
      if (moveNumber + 1 === size * size) return true;
      const sortedMoves = validOptions([x, y]).sort((a, b) => validOptions(a).length - validOptions(b).length);
      for (const [toX, toY] of sortedMoves) {
        if (solve([toX, toY], moveNumber + 1)) {
          path[moveNumber + 1] = [toX, toY]; 
          return path;
        }
        board[toX][toY] = -1;
      }
      return false;
    };

    console.log(solve([start[0], start[1]]))
    
    
  }

  return (
    <button style={{ width: '100px', height: '40px', fontSize: '2rem' }} onClick={handleTest}>test</button>
  )
}

export default Testing