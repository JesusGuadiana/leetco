// Recursive non DP/Memoization approach
var uniquePaths = function(m, n) {
    let uniquePaths = explore(0,0,m,n);
    return uniquePaths;
};


var explore = (x,y,m,n) => {
    if(x > m || y > n){
        return 0;
    }

    if(x === m - 1 && y === n - 1){
        return 1;
    }

    return explore(x + 1, y, m, n) + explore(x, y + 1, m, n);
}

//Iterative Memoization approach
var uniquePaths = function(m, n) {
  let matrix = Array
      .from({ length: n })
      .map(() => Array.from({ length: m  }).fill(0));

  for(let i = 0; i < n; i++){
      matrix[i][0] = 1;
  }

  for(let i = 0; i < m; i++){
      matrix[0][i] = 1;
  }

  for(let i = 1; i < n; i++){
      for(let j = 1; j < m; j++){
          matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
      }
  }
  return matrix[n - 1][m -1]
};
