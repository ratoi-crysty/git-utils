import {expect, test} from '@oclif/test'

describe('clean-local-branches', () => {
  test
    .stdout()
    .command(['clean-local-branches'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['clean-local-branches', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
