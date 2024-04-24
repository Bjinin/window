// 아이콘 클릭 시 팝업 열기
function openPopup(content) {
    document.getElementById("popupTitle").innerText = content;
    document.getElementById("popupContent").innerText = "팝업 내용: " + content;
    document.getElementById("popupContainer").style.display = "block";
}

// 팝업 닫기
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}
