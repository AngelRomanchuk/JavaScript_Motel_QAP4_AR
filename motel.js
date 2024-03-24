// Cusromer information 
const CustomerInfo = {
    CustName: `Ariel Johnson`,
    CustDateBirth: {
        Year: 2004,
        Month: `February `,
        Day: 18
    },
    CustGender: `female`,
    CustRoomPref: [`two bads`, `balcony with a view on the ocean`, `breakfest in room at 7 a.m.`],
    CustPayMethod: `in person with a credit card`,
    CustMailAdd: {
        Street: `241 Oliver's Pond Rd., `,
        City: `St. Johns, `,
        Province: `NL, `,
        Postal: `A1M3M9.`,
        Country: `Canada, `
    },
    CustPhonNum: `(709)645-1234`,
    CustDate: {
        CheckIn: {
            Year: 2024,
            Month: `June `,
            Day: 13
        },
        CheckOut: {
            Year: 2024,
            Month: `June `,
            Day: 26
        }
    },
    getAge: function(){
        const Today = new Date();
        return Today.getFullYear() - this.CustDateBirth.Year;
    },
    getDays: function(){
        return Days = this.CustDate.CheckOut.Day - this.CustDate.CheckIn.Day;
    }
}

// Conecting some information
BirthDate = CustomerInfo.CustDateBirth.Month + CustomerInfo.CustDateBirth.Day + `, ` + CustomerInfo.CustDateBirth.Year;
Age = CustomerInfo.getAge()
CheckInDate = CustomerInfo.CustDate.CheckIn.Month + CustomerInfo.CustDate.CheckIn.Day + `, ` + CustomerInfo.CustDate.CheckIn.Year
CheckOutDate = CustomerInfo.CustDate.CheckOut.Month + CustomerInfo.CustDate.CheckOut.Day + `, ` + CustomerInfo.CustDate.CheckOut.Year
Days = CustomerInfo.getDays()
MailAdd = CustomerInfo.CustMailAdd.Street + CustomerInfo.CustMailAdd.City + CustomerInfo.CustMailAdd.Province + CustomerInfo.CustMailAdd.Country + CustomerInfo.CustMailAdd.Postal

// html paragraph
html = `My name is ${CustomerInfo.CustName} and I am a ${CustomerInfo.CustGender}. \
I was born in ${BirthDate}, so I am ${Age}. \
I would like to get a room with ${CustomerInfo.CustRoomPref[0]}. Also it would be nice \
to have a ${CustomerInfo.CustRoomPref[1]}. I will be staying from ${CheckInDate} to \
${CheckOutDate}. In these ${Days} days I would like to have ${CustomerInfo.CustRoomPref[2]}, \
please. I will be paying ${CustomerInfo.CustPayMethod}. My phone number is \
${CustomerInfo.CustPhonNum} and mailing address is ${MailAdd}`;

console.log(html);
document.body.innerHTML = html;