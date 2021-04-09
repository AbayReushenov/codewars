//--------------------------
class God{
  /**
   * @returns Human[]
   */
    static create(){
      // code
    }
  }
// code

Test.describe("GodTest", function() {
  Test.it("Adam should be a Man", function() {
    let humans = God.create()
    Test.assertEquals(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
  });
});
