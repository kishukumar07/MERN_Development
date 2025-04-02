// given n queens you have to place in n *n chessboard so that it cannot kill each other . 
let cheshboard = new Array()
cheshboard.push(new Array(4).fill(0))
cheshboard.push(new Array(4).fill(0))
cheshboard.push(new Array(4).fill(0))
cheshboard.push(new Array(4).fill(0))
// console.log(cheshboard); 

nqueen(cheshboard, row = 0);



let count = 0;
function nqueen(cheshboard, row) {

    if (row === cheshboard.length) {
        count++;
        return;
    }



    for(let colm = 0; colm < cheshboard[0].length; colm++) {
        if (isSafe(cheshboard, row, colm)) {
            cheshboard[row][colm] = 1;
            nqueen(cheshboard, row + 1);
            cheshboard[row][colm] = 0;
        }
    }
}


function isSafe(board , row , colm ) {

    //check 1
for(i = row; i>=0; i++ ){
    
if(board[i][colm] ===1) return false; 
}

    //check2   
for(let i =row , j=colm; i>=0 && j>=0; i--, j--  ){
    if(board[i][j]===1) return false ;  
}
    
    //check 3
for(let i =row , j=colm; i>=0 && j<=board[0].length; i--, j++  ){
        if(board[i][j]===1) return false ;  
    }
        
    return true; 

}