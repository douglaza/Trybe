let chess = "knight";
chess = chess.toUpperCase();
switch (chess){
    case "PAWN":
        console.log("foward vertically one square");
        break;
    case "KNIGHT":
        console.log("L shape two squares");
        break;
    case "BISHOP":
        console.log("diagonally");
        break;
    case "ROOK":
        console.log("horizontally or vertically");
        break;
    case "QUEEN":
        console.log("diagonally, horizontally or vertically");
        break;
    case "KING":
        console.log("any direction for one square");
        break;
    default:
        console.log("It's not a chess piece.\nPlease try again...");
}