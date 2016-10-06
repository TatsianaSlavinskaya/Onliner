describe('title', function() {
  var EC = protractor.ExpectedConditions;
   it('should have a title', function() {
    browser.ignoreSynchronization=true;
    browser.get('https://www.onliner.by/');
    expect(browser.getTitle()).toEqual('Onliner.by');
  });
  it ('input search', function(){
     browser.ignoreSynchronization=true;
     browser.get('https://www.onliner.by/');
     element(by.css('not touch')).isElementPresent(by.css('fast-search__input'))
         .then   (function (finder){         
        browser.wait(EC.visibilityOf($('.fast-search__input')), 1000);
    element(by.name('query')).sendKeys("iphone6s 16gb Silver");
    browser.wait(EC.visibilityOf($('.fast-search__input')), 35000); 
    browser.switchTo().frame(element(by.css('.modal-iframe')).getWebElement());    
    browser.wait(EC.visibilityOf($('.product__title')), 150000); 
    var items=element.all(by.css(".search__results li"))
    .then(function(items){
     items[0].click();  
})
    browser.wait(EC.visibilityOf($('.no-touch')), 10000); 

    });
  });
  it("atributes",function(){
  browser.wait(EC.visibilityOf($('.product-specs__controls')), 10000); 
  var cpu;
  cpu=element.all(by.css('.value__text')).getText()
  .then(function(cpu){
     expect(cpu[8]).toEqual("12 Мп");
     expect(cpu[9]).toEqual("Apple A9");
     expect(cpu[15]).toEqual("138.3 мм");
   })
   });
  it("fm-modul", function(){
   browser.wait(EC.visibilityOf($('.no-touch')), 10000); 
browser.findElement(by.css('tbody:nth-last-child(6) > tr:nth-child(3) > td:last-child > span'))
		.getAttribute('class')
		.then(function(fmModule){
			expect(fmModule).toEqual( "i-x");
		})
		.then(function(){
			console.log("+Test: FM-приёмника нет");}
			,function (err) {
    			console.error(err.message);
    	    });
  });
it("finge-print", function(){
   browser.wait(EC.visibilityOf($('.no-touch')), 10000); 
browser.findElement(by.css('tbody:nth-child(5) > tr:nth-child(12) > td:last-child > span'))
		.getAttribute('class')
		.then(function(fingerPrint){
		expect(fmModule).toEqual( "i-tip");
		})
		.then(function(){
			console.log("+Test: Сканер отпечатка пальца есть");}
			,function (err) {
    			console.error(err.message);
    	});
});
      
   
});
