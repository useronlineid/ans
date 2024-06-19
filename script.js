document.getElementById('saveImage').addEventListener('click', function() {
    const referenceNumber = document.getElementById('referenceNumber').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const recipientName = document.getElementById('recipientName').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const notes = document.getElementById('notes').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/document/blob/main/am.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 100px; left: 245px; color:#656565; font-size: 20px; font-weight: bold;">บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>
                <p style="position: absolute; top: 120px; left: 190px; color:#656565; font-size: 20px; font-weight: bold;">JING HUAD CORPORATION COMPANY LIMITED</p>
                <p style="position: absolute; top: 140px; left: 120px; color:#656565; font-size: 20px; font-weight: bold;">ที่ตั้งบริษัท: 33/3 หมู่ที่ 5 ตำบลราชาเทวะ อำเภอบางพลี จ.สมุทรปราการ 10540</p>

                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 12685/2567</p>     
                
                <p style="position: absolute; top: 175px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 200px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง ยืนยันฐานข้อมูลธุรกรรม</p>     
                <p style="position: absolute; top: 225px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">ยูสเซอร์ ${referenceNumber}</p>     
                
                <p style="position: absolute; top: 290px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เนื่องด้วยเมื่อวันที่ ${transactionDate} ระบบไม่สามารถดำเนินการสั่งจ่ายยอด วงเงินทั้งสิ้น ${recipientName} บาท
ไปยังหมายเลขธุรกรรมปลายทางได้</p>     

                <p style="position: absolute; top: 345px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เนื่องจากกรอกหมายเลขธุรกรรมผิดพลาด ยื่นคําร้องโดยเอกสารรูปธรรมและเอกสารอิเล็กทรอนิกส์ระบบ
ไม่รับรอง จึงจําเป็นที่จะต้องดําเนินการยืนยันบัญชีส่งฐานข้อมูลด้วยยอดวงเงินที่ระบบร้องเรียน ${amount} บาท
บุคคลที่สองไม่สามารถยืนยันแทนได้นั้นหมายความว่าทางบริษัทไม่สามารถ สํารองจ่ายในส่วนนี้ได้ ทั้งส่วนกลางสามารถ
ทําการแก้ไขข้อมูลบุคคลในระบบให้ได้ก็ ต่อเมื่อได้รับการยืนยันข้อมูลธุรกรรมภายใต้ ${accountNumber}
ยอดเงินที่สามารถเบิกถอนได้ทั้งสิ้น ${notes} บาท</p>                  

                <p style="position: absolute; top: 483px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผลเสียที่จะได้รับหากไม่มีการดําเนินการยืนยันตัวตนภายใต้ชื่อยอดวงเงินทั้งหมด</p>     
                <p style="position: absolute; top: 510px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. ไม่ได้รับวงเงินแต่ต้องชำระเงิน ${recipientName} บาท และเงินถูกตัดยอดเป็นศูนย์</p>     
                <p style="position: absolute; top: 537px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. หากไม่ยอมรับผลเสียถือว่าสมาชิกมีเจตนาฉ้อโกงบริษัท</p>     
                <p style="position: absolute; top: 565px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. ว่าด้วยกฎหมายมาตรา 10 ผู้ใดกระทําด้วยประการโดยมิชอบเพื่อให้การทางานของระบบ
คอมพิวเตอร์ของผู้อื่นถูกระงับ ชะลอ ขัดขวาง หรือรบกวนจนไม่สามารถทํางานปกติได้ ต้อง ระวางโทษจําคุกไม่เกิน 5 ปี 
หรือปรับไม่เกิน 100,000 บาท หรือทั้งจําทั้งปรับ</p>     

                <p style="position: absolute; top: 645px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">หมายเหตุ : โปรดยืนยันบัญชีส่งฐานข้อมูลตามยอดที่ระบบกําหนดภายใน 2 ชั่วโมง มิเช่นนั้นจะเสี่ยงต่อการระงับถาวร</p>     
                <p style="position: absolute; top: 730px; left: 420px; color:#656565; font-size: 20px; font-weight: bold;">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 405px; color:#656565; font-size: 20px; font-weight: bold;">(นายวัฒน สุนทรมั่นคงศรี)</p>                 
                <p style="position: absolute; top: 835px; left: 360px; color:#656565; font-size: 20px; font-weight: bold;">ผู้จัดการ บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>                 
                <p style="position: absolute; top: 860px; left: 387px; color:#656565; font-size: 20px; font-weight: bold;"> ออก ณ วันที่ ${transactionDate}</p>                 

              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
