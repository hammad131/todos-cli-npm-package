import {Command, flags} from '@oclif/command'
import chalk = require('chalk');
import todoApi from '../api/todoApi';

export default class Add extends Command {
  static description = 'Add new todo'

  static args = [{name: 'todo'}]

  static flags = {
    done: flags.boolean({ char: 'd' })
  }

  async run() {
    const {args, flags} = this.parse(Add);
    const todo = args.todo

    if (todo) {

      if (flags.done){
        todoApi.add(todo, true)
      } else {
        todoApi.add(todo)
      }

      this.log(`${chalk.green('[Success]')} Added new todo: ${todo}`)
    } else {
      this.error(`${chalk.red('Enter new todo')}`)
    }
  }
}