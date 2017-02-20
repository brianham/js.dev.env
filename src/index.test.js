import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';  // file system

describe('example unit test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should include the word Hello', (done) => {

    // get html
    const indexPage = fs.readFileSync('./src/index.html', "utf-8");

    // load dom into memory
    jsdom.env(indexPage, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.contain("Hello");
      done();
      window.close();
    });
  });
});
