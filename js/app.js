let cookie_button = document.getElementById(`cookie_button`);
Cookies.set(`click_count`, 0);

function cookie_add(details) {
    let current_clicks = Cookies.get(`click_count`);
    let cookie_clicked = current_clicks += 1;
    Cookies.set(`click_count`, cookie_clicked);
}


cookie_button.addEventListener(`click`, cookie_add);
