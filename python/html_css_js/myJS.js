
// 모달 창 열기
const modal = document.getElementById('myModal');
const img = document.querySelectorAll('.can');
const closeBtn = document.getElementsByClassName('close')[0];

// 모달 내용에 대한 요소 선택
const modalImgContainer = modal.querySelector('.modal-img') // 클릭한 이미지 주소 
const modalTitle = modal.querySelector('h1');  // 모달 창의 제목
const modalDescription = modal.querySelector('p');  // 모달 창의 내용

img.forEach(trigger => {
    trigger.addEventListener('click', () => {

        // 클릭한 이미지에서 정보 추출
        const imgSrc = trigger.getAttribute('src'); // 클릭한 이미지 주소
        const title = trigger.closest('.flavor').querySelector('h3').innerText; // 클릭한 이미지 제목
        const url = trigger.getAttribute('url');
        const description = trigger.getAttribute('description'); //클릭한 이미지 설명
        const tdElement = document.getElementById('url-td');

        
        // 모달창에 할당
        modalImgContainer.innerHTML = `<img src="${imgSrc}" style="width: 30%; margin: 20px;"> <img src="${imgSrc}" style="width: 30%; margin: 20px;">`; // 클릭한 이미지를 모달에 삽입
        modalTitle.textContent = title
        modalDescription.textContent = description;
        tdElement.innerHTML = `<a href="${url}" target="_blank" class="no-decoration">${tdElement.textContent}</a>`;
        // modalImgContainer.innerHTML = `<img src="${imgSrc}">`;
        //  style="width: 30%; margin: 5% auto;"
        modal.style.display = 'block'; // 모달 창 열기
    });
});

// 모달 창 닫기
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// 모달 창 바깥을 클릭하면 닫기
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}