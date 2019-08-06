import simpleGit, { BranchSummary, SimpleGit } from 'simple-git/promise';
import * as inquirer from 'inquirer';

export class Repo {
  protected readonly repo: SimpleGit;

  constructor(public readonly path: string = process.cwd()) {
    this.repo = simpleGit(path);
  }

  getLocalBranches(): Promise<BranchSummary> {
    return this.repo.branch([]);
  }

  async deleteLocalBrances(): Promise<string[]> {
    const summary: BranchSummary = await this.getLocalBranches();

    const questions: inquirer.QuestionCollection = [{
      message: 'Select branches to delete',
      type: 'checkbox',
      name: 'branches',
      choices: summary.all.filter((branch: string) => branch !== 'master'),
    }];

    const response: { branches: string[] } = await inquirer.prompt<{ branches: string[] }>(questions);

    const promiseList: Array<Promise<void>> = response.branches
      .map(async (branch: string): Promise<void> => {
        await this.repo.branch(['-D', branch]);
      });

    await Promise.all(promiseList);
    return response.branches;
  }
}
