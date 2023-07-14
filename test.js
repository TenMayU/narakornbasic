function test() {
    let today = new Date().getDate();
    let today2 = new Date().getMonth()+1;
    let today3 = new Date().getFullYear();
    
    let date = `${today}${today2}${today3}`
    let day = 2292022;
    let total = day -date;
    alert( total )
}