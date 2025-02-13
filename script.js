let light_count = 1;
const enabledLightButtonText = "Light the lamp";
const disabledLightButtonText = "All the lamps are lit"

const gifImage = document.getElementById("lampImage");
const lightLampButton = document.getElementById("lightLampButton");
const resetLampButton = document.getElementById("resetLampButton");

resetLampButton.addEventListener("click", function () {  // ✅ Fixed missing comma
    gifImage.src = "assets/0_light.gif";
    light_count = 1;
    lightLampButton.innerText = enabledLightButtonText;
    lightLampButton.disabled = false;
});

lightLampButton.addEventListener("click", function () {

    switch (light_count) {
        case 1:
            gifImage.src = "assets/1_light.gif";
            break;
        case 2:
            gifImage.src = "assets/2_light.gif";
            break;
        case 3:
            gifImage.src = "assets/3_light.gif";
            break;
        case 4:
            gifImage.src = "assets/4_light.gif";
            break;
        case 5:
            gifImage.src = "assets/5_light.gif";
            break;
        case 6:
            gifImage.src = "assets/6_light.gif";
            break;
        case 7:
            gifImage.src = "assets/7_light.gif";
            break;
        case 8:
            gifImage.src = "assets/8_light.gif";
            break;
        case 9:
            gifImage.src = "assets/9_light.gif";
            lightLampButton.innerText = disabledLightButtonText;
            lightLampButton.disabled = true;
            break;
    }

    light_count++;
});
