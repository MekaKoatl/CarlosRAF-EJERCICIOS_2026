
// /*---------------------------- Los divs e intento de color */
// /* OG: https://codepen.io/bansal-io/pen/mdereZN */
var patterns = [
        "pattern-checks-sm",
        "pattern-checks-md",
        "pattern-checks-lg",
        "pattern-checks-xl",
        "pattern-grid-sm",
        "pattern-grid-md",
        "pattern-grid-lg",
        "pattern-grid-xl",
        "pattern-dots-sm",
        "pattern-dots-md",
        "pattern-dots-lg",
        "pattern-dots-xl",
        "pattern-cross-dots-sm",
        "pattern-cross-dots-md",
        "pattern-cross-dots-lg",
        "pattern-cross-dots-xl",
        "pattern-diagonal-lines-sm",
        "pattern-diagonal-lines-md",
        "pattern-diagonal-lines-lg",
        "pattern-diagonal-lines-xl",
        "pattern-horizontal-lines-sm",
        "pattern-horizontal-lines-md",
        "pattern-horizontal-lines-lg",
        "pattern-horizontal-lines-xl",
        "pattern-vertical-lines-sm",
        "pattern-vertical-lines-md",
        "pattern-vertical-lines-lg",
        "pattern-vertical-lines-xl",
        "pattern-diagonal-stripes-sm",
        "pattern-diagonal-stripes-md",
        "pattern-diagonal-stripes-lg",
        "pattern-diagonal-stripes-xl",
        "pattern-horizontal-stripes-sm",
        "pattern-horizontal-stripes-md",
        "pattern-horizontal-stripes-lg",
        "pattern-horizontal-stripes-xl",
        "pattern-vertical-stripes-sm",
        "pattern-vertical-stripes-md",
        "pattern-vertical-stripes-lg",
        "pattern-vertical-stripes-xl",
        "pattern-triangles-sm",
        "pattern-triangles-md",
        "pattern-triangles-lg",
        "pattern-triangles-xl",
        "pattern-zigzag-sm",
        "pattern-zigzag-md",
        "pattern-zigzag-lg",
        "pattern-zigzag-xl",
      ];

      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      function changePattern() {
        var target = document.getElementById("random-pattern");
        var color = getRandomColor();
        var bg_color = getRandomColor();
        var pattern = patterns[Math.floor(Math.random() * patterns.length)];
        var code =
          '<div class="' +
          pattern +
          '" style="color:' +
          color +
          "; background-color:" +
          bg_color +
          '"> </div>';

        target.style.color = color;
        target.style.backgroundColor = bg_color;
        target.className = pattern;
        document.getElementById("code").innerText = code;
      }

      changePattern();

     document.getElementById("change").addEventListener("click", function () {
  changePattern();
  return false;
});

// /*---------------------------- Intento de numeros */
// /* OG: https://css-tricks.com/generate-a-random-number/ */
function IsNumeric(n) {
  return !isNaN(n);
}

$(function () {
  $("#getit").click(function () {
    var numLow = $("#lownumber").val();
    var numHigh = $("#highnumber").val();

    var adjustedHigh = parseFloat(numHigh) - parseFloat(numLow) + 1;

    var numRand = Math.floor(Math.random() * adjustedHigh) + parseFloat(numLow);

    if (
      IsNumeric(numLow) &&
      IsNumeric(numHigh) &&
      parseFloat(numLow) <= parseFloat(numHigh) &&
      numLow != "" &&
      numHigh != ""
    ) {
      $("#randomnumber").text(numRand);
    } else {
      $("#randomnumber").text("Careful now...");
    }

    return false;
  });

  $("input[type=text]").each(function () {
    $(this).data("first-click", true);
  });

  $("input[type=text]").focus(function () {
    if ($(this).data("first-click")) {
      $(this).val("");
      $(this).data("first-click", false);
      $(this).css("color", "black");
    }
  });
});