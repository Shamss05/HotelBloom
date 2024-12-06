document.addEventListener("DOMContentLoaded", function () {
    const savedHotels = JSON.parse(localStorage.getItem("likedHotels")) || [];
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const hotelCard = this.closest(".hotel-card");
            const hotelName = hotelCard.dataset.name;

            const hotelData = {
                html: hotelCard.outerHTML, // الكارت كـ HTML
                name: hotelName
            };

            const hotelIndex = savedHotels.findIndex(hotel => hotel.name === hotelName);

            if (hotelIndex === -1) {
                // إزالة الزر من الكارت قبل التخزين
                const clonedCard = hotelCard.cloneNode(true);
                clonedCard.querySelector(".like-btn").remove(); // هنا يتم إزالة الزر

                // تحديث بيانات الكارت
                hotelData.html = clonedCard.outerHTML;

                // إضافة الكارت إلى المفضلات
                savedHotels.push(hotelData);
                
            } else {
                // إزالة الكارت من المفضلات
                savedHotels.splice(hotelIndex, 1);
                
            }

            // تحديث localStorage
            localStorage.setItem("likedHotels", JSON.stringify(savedHotels));
        });
    });
});

// مسح بيانات localStorage
//localStorage.clear;
