var budi = 170;
var udin = 178;
var pekerti = 160;

if (budi > udin) {
  if (budi > pekerti) {
    console.log("Budi yang tertinggi", budi);
  } else {
    console.log("Budi yang tertinggi kedua", budi);
  }
} else {
  if (budi < pekerti) {
    console.log("Budi adalah yang terkecil", budi);
  } else {
    console.log("budi yang terkecil kedua", budi);
  }
}
if (udin > budi) {
  if (udin > pekerti) {
    console.log("udin yang tertinggi", udin);
  } else {
    console.log("udin yang tertinggi kedua", udin);
  }
} else {
  if (udin < pekerti) {
    console.log("udin adalah yang terkecil", udin);
  } else {
    console.log("udin yang terkecil kedua", udin);
  }
}
if (pekerti > udin) {
  if (budi > pekerti) {
    console.log("pekerti yang tertinggi", pekerti);
  } else {
    console.log("pekerti yang tertinggi kedua", pekerti);
  }
} else {
  if (pekerti < budi) {
    console.log("pekerti adalah yang terkecil", pekerti);
  } else {
    console.log("pekerti yang terkecil kedua", pekerti);
  }
}
