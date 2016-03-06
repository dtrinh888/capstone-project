describe('navbar', function(){
	it('should have all the elements on the navbar', function(){
		browser.get('http://dtrinh888.github.io/capstone-project/#/');
		expect(element(by.css('.navbar h1')).getInnerHtml()).toMatch(/Movie Finder/);
		expect(element.all(by.css('.nav-title a')).count()).toBe(1);
		element(by.cssContainingText('option', 'Action')).click();
		expect(element.all(by.css('.genre-dropdown select')).count()).toBe(1);
		expect(element.all(by.repeater('genre in genreList')).count()).toBe(0);
		expect(element.all(by.repeater('movie in genreMovies')).count()).toBe(20);
	});
});

describe('genre-detail', function(){
	it('should have all elements in genre-detail page', function(){
		browser.get('http://dtrinh888.github.io/capstone-project/#/');
		element(by.cssContainingText('option', 'Action')).click();
		expect(element(by.css('.genre-content h2')).getInnerHtml()).toMatch(/Action/);
		expect(element.all(by.css('.genre-content h2')).count()).toBe(1);
		expect(element.all(by.repeater('movie in genreMovies')).count()).toBe(20);
	});
});

describe('movie-detail', function(){
	fit('should have all elements in movie-detail page', function(){
		browser.get('http://dtrinh888.github.io/capstone-project/#/');
		element(by.cssContainingText('a', 'Whiplash')).click();
		expect(element.all(by.css('.movie-title h1')).count()).toBe(1);
		expect(element(by.css('.movie-title h1')).getInnerHtml()).toMatch(/Whiplash/);
		expect(element(by.css('.similar-movies h2')).getInnerHtml()).toMatch(/Similar Movies for Whiplash/);
	});
});

describe('home page', function(){
	it('should be able to navigate the home page', function(){
		browser.get('http://dtrinh888.github.io/capstone-project/#/');
		expect(element.all(by.repeater('topMovie in topRatedMovies')).count()).toBe(20);
		element(by.cssContainingText('a', 'Whiplash')).click();
		expect(element.all(by.css('.movie-title h1')).count()).toBe(1);
	});
});