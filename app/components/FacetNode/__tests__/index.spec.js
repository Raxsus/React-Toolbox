import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {FacetNode} from '../index.jsx';

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        shallow(<FacetNode />).contains(<div className="foo" />).should.be.true;
    });

    // it("contains spec with an expectation", function() {
    //     expect(shallow(<Foo />).is('.foo')).toBe(true);
    // });
    //
    // it("contains spec with an expectation", function() {
    //     expect(mount(<Foo />).find('.foo').length).toBe(1);
    // });
    //
    // it("can run an expectation with render", function() {
    //     expect(render(<Foo />).find('.foo').length).toBe(1);
    // });
});
// describe('Sinon test', () => {
//
//     it('should call callback with correct greeting', () => {
//         const cb = sinon.spy();
//
//         hello('foo', cb);
//
//         cb.should.have.been.calledWith('hello foo');
//     });
// });

