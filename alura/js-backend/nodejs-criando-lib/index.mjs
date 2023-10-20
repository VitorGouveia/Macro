import fs from "node:fs/promises"
import chalk from "chalk"

const log = console.log

function cli() {
  const path = process.argv.slice(2)

  return {
    path:path[0],
    validate: path[1] ?? null
  }
}

async function getDirectoryFiles(path) {
  try {
    await fs.lstat(path)
  } catch (error) {
    log(chalk.bgWhite.red.bold("Esse diretório existe?"), error.message)
    process.exit(0)  
  }

  const stats = await fs.lstat(path)

  if(stats.isFile() || !stats.isDirectory()) {
    log(chalk.bgWhite.red.bold("ARQUIVOS NÃO SÃO PERMITIDOS! APENAS PASTAS"))
    process.exit(0)
  }

  const files = await fs.readdir(path, {
    recursive: true,
    withFileTypes: true,
  }, "utf8")

  return files
    .filter(dirent => dirent.isFile())
    .filter(file => file.name.includes(".md"))
    .filter(file => !file.path.includes("node_modules"))
    .map(file => `${file.path}/${file.name}`)
}

export async function getFile(path) {
  try {
    log(chalk.bgWhite.black("Getting R markdown file"))
    log(chalk.bgGreen.white("Searching for file with path", chalk.bold(path)))

    const file = await fs.readFile(path, "utf8")

    return {
      file,
    }
  }  catch(error) {
    return {
      error: error.message
    }
  }
}

export function parseMarkdownLinks(file) {
  const regex = new RegExp(/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm)

  return Array
    .from(file.matchAll(regex))
    .map(([_, name, link]) => ({
      name,
      link,
    }))
}

async function validateMarkdownLinks(links) {
  if(links.length <= 0) {
    return
  }
  
  
  for await(const link of links) {
    log(chalk.blue(`Validating ${link.link}`))
    const response = await fetch(link.link)

    if(!response.ok) {
      log(chalk.bgWhite.red.bold(`O link ${link.link} está indisponível.`))
    }
  }
}

const { path, validate } = cli()

const files = await getDirectoryFiles(path)

log(chalk.yellow("Processing files:"), files)

for await (const filePath of files) {
  const { error, file } = await getFile(filePath)
  
  if(error) {
    log(chalk.red.bold("getFile() Failed!"))
    log(error)
    process.exit(0)
  }

  const links = parseMarkdownLinks(file)
  log(chalk.magenta("Found following links: "), links)

  if(validate) {
    await validateMarkdownLinks(links)
  }
}