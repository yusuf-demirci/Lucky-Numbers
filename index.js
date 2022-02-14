function randomNumber() {
    return Math.floor(Math.random() * 90 + 1);
}

function generateNumbers() {
    let numList = [];
    while (numList.length < 7) {
        let num = randomNumber();
        if (!numList.includes(num)) numList.push(num);
    }

    numList = numList.map(num => (num + "").padStart(2, "0"));
    let joker = numList.pop();
    numList.sort((a, b) => a - b);

    let superStar = randomNumber().toString().padStart(2, "0");

    return {
        numbers: numList,
        joker: joker,
        superStar: superStar
    };
}

$("#generate").click(function () {
    let count = $("#count").val();

    if (count < 0 || count > 8) {
        $("#count").val("");
        $("#count").focus();
        return;
    }

    $(".number-box").empty();
    $(".number-box").append("<h3>Numbers => Joker => SuperStar</h3>");
    
    for (let i = 0; i < +count; i++) {
        const luckyNumbers = generateNumbers();
        $(".number-box").append(
            `<p class="numbers">${luckyNumbers.numbers.join("-")} => ${luckyNumbers.joker} => ${luckyNumbers.superStar}</p>`
        );
    }
    $("#count").focus();
})

$(document).keydown((e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") $("#generate").click();
})

$("#count").focus();
