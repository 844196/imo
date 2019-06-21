import cac from 'cac';
import me from '../package.json';
import process from 'process';

const cli = cac()
  .version(me.version)
  .help();

cli.on('command:*', () => {
  console.error(`Unknown sub command: ${cli.args[0]}`);
  process.exit(1);
});

export { cli };
