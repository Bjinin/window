function openPopup(content) {
    document.getElementById("popupTitle").innerText = content;
    document.getElementById("popupContent").innerText = "팝업 내용: " + content;
    document.getElementById("popupContainer").style.display = "block";
    window.open('popup.html', 'Popup', 'width=600,height=400');
}

// 팝업 닫기
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}
