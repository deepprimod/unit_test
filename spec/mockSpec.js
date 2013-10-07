describe("Person", function() {
    it("says hello", function() {
        var fakePerson = new Person();
        fakePerson.sayHello = jasmine.createSpy("Say-hello spy");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });

     it("says ello ello", function() {
        var fakePerson = new Person();
        fakePerson.sayHello = jasmine.createSpy('"Say hello" spy').andReturn("ello ello");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello()).toEqual("ello ello");
    });
});

