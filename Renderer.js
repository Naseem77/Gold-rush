const source = $("#matrix-template").html();
const template = Handlebars.compile(source);

class Renderer {
    constructor() {}
    render(board) {
        $(".matrix").empty();
        let newHTML;
        for (let i = 0; i < board.getCols(); i++) {
            newHTML = template({ matrix: board.getMatrix()[i] });
            $(".matrix").append(newHTML);
        }
       
        $("#player1").text("Player 1 Score - " + board.player1());
        $("#player2").text("Player 2 Score - " + board.player2());
    }
}
