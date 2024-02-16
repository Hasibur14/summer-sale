let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', function () {

        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(" ")[1]);

        const titleContainer = document.getElementById('title-container');

        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;
        titleContainer.appendChild(p)
        titleCount = titleCount + 1;

        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    });
}


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {


    const discountElement = document.getElementById('input-field').value;
    const couponCode = discountElement.split(' ').join('').toUpperCase();
    console.log(couponCode)

    if (totalPrice >= 200) {
        if (couponCode === 'SELL200') {
            //discount price calculation
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            //rest total calculation
            const restTotal = document.getElementById('total');
            const restTotalPrice = totalPrice - discountAmount;
            restTotal.innerText = restTotalPrice.toFixed(2);

            document.getElementById('input-field').value = '';

        }
        else {
            alert('Invalid Coupon cCode');
            document.getElementById('input-field').value = '';
        }
    }
    else {
        alert("please at least $200 buy");
        document.getElementById('input-field').value = '';
    }
});