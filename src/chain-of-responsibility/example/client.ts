import AtmDispenserChain from './atm-dispenser-chain'


const atm = new AtmDispenserChain()

console.log(`enter amount to withdrawal : `)

process.stdin.on('data', (data: string) => {
	if (parseInt(data)) {
		const amount = parseInt(data)

		if (amount < 10 || amount % 10 !== 0) console.log(`amount should be positive and in multiple of 10s`)
		else {
			atm.chain1.handle(amount)

			console.log(`now go spoil yourself`)

			process.exit()
		}
	} else {
		console.log(`please enter a number`)
	}
})