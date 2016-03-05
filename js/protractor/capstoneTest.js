describe('navbar', function(){
	it('should have all the elements on the navbar', function(){
		browser.get('http://dtrinh888.github.io/capstone-project/#/');
		expect(element(by.css('.navbar h1')).getInnerHtml()).toMatch(/Movie Finder/);
	});
});

/*describe('thinkful', function(){
	it('should match text of class label', function(){
		browser.get('https://cube.withgoogle.com/');
		expect(element(by.css('.hero h2')).getInnerHtml()).toMatch(/The Cube is an experimental platform for interactive storytelling./);
		expect(element.all(by.css('nav li')).count()).toBe(5);
	});
});*/