function upper(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";

    let left = n - row;
    for (let i = 1; i <= left; i++) {
      str += "* ";
    }

    let space = 2 * row - 2;
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }

    let right = n - row;
    for (let k = 1; k <= right; k++) {
      str += "* ";
    }

    console.log(str);
  }
}

function middle(n) {
  for (let row = 1; row <= 1; row++) {
    let str = "";

    let left = row;
    for (let i = 1; i <= left; i++) {
      str += "* ";
    }

    let space = n - 2 * row;
    for (let j = 1; j <= space; j++) {
      str += "    ";
    }

    let right = row;
    for (let k = 1; k <= right; k++) {
      str += "* ";
    }
    console.log(str);
  }
}

function lower(n) {
  for (let row = 1; row <= n - 1; row++) {
    let str = "";

    let left = row;
    for (let i = 1; i <= left; i++) {
      str += "* ";
    }

    let space = n - row - 1;
    for (let j = 1; j <= space; j++) {
      str += "    ";
    }

    let right = row;
    for (let k = 1; k <= right; k++) {
      str += "* ";
    }

    console.log(str);
  }
}

function pattern(n) {
  upper(n);
  middle(n);
  lower(n);
}
pattern(5);
