import { cac } from 'cac';
import { version } from '../package.json';
import process from 'process';

const cli = cac()
  .version(version)
  .help();

cli.on('command:*', () => {
  console.error(`Unknown sub command: ${cli.args[0]}`);
  process.exit(1);
});

cli
  .command('select-branch', '選択したブランチ名を出力')
  .option('-a, --all', 'リモートブランチも含める', {
    default: false,
  })
  .option('--with-current', 'カレントブランチも含める', {
    default: false
  })
  .option('--only-merged', 'マージ済みブランチのみ', {
    default: false,
  })
  .option('--exclude <branch>', '候補に含めないブランチ', {
    default: [],
    type: [String],
  })
  .action(console.log);

cli
  .command('select-commit', '選択したコミットのハッシュを出力')
  .action(console.log);

cli
  .command('parent-branch', '派生元ブランチ名を出力')
  .action(console.log);

cli
  .command('reset-topic', '派生元からのコミットを全てソフトリセットする')
  .option('-y, --yes', '確認しない', {
    default: false,
  })
  .action(console.log);

cli
  .command('topic-changes', '派生元から変更されたファイル名を出力する')
  .option('--with-deletion', '削除されたファイルも含む', {
    default: false,
  })
  .action(console.log);

export { cli };
