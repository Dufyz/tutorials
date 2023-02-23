export type SytemUserAdressProtocol = {
    street: string;
    number: number
}
export interface SytemUserProtocol {
    firstName: string;
    userName: string;

    getAdresses(): Promise<SytemUserAdressProtocol[]>

}

export class AdminUser implements SytemUserProtocol {
    public firstName: string;
    public userName: string;
    constructor(firstName: string, userName: string) {
        this.firstName = firstName;
        this.userName = userName
    }

    async getAdresses(): Promise<SytemUserAdressProtocol[]> {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                return resolve([
                    { street: 'Av.Brasil', number: 50 },
                    { street: 'Av.Holanda', number: 100 },
                ]);
            }, 2000)
        });
    }
}

export class SystemUserProxy implements SytemUserProtocol {
    public firstName: string;
    public userName: string;

    private realUser: SytemUserProtocol | null = null
    private realUserAdresses: SytemUserAdressProtocol[] | null = null

    constructor(firstName: string, userName: string) {
        this.firstName = firstName;
        this.userName = userName
    }

    private createUser(): SytemUserProtocol {
        if (this.realUser === null) {
            this.realUser = new AdminUser(this.firstName, this.userName)
        }
        return this.realUser
    }
    async getAdresses(): Promise<SytemUserAdressProtocol[]> {
        this.realUser = this.createUser();

        if(this.realUserAdresses === null) {
            this.realUserAdresses = await this.realUser.getAdresses()
        }
        return this.realUserAdresses;
    }
}

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Guilherme', 'SchmidThomaz')
    console.log('Isso vai levar alguns segundos:')
    console.log(await user.getAdresses())

    console.log('Isso não vai demorar:')
    console.log(await user.getAdresses())

}

clientCode()