document.addEventListener("DOMContentLoaded", function() {
    var fontDropdown = document.getElementById("fontDropdown");
    var textInput = document.getElementById("textInput");

    // Array of font names you want to include in the dropdown
    var fonts = [
        "Open Sans",
        "Playfair Display",
        "Oswald"
    ];

    // Populate the font dropdown
    fonts.forEach(function(font) {
        var option = document.createElement("option");
        option.text = font;
        fontDropdown.add(option);
    });

    // Event listener for font selection
    fontDropdown.addEventListener("change", function() {
        var selectedFont = fontDropdown.value;
        textInput.style.fontFamily = selectedFont;
    });
     colorDropdown.addEventListener("change", applyFont);

    // Event listener for text input
    textInput.addEventListener("input", function() {
        var inputText = textInput.value;
        textInput.innerText = inputText;
    });
});
// ---------------------for size------------------------
document.addEventListener("DOMContentLoaded", function() {
            var sizeDropdown = document.getElementById("sizeDropdown");
            var textInput = document.getElementById("textInput");

            var sizes = ["16", "18", "20", "22", "24", "30","32","34","36","38","40"];

            // Populate the size dropdown
            sizes.forEach(function(size) {
                var option = document.createElement("option");
                option.text = size;
                sizeDropdown.add(option);
            });

            // Event listener for size selection
            sizeDropdown.addEventListener("change", function() {
                var selectedSize = sizeDropdown.value;
                textInput.style.fontSize = selectedSize + "px";
            });

            // Event listener for text input
            textInput.addEventListener("input", function() {
                var inputText = textInput.value;
                textInput.innerText = inputText;
            });
        });
// ----------------------for colour-------------------------
  document.addEventListener("DOMContentLoaded", function() {
            var colorDropdown = document.getElementById("colorDropdown");
            var textInput = document.getElementById("textInput");

            var colours = ["blue", "pink", "green", "yellow", "orange", "black"];

            // Populate the color dropdown
            colours.forEach(function(colour) {
                var option = document.createElement("option");
                option.text = colour;
                // colorDropdown.add(option);
            });

            // Event listener for color selection
            colorDropdown.addEventListener("change", function() {
                var selectedColor = colorDropdown.value;
                textInput.style.color = selectedColor; // Set the text color
            });

            // Event listener for text input
            textInput.addEventListener("input", function() {
                var inputText = textInput.value;
                textInput.innerText = inputText;
            });
        });

// ----------------Movable Textarea----------------------------------------------
 var isDragging = true;
var offsetX, offsetY;

var container = document.getElementById("text-container");
var textarea = document.getElementById("textInput");

textarea.addEventListener("mousedown", function (e) {
  isDragging = true;
  offsetX = e.clientX - container.getBoundingClientRect().left;
  offsetY = e.clientY - container.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;

    container.style.position = "relative"; // Add this line
    container.style.left = x + "px";
    container.style.top = y + "px";
  }
});

document.addEventListener("mouseup", function () {
  isDragging = true;
});

  
