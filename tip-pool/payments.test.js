describe("Payments Tests", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });
  
    // submitPaymentInfo(evt) test
    it('should add a curPayment object to allPayments', function () {
        submitPaymentInfo();

        const payInfoList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(payInfoList.length).toEqual(4);
        expect(payInfoList[0].innerText).toEqual('$100');
        expect(payInfoList[1].innerText).toEqual('$20');
        expect(payInfoList[2].innerText).toEqual('20%');
    }); // done
  
    // createCurPayment() Undefined test
    it('should return undefined with negative or empty inputs', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
        billAmtInput.value = -100;
        tipAmtInput.value = -20;
        expect(createCurPayment()).toEqual(undefined);
    }); // done

    // createCurPayment() Positive test
    it('should return a "bill" object{billAmt, tipAmt, tipPercent} with positive billAmt but tip can be 0', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        expect(createCurPayment().billAmt).toEqual('100');
        expect(createCurPayment().tipAmt).toEqual('20');
        expect(createCurPayment().tipPercent).toEqual(20);
        submitPaymentInfo();
    }); // done
  
    // appendPaymentTable(curPayment) test
    it('should create table row element and pass to appendTd with input value', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);
        let curPayList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curPayList.length).toEqual(4);
        expect(curPayList[0].innerText).toEqual('$100');
        expect(curPayList[1].innerText).toEqual('$20');
        expect(curPayList[2].innerText).toEqual('20%');
        expect(curPayList[3].innerText).toEqual('X');
        
    }); // done

    // updateSummary() test
    it('should make tipPercentAvg = 0 if paymentTotal === 0 && numberOfPayments === 0', function () {
        updateSummary();
        expect(summaryTds[2].innerHTML).toEqual('0%');
    });   // done

    // updateSummary() test
    it('should create table row element and pass to appendTd with calculated sum of all payments', function () {
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$20');
        expect(summaryTds[2].innerHTML).toEqual('20%');
    });   // done
  
    afterEach(function() {
        // teardown logic
        serverId = 0;
        serverTbody.innerHTML = '';
        allServers = {};
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
  });
  