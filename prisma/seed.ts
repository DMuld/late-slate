import { PrismaClient, Prisma } from '../lib/generated/prisma'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'admin',
    password: '$2b$10$kbgenD58Xu8p8/gTmITtIeSfaRPjYMQE6nNQ9gkWXlm3Jy5D4HX7O',
    totalPoints: 100,
    games: {},
  },
]

export async function main() {
  //for (const u of userData) {
  //  await prisma.user.create({ data: u })
  //}
}

main()
