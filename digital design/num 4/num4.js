function printTriangle(n) {
  for (let i = n; i > 0; i--) {
    let sharp = "";
    let space = "";
    for (let j = 0; j<i; j++)
    {
      space += " ";
    }
    for (j = -1; j < n - i; j++)
    {
      sharp += "# ";
    }
    console.log(space, sharp)
  }
}

printTriangle(5)