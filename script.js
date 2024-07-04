document.getElementById('saveImage').addEventListener('click', function() {
    const User = document.getElementById('User').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const savings = document.getElementById('savings').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const Earnedmoney = document.getElementById('Earnedmoney').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/ans/blob/main/am.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 100px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyNameDisplay">${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 120px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyNameEngDisplay">${document.getElementById('companyNameEng').innerText}</p>
                <p style="position: absolute; top: 140px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyAddressDisplay">${document.getElementById('companyAddress').innerText}</p>

                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 12685/2567</p>     
                
                <p style="position: absolute; top: 175px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 200px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง ยืนยันฐานข้อมูลธุรกรรม</p>     
                <p style="position: absolute; top: 225px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">ยูสเซอร์ ${User}</p>     
                
                <p style="position: absolute; top: 290px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เนื่องด้วยเมื่อวันที่ ${transactionDate} ระบบไม่สามารถดำเนินการสั่งจ่ายยอด วงเงินทั้งสิ้น ${savings} บาท
                 ไปยังหมายเลขธุรกรรมปลายทางได้</p>     

                <p style="position: absolute; top: 345px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เนื่องจากกรอกหมายเลขธุรกรรมผิดพลาด ยื่นคําร้องโดยเอกสารรูปธรรมและเอกสารอิเล็กทรอนิกส์ระบบ
                 ไม่รับรอง จึงจําเป็นที่จะต้องดําเนินการยืนยันบัญชีส่งฐานข้อมูลด้วยยอดวงเงินที่ระบบร้องเรียน ${amount} บาท
                 บุคคลที่สองไม่สามารถยืนยันแทนได้นั้นหมายความว่าทางบริษัทไม่สามารถ สํารองจ่ายในส่วนนี้ได้ ทั้งส่วนกลางสามารถ
                 ทําการแก้ไขข้อมูลบุคคลในระบบให้ได้ก็ ต่อเมื่อได้รับการยืนยันข้อมูลธุรกรรมภายใต้ ${accountNumber}
                 ยอดเงินที่สามารถทํารายการในระบบได้อยู่ที่ ${Earnedmoney} บาท</p>     

                <p style="position: absolute; top: 483px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผลเสียที่จะได้รับหากไม่มีการดําเนินการยืนยันตัวตนภายใต้ชื่อยอดวงเงินทั้งหมด</p>     
                <p style="position: absolute; top: 510px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. ไม่ได้รับวงเงินแต่ต้องชำระเงิน ${savings} บาท และเงินถูกตัดยอดเป็นศูนย์</p>     
                <p style="position: absolute; top: 537px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. หากไม่ยอมรับผลเสียถือว่าสมาชิกมีเจตนาฉ้อโกงบริษัท</p>     
                <p style="position: absolute; top: 565px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. ว่าด้วยกฎหมายมาตรา 10 ผู้ใดกระทําด้วยประการโดยมิชอบเพื่อให้การทางานของระบบ
คอมพิวเตอร์ของผู้อื่นถูกระงับ ชะลอ ขัดขวาง หรือรบกวนจนไม่สามารถทํางานปกติได้ ต้อง ระวางโทษจําคุกไม่เกิน 5 ปี 
หรือปรับไม่เกิน 100,000 บาท หรือทั้งจําทั้งปรับ</p>     

                <p style="position: absolute; top: 645px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">หมายเหตุ : โปรดยืนยันบัญชีส่งฐานข้อมูลตามยอดที่ระบบกําหนดภายใน 2 ชั่วโมง มิเช่นนั้นจะเสี่ยงต่อการระงับถาวร</p>     
                <p style="position: absolute; top: 730px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyName1Display">(${document.getElementById('companyName1').innerText})</p>
                <p style="position: absolute; top: 835px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 40%;" id="companyNameDisplay">ผู้จัดการ ${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 860px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ออก ณ วันที่ ${transactionDate}</p>   
              </div>
        </body>
        </html>
    `);
});

document.getElementById('editCompanyInfo').addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'block';
});

document.getElementById('saveCompanyInfo').addEventListener('click', function() {
    const newCompanyName = document.getElementById('newCompanyName').value;
    const newCompanyNameEng = document.getElementById('newCompanyNameEng').value;
    const newCompanyAddress = document.getElementById('newCompanyAddress').value;
    const newCompanyName1 = document.getElementById('newCompanyName1').value;

    if (newCompanyName) {
        document.getElementById('companyName').innerText = newCompanyName;
    }
    if (newCompanyNameEng) {
        document.getElementById('companyNameEng').innerText = newCompanyNameEng;
    }
    if (newCompanyAddress) {
        document.getElementById('companyAddress').innerText = newCompanyAddress;
    }
    if (newCompanyName1) {
        document.getElementById('companyName1').innerText = newCompanyName1;
    }
    document.getElementById('editCompanyModal').style.display = 'none';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'none';
});
