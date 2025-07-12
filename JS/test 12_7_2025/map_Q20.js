const invoice = [301, 302];
const pdflink = invoice.map((i)=> `/invoices/${(i)}.pdf`);
console.log(pdflink);