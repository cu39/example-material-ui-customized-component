class ExampleClass {
  private greeting: string

  constructor(greeting: string) {
    this.greeting = greeting
  }

  greet(name: string) {
    return `${this.greeting} ${name}!`
  }
}

const eg = new ExampleClass('Hello')
console.log(eg.greet('John'))
