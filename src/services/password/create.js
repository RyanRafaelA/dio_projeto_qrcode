import chalk from "chalk";

import handle from "../qr-code/handle";

async function createPassword(){
    console.log(chalk.green("password"));
    const password = await handle;
    console.log(password);
}

export default createPassword;