describe("Helpers Tests", function() {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Alice';
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });
  
    // sumPaymentTotal(type) test
    it('should sum total from allPayments objects', function () {
        const testSum = sumPaymentTotal('tipPercent');
        expect(testSum).toEqual(20);
    }); // done
  
    // calculateTipPercent(billAmt, tipAmt) test
    it('should calculate a correct tip percent based on the passed bill and tip amount', function () {
        const testTip = calculateTipPercent(100, 20);
        expect(testTip).toEqual(20);
    }); // done
  
    // appendTd(tr, value) test
    it('should append a newly created td element from the value to the passed table row element', function() {
        submitServerInfo();
        updateServerTable();

        const serverList = document.querySelectorAll('#serverTable tbody tr');

        expect(serverList.length).toEqual(1);
    }); // done

    // appendDeleteBtn(tr) test
    it('should add new delete button to the proper server in the table', function () {
        submitServerInfo();
        updateServerTable();
  
        const serverList = document.querySelectorAll('#serverTable tbody tr');

        expect(serverList.length).toEqual(1);
        expect(serverList[0].innerText.endsWith('X')).toBe(true);
    }); // done
  
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
  