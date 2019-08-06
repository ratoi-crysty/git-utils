import { Command, flags as Flags } from '@oclif/command';
import { Repo } from '../repo';
import { trim } from 'lodash';

export default class CleanLocalBranches extends Command {
  static description = 'delete local branches';

  static flags = {
    help: Flags.help({ char: 'h' }),
  };

  async run() {
    const repo: Repo = new Repo();

    const deletedBranches: string[] = await repo.deleteLocalBrances();

    this.log('Success!');
    this.log(
      'Deleted branches: \n\n',
      deletedBranches
        .map((branch: string): string => `- ${trim(branch)}`)
        .join('\n'),
    );
  }
}
