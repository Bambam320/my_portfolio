import React from 'react'

function Testing() {

  function handleTest(e) {
    e.preventDefault()
    const size = 6;
    const start = [2, 2];
    const options = [[2, 1],[2, -1],[1, 2],[1, -2],[-1, 2],[-1, -2],[-2, 1],[-2, -1]];
    let board = Array.from({length: size}, () => Array.from({length: size}, () => -1));
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
      console.log("sortedMoves", sortedMoves)
      for (const [toX, toY] of sortedMoves) {
        if (solve([toX, toY], moveNumber + 1)) {
          return board.map((row, corX) => {
            return row.map((pos, corY) => )
          });
        }
        board[toX][toY] = -1;
      }
      return false;
    };

    console.log(solve([start[0], start[1]]))
    
    // let successes = 0;
    // let failures = 0;
    // for (let startX = 0; startX < size; startX++) {
    //   for (let startY = 0; startY < size; startY++) {
    //     resetBoard();
    //     const success = solve([startX, startY]);
    //     if (success) {
    //       successes = successes + 1;
    //     } else {
    //       failures = failures + 1;
    //     }
    //     renderBoard(board);
    //   }
    // }
    
    // console.log("Successes", successes);
    // console.log("Failures", failures);



    // let N = 5
    // // A utility function to check if i,j are
    // // valid indexes for N*N chessboard 
    // function isSafe(x, y, sol) {
    //   return (x >= 0 && x < N && y >= 0 && y < N && sol[x][y] == -1);
    // }
    // // This function solves the Knight Tour problem
    // // using Backtracking.  This  function mainly
    // // uses solveKTUtil() to solve the problem. It
    // // returns false if no complete tour is possible,
    // // otherwise return true and prints the tour.
    // // Please note that there may be more than one
    // // solutions, this function prints one of the
    // // feasible solutions.  
    // function solveKT() {
    //   let sol = new Array(N);
    //   for (var i = 0; i < sol.length; i++) {
    //     sol[i] = new Array(2);
    //   }
    //   console.log('solvekt')

    //   // Initialization of solution matrix 
    //   for (let x = 0; x < N; x++) {
    //     for (let y = 0; y < N; y++) {
    //       sol[x][y] = -1;
    //     }
    //   }

    //   // xMove[] and yMove[] define next move of Knight.
    //   // xMove[] is for next value of x coordinate
    //   // yMove[] is for next value of y coordinate 
    //   let xMove = [2, 1, -1, -2, -2, -1, 1, 2];
    //   let yMove = [1, 2, 2, 1, -1, -2, -2, -1];

    //   // Since the Knight is initially at the first block
    //   sol[0][0] = 0;

    //   // start from 0,0 and explore all tours using
    //   // solveKTUtil() 
    //   if (!solveKTUtil(0, 0, 1, sol, xMove, yMove)) {
    //     console.log("Solution does not exist");
    //     return false;
    //   } else {
    //     console.log(sol);
    //   }
    //   return true;
    // }

    // // A recursive utility function to solve Knight
    // // Tour problem 
    // function solveKTUtil(x, y, movei, sol, xMove, yMove) {
    //   console.log('solveutil')
    //   let k, next_x, next_y;
    //   if (movei == N * N) {
    //     return true;
    //   }
    //   // Try all next moves from the 
    //   // current coordinate x, y 
    //   for (k = 0; k < 8; k++) {
    //     next_x = x + xMove[k];
    //     next_y = y + yMove[k];
    //     if (isSafe(next_x, next_y, sol)) {
    //       sol[next_x][next_y] = movei;
    //       if (solveKTUtil(next_x, next_y, movei + 1, sol, xMove, yMove)) {
    //         return true;
    //       } else {
    //         sol[next_x][next_y] = -1; // backtracking
    //       };
    //     };
    //   };
    //   return false;
    // };

    // // Function Call
    // solveKT();


    // console.log(knights_tour([ 0, 0 ], 6))


    // function knights_tour(start, size) {
    // // board size
    // const board = size * size
    // // helper for validator
    // const posCheck = (e) => e >= 0 && e < size;
    // // validator for x, y indexes for N*N chessboard
    // const validPos = (x, y, path) =>  posCheck(x) && posCheck(y) && path[x][y] == -1;
    // // creates initial path of starting coordinate argument start and unchecked coordinates
    // let path = Array.from({length: board}, (_, i) => i < 1 ? start : [-1, -1]);
    // // hard coded movement options for knight
    // let options = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];

    // // backtracks the next move recursively to validate the next step
    // const pathTracker = (x, y, nextMove, path, options) => {
    //   let nextX = 0,
    //       nextY = 0;
    //   if (nextMove == board) return true;
    //   for( let i = 0; i < size; i++ ) {
    //     nextX = x + options[i][0];
    //     nextY = y + options[i][1];
    //     if ( validPos(nextX, nextY, path) ) {
    //       path[nextX][nextY] = nextMove;
    //       if (pathTracker(nextX, nextY, nextMove + 1, path, options)) return true;
    //       else path[nextX][nextY] = -1; // backtracking
    //     };
    //   };
    //   return false;
    // };
    // 	return pathTracker(start[0], start[1], 1, path, options) ? path : [];
    // };
  }

  return (
    <button style={{ width: '100px', height: '40px', fontSize: '2rem' }} onClick={handleTest}>test</button>
  )
}

export default Testing