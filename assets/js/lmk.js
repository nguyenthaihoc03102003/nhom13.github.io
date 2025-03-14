// Bạn có thể thêm JavaScript để xử lý các tương tác trên trang web
// Ví dụ: cuộn mượt đến các phần khác nhau của trang
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});