class God {
  /**
   * @returns Human[]
   */
  static create() {
    const Adam = new Man();
    const Eva = new Woman();
    return [Adam, Eva]
  }
}

class Human {
  constructor() {
  }
}

class Woman extends Human {
  constructor() {
    super()
  }
}

class Man extends Human {
  constructor() {
    super()
  }
}
