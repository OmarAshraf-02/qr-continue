const qrImage = document.getElementById("qrImage");
const generateButton = document.getElementById("generate");
const errorMessage = document.createElement('p');

errorMessage.style.color = '#eb6f92';
errorMessage.style.display = 'none';
errorMessage.style.fontSize = "12px";
errorMessage.style.textAlign = "center";
document.getElementById("mainBackground").prepend(errorMessage);

generateButton.addEventListener("click", () => {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        const url = tabs[0].url;

        if (!url.startsWith('http')) {
            errorMessage.textContent = 'Navigate to a tab with a valid web page';
            errorMessage.style.display = 'block';
            qrImage.src = '';
            return;
        }

        errorMessage.style.display = 'none';
        QRCode.toDataURL(url).then(dataUrl => {
            qrImage.src = dataUrl;
        });
    });
});
