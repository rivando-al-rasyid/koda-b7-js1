let score = 85;

if (score <= 100 && score >= 90) {
  console.log("Grade A");
}else if (score < 90 && score >= 80) {
  console.log("Grade B");
}else if (score < 80 && score >= 70) {
  console.log("Grade C");
}else if (score < 70 && score >= 60) {
  console.log("Grade D");
}else if (score < 60 && score >= 0) {
  console.log("Grade F");
}

switch (true) {
  case score >= 90 && score <= 100:
    console.log("Grade A");
    break;
  case score >= 80 && score < 90:
    console.log("Grade B");
    break;
  case score >= 70 && score < 80:
    console.log("Grade C");
    break;
  case score >= 60 && score < 70:
    console.log("Grade D");
    break;
  default:
    console.log("Grade F");
}

const gender = "L"

switch (gender) {
  case "L":
    console.log("Laki-laki");
    break;
  case "P":
    console.log("Perempuan");
    break;
  default:
    console.log("Jenis kelamin tidak diketahui");
}