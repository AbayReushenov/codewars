class God{
  /**
   * @returns Human[]
   */
    static create(){
      let humans =[]
      humans.push(new Man('Adam'))
      humans.push(new Woman('Eve'))
      return humans
    }
  }
  
  class Human {
    constructor(name) {
      this.name =name;
    }
  }
  
  class Man extends Human {
    constructor(name) {
      super(name)
    }
  }
  
  class Woman extends Human {
    constructor(name) {
      super(name)
    }
  }
