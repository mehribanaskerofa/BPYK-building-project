const _initialRoomSelectField = document.getElementById("room");
const _initialAreaSelectField = document.getElementById("area");
const _initialMonthSelectField = document.getElementById("month");
const _initialPercentSelectField = document.getElementById("percent");
const _initialpaymentByMonthSelectField = document.getElementById("paymentByMonth");

const _initialApartmentsPrice = [
    {
        id: 1,
        name: "1 Otaqlı",
        areas: [
            {
                id: 1,
                area: 51.27,
                room: 1,
                areaName: "51.27 m&sup2;",
            },
            {
                id: 2,
                area: 58.46,
                room: 1,
                areaName: "58.46 m&sup2;",
            },
            {
                id: 3,
                area: 59.94,
                room: 1,
                areaName: "59.94 m&sup2;",
            },
            {
                id: 4,
                area: 60.49,
                room: 1,
                areaName: "60.49 m&sup2;",
            },
            {
                id: 5,
                area: 64.78,
                room: 1,
                areaName: "64.78 m&sup2;",
            },
        ],
        months: [
            {
                id: 1,
                month: 12,
                monthName: "12 Ay",
            },
            {
                id: 2,
                month: 18,
                monthName: "18 Ay",
            },
            {
                id: 3,
                month: 24,
                monthName: "24 Ay",
            },
        ],
        percents: [
            {
                id: 1,
                percent: 30,
                percentName: "30%",
            },
            {
                id: 2,
                percent: 40,
                percentName: "40%",
            },
            {
                id: 3,
                percent: 50,
                percentName: "50%",
            },
            {
                id: 4,
                percent: 75,
                percentName: "75%",
            },
            {
                id: 5,
                percent: 90,
                percentName: "90%",
            },
            {
                id: 6,
                percent: 100,
                percentName: "100%",
            },
        ],
        prices: [
            {
                percent: 1,
                months: [
                    {
                        month: 1,
                        priceName: "1800 Azn",
                        price: 1800,
                    },
                    {
                        month: 2,
                        priceName: "1825 Azn",
                        price: 1825,
                    },
                    {
                        month: 3,
                        priceName: "1850 Azn",
                        price: 1850,
                    },
                ],
            },
            {
                percent: 2,
                months: [
                    {
                        month: 1,
                        priceName: "1790 Azn",
                        price: 1790,
                    },
                    {
                        month: 2,
                        priceName: "1815 Azn",
                        price: 1815,
                    },
                    {
                        month: 3,
                        priceName: "1840 Azn",
                        price: 1840,
                    },
                ],
            },
            {
                percent: 3,
                months: [
                    {
                        month: 1,
                        priceName: "1780 Azn",
                        price: 1780,
                    },
                    {
                        month: 2,
                        priceName: "1805 Azn",
                        price: 1805,
                    },
                    {
                        month: 3,
                        priceName: "1830 Azn",
                        price: 1830,
                    },
                ],
            },
            {
                percent: 4,
                months: [
                    {
                        month: 1,
                        priceName: "1770 Azn",
                        price: 1770,
                    },
                    {
                        month: 2,
                        priceName: "1795 Azn",
                        price: 1795,
                    },
                    {
                        month: 3,
                        priceName: "1820 Azn",
                        price: 1820,
                    },
                ],
            },
            {
                percent: 5,
                months: [
                    {
                        month: 1,
                        priceName: "1760 Azn",
                        price: 1760,
                    },
                    {
                        month: 2,
                        priceName: "1785 Azn",
                        price: 1785,
                    },
                    {
                        month: 3,
                        priceName: "1810 Azn",
                        price: 1810,
                    },
                ],
            },
            {
                percent: 6,
                months: [
                    {
                        month: 1,
                        priceName: "1750 Azn",
                        price: 1750,
                    },
                    {
                        month: 2,
                        priceName: "1750 Azn",
                        price: 1750,
                    },
                    {
                        month: 3,
                        priceName: "1750 Azn",
                        price: 1750,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "2 Otaqlı",
        areas: [
            {
                id: 1,
                area: 79.08,
                room: 2,
                areaName: "79.08 m&sup2;",
            },
            {
                id: 2,
                area: 79.37,
                room: 2,
                areaName: "79.37 m&sup2;",
            },
            {
                id: 3,
                area: 79.56,
                room: 2,
                areaName: "79.56 m&sup2;",
            },
            {
                id: 4,
                area: 85.65,
                room: 2,
                areaName: "85.65 m&sup2;",
            },
        ],
        months: [
            {
                id: 1,
                month: 12,
                monthName: "12 Ay",
            },
            {
                id: 2,
                month: 18,
                monthName: "18 Ay",
            },
            {
                id: 3,
                month: 24,
                monthName: "24 Ay",
            },
            {
                id: 4,
                month: 30,
                monthName: "30 Ay",
            },
            {
                id: 5,
                month: 36,
                monthName: "36 Ay",
            },
        ],
        percents: [
            {
                id: 1,
                percent: 30,
                percentName: "30%",
            },
            {
                id: 2,
                percent: 40,
                percentName: "40%",
            },
            {
                id: 3,
                percent: 50,
                percentName: "50%",
            },
            {
                id: 4,
                percent: 75,
                percentName: "75%",
            },
            {
                id: 5,
                percent: 90,
                percentName: "90%",
            },
            {
                id: 6,
                percent: 100,
                percentName: "100%",
            },
        ],
        prices: [
            {
                percent: 1,
                months: [
                    {
                        month: 1,
                        priceName: "1700 Azn",
                        price: 1700,
                    },
                    {
                        month: 2,
                        priceName: "1725 Azn",
                        price: 1725,
                    },
                    {
                        month: 3,
                        priceName: "1750 Azn",
                        price: 1750,
                    },
                    {
                        month: 4,
                        priceName: "1775 Azn",
                        price: 1775,
                    },
                    {
                        month: 5,
                        priceName: "1800 Azn",
                        price: 1800,
                    },
                ],
            },
            {
                percent: 2,
                months: [
                    {
                        month: 1,
                        priceName: "1690 Azn",
                        price: 1690,
                    },
                    {
                        month: 2,
                        priceName: "1715 Azn",
                        price: 1715,
                    },
                    {
                        month: 3,
                        priceName: "1740 Azn",
                        price: 1740,
                    },
                    {
                        month: 4,
                        priceName: "1765 Azn",
                        price: 1765,
                    },
                    {
                        month: 5,
                        priceName: "1790 Azn",
                        price: 1790,
                    },
                ],
            },
            {
                percent: 3,
                months: [
                    {
                        month: 1,
                        priceName: "1680 Azn",
                        price: 1680,
                    },
                    {
                        month: 2,
                        priceName: "1705 Azn",
                        price: 1705,
                    },
                    {
                        month: 3,
                        priceName: "1730 Azn",
                        price: 1730,
                    },
                    {
                        month: 4,
                        priceName: "1755 Azn",
                        price: 1755,
                    },
                    {
                        month: 5,
                        priceName: "1780 Azn",
                        price: 1780,
                    },
                ],
            },
            {
                percent: 4,
                months: [
                    {
                        month: 1,
                        priceName: "1670 Azn",
                        price: 1670,
                    },
                    {
                        month: 2,
                        priceName: "1695 Azn",
                        price: 1695,
                    },
                    {
                        month: 3,
                        priceName: "1720 Azn",
                        price: 1720,
                    },
                    {
                        month: 4,
                        priceName: "1745 Azn",
                        price: 1745,
                    },
                    {
                        month: 5,
                        priceName: "1770 Azn",
                        price: 1770,
                    },
                ],
            },
            {
                percent: 5,
                months: [
                    {
                        month: 1,
                        priceName: "1660 Azn",
                        price: 1660,
                    },
                    {
                        month: 2,
                        priceName: "1685 Azn",
                        price: 1685,
                    },
                    {
                        month: 3,
                        priceName: "1710 Azn",
                        price: 1710,
                    },
                    {
                        month: 4,
                        priceName: "1735 Azn",
                        price: 1735,
                    },
                    {
                        month: 5,
                        priceName: "1760 Azn",
                        price: 1760,
                    },
                ],
            },
            {
                percent: 6,
                months: [
                    {
                        month: 1,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 2,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 3,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 4,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 5,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                ],
            }
        ],
    },
    {
        id: 3,
        name: "3 Otaqlı",
        areas: [
            {
                id: 1,
                area: 107.34,
                room: 3,
                areaName: "107.34 m&sup2;",
            },
            {
                id: 2,
                area: 110.94,
                room: 3,
                areaName: "110.94 m&sup2;",
            },
            {
                id: 3,
                area: 136.05,
                room: 3,
                areaName: "136.05 m&sup2;",
            },
        ],
        months: [
            {
                id: 1,
                month: 12,
                monthName: "12 Ay",
            },
            {
                id: 2,
                month: 18,
                monthName: "18 Ay",
            },
            {
                id: 3,
                month: 24,
                monthName: "24 Ay",
            },
            {
                id: 4,
                month: 30,
                monthName: "30 Ay",
            },
            {
                id: 5,
                month: 36,
                monthName: "36 Ay",
            },
        ],
        percents: [
            {
                id: 1,
                percent: 30,
                percentName: "30%",
            },
            {
                id: 2,
                percent: 40,
                percentName: "40%",
            },
            {
                id: 3,
                percent: 50,
                percentName: "50%",
            },
            {
                id: 4,
                percent: 75,
                percentName: "75%",
            },
            {
                id: 5,
                percent: 90,
                percentName: "90%",
            },
            {
                id: 6,
                percent: 100,
                percentName: "100%",
            },
        ],
        prices: [
            {
                percent: 1,
                months: [
                    {
                        month: 1,
                        priceName: "1700 Azn",
                        price: 1700,
                    },
                    {
                        month: 2,
                        priceName: "1725 Azn",
                        price: 1725,
                    },
                    {
                        month: 3,
                        priceName: "1750 Azn",
                        price: 1750,
                    },
                    {
                        month: 4,
                        priceName: "1775 Azn",
                        price: 1775,
                    },
                    {
                        month: 5,
                        priceName: "1800 Azn",
                        price: 1800,
                    },
                ],
            },
            {
                percent: 2,
                months: [
                    {
                        month: 1,
                        priceName: "1690 Azn",
                        price: 1690,
                    },
                    {
                        month: 2,
                        priceName: "1715 Azn",
                        price: 1715,
                    },
                    {
                        month: 3,
                        priceName: "1740 Azn",
                        price: 1740,
                    },
                    {
                        month: 4,
                        priceName: "1765 Azn",
                        price: 1765,
                    },
                    {
                        month: 5,
                        priceName: "1790 Azn",
                        price: 1790,
                    },
                ],
            },
            {
                percent: 3,
                months: [
                    {
                        month: 1,
                        priceName: "1680 Azn",
                        price: 1680,
                    },
                    {
                        month: 2,
                        priceName: "1705 Azn",
                        price: 1705,
                    },
                    {
                        month: 3,
                        priceName: "1730 Azn",
                        price: 1730,
                    },
                    {
                        month: 4,
                        priceName: "1755 Azn",
                        price: 1755,
                    },
                    {
                        month: 5,
                        priceName: "1780 Azn",
                        price: 1780,
                    },
                ],
            },
            {
                percent: 4,
                months: [
                    {
                        month: 1,
                        priceName: "1670 Azn",
                        price: 1670,
                    },
                    {
                        month: 2,
                        priceName: "1695 Azn",
                        price: 1695,
                    },
                    {
                        month: 3,
                        priceName: "1720 Azn",
                        price: 1720,
                    },
                    {
                        month: 4,
                        priceName: "1745 Azn",
                        price: 1745,
                    },
                    {
                        month: 5,
                        priceName: "1770 Azn",
                        price: 1770,
                    },
                ],
            },
            {
                percent: 5,
                months: [
                    {
                        month: 1,
                        priceName: "1660 Azn",
                        price: 1660,
                    },
                    {
                        month: 2,
                        priceName: "1685 Azn",
                        price: 1685,
                    },
                    {
                        month: 3,
                        priceName: "1710 Azn",
                        price: 1710,
                    },
                    {
                        month: 4,
                        priceName: "1735 Azn",
                        price: 1735,
                    },
                    {
                        month: 5,
                        priceName: "1760 Azn",
                        price: 1760,
                    },
                ],
            },
            {
                percent: 6,
                months: [
                    {
                        month: 1,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 2,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 3,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 4,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                    {
                        month: 5,
                        priceName: "1650 Azn",
                        price: 1650,
                    },
                ],
            }
        ],
    },
];
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function initialRoom() {
    let innerRoomOption = ``;
    _initialApartmentsPrice.forEach((room) =>(innerRoomOption += `<option  value="${room.id}"  ${room.id == 1 ? "selected" : null}>${room.name}</option>`));
    _initialRoomSelectField.innerHTML = innerRoomOption;
}
function initialArea() {
    let innerAraeOption = ``;
    _initialApartmentsPrice[0].areas.forEach(
        (room) =>
            (innerAraeOption += `<option data-area="${room.area}"  ${
                room.id == 1 ? "selected" : "null"
            } value="${room.id}">${room.areaName}</option>`)
    );
    _initialAreaSelectField.innerHTML = innerAraeOption;
}
function initialMonth() {
    let monthAreaOption = ``;
    _initialApartmentsPrice[0].months.forEach( (month) =>(monthAreaOption += `<option data-area="${month.month}"  ${ month.id == 1 ? `selected` : null} value="${month.id}">${month.monthName}</option>`)
    );
    _initialMonthSelectField.innerHTML = monthAreaOption;
}
function initialPercent(){
    let percentAreaOption = ``;
    _initialApartmentsPrice[0].percents.forEach( (percent) =>(percentAreaOption += `<option data-area="${percent.percent}"  ${percent.id == 1 ? `selected` : null} value="${percent.id}">${percent.percentName}</option>`));
    _initialPercentSelectField.innerHTML = percentAreaOption;
}
function initialPrice(){
    let homePrice=  document.getElementById("homePrice");
    homePrice.innerText = _initialApartmentsPrice[0].areas[0].price;
}
function initialPayment(){
    let initialPayment = document.getElementById("initialPaymet");
    initialPayment.innerText = (_initialApartmentsPrice[0].areas[0].price *_initialApartmentsPrice[0].percents[0].percent) /100;
}
function initialPeriod(){
    let initalPeriod = document.getElementById("monthPeriod");
    initalPeriod.innerText =_initialApartmentsPrice[0].months[0].monthName;
}
function initialpaymentByMonth(){
    let initialpaymentByMonth = document.getElementById("paymentByMonth");
    initialpaymentByMonth.innerHTML = 0
}
function initialHomePrice(){
    let initialHomePrice = document.getElementById("homePrice");
    initialHomePrice.innerHTML = (_initialApartmentsPrice[0].months[0].month * _initialApartmentsPrice[0].prices[0].months[0].price) + (_initialApartmentsPrice[0].areas[0].price *_initialApartmentsPrice[0].percents[0].percent) /100
}
function initialCalculate(){
    initialRoom()
    initialArea()
    initialMonth()
    initialPercent()
    initialPrice()
    initialPayment()
    initialPeriod()
    initialpaymentByMonth()
    initialHomePrice()

    
    
}
function calculate(){
    $_room = $("#room").val();
    $_area = $("#area").val();
    $_percent = $("#percent").val();
    $_month = $("#month").val();
    let selectedRoom = _initialApartmentsPrice.filter((room) => room.id === parseInt($_room))[0];
    let selectArea = selectedRoom.areas.filter((area) => area.id === parseInt($_area))[0];
    let selectedMonth = selectedRoom.months.filter((month) => month.id === parseInt($_month))[0];
    let selectedPercent = selectedRoom.percents.filter((percent) => percent.id === parseInt($_percent))[0].percent;
    document.getElementById("monthPeriod").innerHTML = selectedMonth.monthName;
    _initialApartmentsPrice.filter(function (room) {
        if (room.id === parseInt($_room)) {
            room.prices.filter(function (price) {
                if (price.percent === parseInt($_percent)) {
                    price.months.filter(function (month) {
                        if (month.month === parseInt($_month)) {
                            let homePrice = document.getElementById("homePrice");
                            let paymentByMonth =document.getElementById("paymentByMonth");
                            let initialPayment =document.getElementById("initialPaymet");
                            if (selectedPercent === 100) {
                                homePrice.innerHTML = formatNumber((month.price * selectArea.area).toFixed(2))
                                initialPayment.innerHTML = 0 ;
                                paymentByMonth.innerHTML =0
                            } else {
                                let $_homeFixPrice = (month.price * selectArea.area).toFixed(2);
                                let $_initialPrice =  (($_homeFixPrice*selectedPercent)/100).toFixed(2);
                                homePrice.innerHTML = (month.price * selectArea.area).toFixed(2)
                                initialPayment.innerHTML =formatNumber($_initialPrice) ;
                                paymentByMonth.innerHTML = 0
                            }
                        }
                    });
                }
            });
        }
    });
}
initialCalculate()
calculate()